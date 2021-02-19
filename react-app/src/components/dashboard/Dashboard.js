import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Doughnut } from 'react-chartjs-2';
import Deposits from './Deposits';
import Button from '@material-ui/core/Button';
import Chart from './Chart';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getFreezerGroceries, getGroceries, getPantryGroceries } from '../../services/groceries';
import fridgeIcon from './fridge.png'
import github from '../../github.png'
import linkedin from '../../linkedin.png'
import '../../index.css'
import Fridge from './stored-items/Fridge';
import Freezer from './stored-items/Freezer';
import Pantry from './stored-items/Pantry';


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
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const userId = localStorage.getItem('userId') 
  const [groceries, setGroceries] = useState([]);
  const [freezerGroceries, setFreezerGroceries] = useState([]);
  const [pantryGroceries, setPantryGroceries] = useState([]);
  const [screen, setScreen] = useState('fridge')
 

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);



  useEffect(() => {
    
    (async () => {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // a and b are javascript Date objects
  function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
    const response = await getGroceries(userId)
    const freezerResponse = await getFreezerGroceries(userId)
    const pantryResponse = await getPantryGroceries(userId)
   
    const sortedGroceries = response.groceries.sort((groceryA, groceryB) => {
      const a = new Date(groceryA.createdAt),
      b = new Date(),
      difference = dateDiffInDays(a, b);
      const c = new Date(groceryB.createdAt),
      d = new Date(),
      difference2 = dateDiffInDays(c, d);

      return (groceryA.type.days_to_expiry -difference) - (groceryB.type.days_to_expiry - difference2)
    })

    const sortedFreezerGroceries = freezerResponse.groceries.sort((groceryA, groceryB) => {
      const a = new Date(groceryA.createdAt),
      b = new Date(),
      difference = dateDiffInDays(a, b);
      const c = new Date(groceryB.createdAt),
      d = new Date(),
      difference2 = dateDiffInDays(c, d);

      return (groceryA.type.days_to_expiry -difference) - (groceryB.type.days_to_expiry - difference2)
    })

    const sortedPantryGroceries = pantryResponse.groceries.sort((groceryA, groceryB) => {
      const a = new Date(groceryA.createdAt),
      b = new Date(),
      difference = dateDiffInDays(a, b);
      const c = new Date(groceryB.createdAt),
      d = new Date(),
      difference2 = dateDiffInDays(c, d);

      return (groceryA.type.days_to_expiry -difference) - (groceryB.type.days_to_expiry - difference2)
    })

    await setGroceries(sortedGroceries)
    await setFreezerGroceries(sortedFreezerGroceries)
    await setPantryGroceries(sortedPantryGroceries)
    setTimeout(function(){ setLoaded(true); }, 500);
    
  })()
  }, [])

  const doughnutData = {
    datasets: [{
        data: [groceries.length, freezerGroceries.length, pantryGroceries.length],
        
        backgroundColor: [
          '#31e89f', '#31c6e8', 'lightcoral'
        ],
        borderColor: [
          '#31e89f', '#31c6e8', 'lightcoral'
        ],
        borderWidth: 5,
    }],
    

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Fridge',
        'Freezer',
        'Pantry'
    ],
    
};

const pieOptions= {
  legend: {
    display: false,
    position: "right"
  },
 responsive: true,
}
  if (!loaded ) {
    return (
     
      <>
    
      <main className="centered middled">
      <img className='icon-progress' height='75px' width='150px' src={fridgeIcon} alt='fridgeIcon' />
        <b>Loading Groceries...</b>
        
        <div className='circle-progress'> <CircularProgress size='100px' color='secondary'/> </div>
        </main>
      </>
      )
    }
 
  return (
    
    
    
    
   
        <Container maxWidth="lg" className={classes.container}>
          {/* <RecipeSearchInput /> */}
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              {/* <Paper className={fixedHeightPaper}> */}
                <Chart groceries={[...groceries, ...freezerGroceries, ...pantryGroceries]} setGroceries={setGroceries}
                setFreezerGroceries={setFreezerGroceries} setPantryGroceries={setPantryGroceries}/>
              {/* </Paper> */}
            </Grid>
            
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
                <Deposits />
                
              </Paper>
            </Grid>
          
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className='button-container'> 
              <Button variant={screen==='fridge' ? 'contained':"outlined"} color="primary" 
                              onClick={async ()=> {
                              setScreen('fridge')
                              }}>Fridge</Button>
              <Button variant={screen==='freezer' ? 'contained':"outlined"}  color="primary" 
                              onClick={async ()=> {
                              setScreen('freezer')
                              }}>Freezer</Button>
              <Button variant={screen==='pantry' ? 'contained':"outlined"}  color="primary" 
                              onClick={async ()=> {
                              setScreen('pantry')
                              }}>Pantry</Button>
                   <div className='doughnut'>
                  <Doughnut data={doughnutData} options={pieOptions} />
                  </div>
                  </div>
                
                  { screen === 'fridge' ? <Fridge groceries={groceries} setGroceries={setGroceries}/> :
                  screen === 'freezer' ? <Freezer groceries={freezerGroceries} setGroceries={setFreezerGroceries}/> :
                <Pantry groceries={pantryGroceries} setGroceries={setPantryGroceries}/>
                  }
              </Paper>
            </Grid>
            
          </Grid>
          <Box sx={{ pt: 4 }}>
            <Copyright />
          </Box>
        </Container>
        
  );
}
