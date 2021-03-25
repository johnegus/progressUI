import React, { useState, useEffect} from 'react'
import { addActivity } from '../../../services/activities';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getTypes } from '../../../services/types';
import Alert from '@material-ui/lab/Alert';

import './add.css'



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      zIndex: 0,
    },
  },
}));

export default function AddActivity({activities, setactivities}) {
  const classes = useStyles();
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState(null);
  const user = localStorage.getItem('userId');
  const [types, setTypes] = useState([]);
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('')
  const [hours, setHours] = useState(1)

  

  useEffect(() => {
    (async () => {
    const response = await getTypes()
    setTypes(response.types)
  })()
  }, [])

  const onAddActivity = async (e) => {  
      e.preventDefault()  
      if (!itemType ){
        setErrors('Please set an activity type.')
        setTimeout(function()
           {
             setErrors('')
           },4000);
      } 
      else{
      const newActivity = await addActivity(user, itemName, itemType.id, hours);

      setactivities([...activities, newActivity])
      setItemName('')
      setErrors('')
      setHours(1)
      setSuccess('Activity added to tally.')
        setTimeout(function()
           {
            setSuccess('')
           },4000);
    }
    
    }

    const onUps = (e, newValue) => {
      
      setItemType(newValue);

      if (itemType === 'Apply' || itemType === 'Email' || itemType === 'Email Outreach' || itemType === 'Get Reference' || itemType === 'LinkedIn Connection Request' ||
      itemType === 'Phone Screen' || itemType === 'Phone Interview'|| itemType === 'Phone Call' || itemType === 'Networking Event'
      || itemType === 'Technical Interview' || itemType === 'Coding Challenge' || itemType === 'On-Site Interview'){
        setHours(1)
      }
    }


  return (
    <form onSubmit={onAddActivity} className={classes.root} noValidate autoComplete="off">
      <div className='addForm'>
      
     
        <Autocomplete
        required
        options= {types}
        getOptionLabel= {(option) => option.type}
        id="tags-filled"
        debug
        
        renderInput={(params) => <TextField {...params} variant="filled" label="Item Type" margin="normal" />}
        value={itemType} 
        onChange={onUps}
      />

        <TextField
          // required
          id="filled-textarea"
          label="Item Name"
          placeholder="Item Name"
          
          variant="filled"
          value={itemName} 
          onChange={e => setItemName(e.target.value)}
        />

        <TextField
          id="standard-number"
          label="Hours Multiplier"
          type="number"
          variant="filled"
          placeholder="Optional (Default: 1)"
          value={hours} 
          onChange={e => setHours(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="outlined" color="primary">Add Activity</Button>
        {errors ? <Alert className='fade-out' severity="error">{errors}</Alert> : success ?
         <Alert className='fade-out' severity="success">Activity added.</Alert> :
         ''
         }
      </div>
      
    </form>
  );
}
