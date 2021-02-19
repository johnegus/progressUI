import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import CircularProgress from '@material-ui/core/CircularProgress';
import fridgeIcon from './fridge.png'

import { getFreezerTypes, getPantryTypes, getTypes } from '../../services/types';
import { GridMaker } from './data-grid/Grid';
import ChartDataBase from './ChartDataBase';
import github from '../../github.png'
import linkedin from '../../linkedin.png'
import '../../index.css'
import Title from './Title';


function Copyright() {
  return (
    <>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/john-hiestand-3bb22a17/">
      John Hiestand 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Food Data from '}
      <Link color="inherit" href="https://food.unl.edu/free-resource/food-storage">
      The University of Nebraska–Lincoln
      </Link>
      
    </Typography>
    <div className='miniInfo1'>
    <div>
    <a href="https://github.com/johnegus/" target="_blank" rel="noreferrer"> 
      
        <img className='icons' height='25px' width='25px' src={github} alt='github' />
        </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/john-hiestand-3bb22a17/" target="_blank" rel="noreferrer"> 
        
        <img className='icons' height='25px' width='25px' src={linkedin} alt='linkedin' />
        </a>
    </div>
    </div>
    </>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    // background: 'rgb(250,2,2)',
    // background: 'linear-gradient(90deg, rgba(250,2,2,1) 0%, rgba(10,121,158,1) 50%, rgba(0,255,139,1) 100%)'
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function User() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
 
  const [types, setTypes] = useState([]);
  const [freezerTypes, setFreezerTypes] = useState([]);
  const [pantryTypes, setPantryTypes] = useState([]);


  useEffect(() => {
    (async () => {
    const response = await getTypes()
    const freezerResponse = await getFreezerTypes()
    const pantryResponse = await getPantryTypes()
    setTypes(response.types)
    setFreezerTypes(freezerResponse.types)
    setPantryTypes(pantryResponse.types)
    setTimeout(function(){ setLoaded(true); }, 500);
    
  })()
  }, [])

  if (!loaded ) {
    return (
      
      <>
    
    <main className="centered middled">
      <img className='icon-progress' height='75px' width='150px' src={fridgeIcon} alt='fridgeIcon' />
        <b>Loading Database...</b>
        
        <div className='circle-progress'> <CircularProgress size='100px' color='secondary'/> </div>
        </main>
      </>
      )
    }

  return (
    
      
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              {/* <Paper className={fixedHeightPaper}> */}
              <Title>Fridge</Title>
                <ChartDataBase types={types}/>
                <Title>Freezer</Title>
                <ChartDataBase types={freezerTypes}/>
                <Title>Pantry</Title>
                <ChartDataBase types={pantryTypes}/>
              {/* </Paper> */}
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
                <Deposits />
                
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Title>Fridge</Title>
                <GridMaker types={types} />
              <Title>Freezer</Title>
                <GridMaker types={freezerTypes} />
              <Title>Pantry</Title>
                <GridMaker types={pantryTypes} />
                
              </Paper>
            </Grid>
            
          </Grid>
          <Box sx={{ pt: 4 }}>
            <Copyright />
          </Box>
        </Container>
      
    
  );
}
