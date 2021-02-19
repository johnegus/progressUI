import React, { useState, useEffect} from 'react'
import { addPantryGrocery } from '../../../services/groceries';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getPantryTypes } from '../../../services/types';
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

export default function AddPantryGrocery({groceries, setGroceries}) {
  const classes = useStyles();
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState(null);
  const user = localStorage.getItem('userId');
  const [types, setTypes] = useState([]);
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('')


  

  useEffect(() => {
    (async () => {
    const response = await getPantryTypes()
    setTypes(response.types)

  })()
  }, [])

  const onAddGrocery = async (e) => {  
      e.preventDefault()  
      if (!itemType ){
        setErrors('Please set an item type.')
        setTimeout(function()
           {
             setErrors('')
           },4000);
      } 
 
      else{
      const newGrocery = await addPantryGrocery(user, itemName, itemType.id);
      const sortedGroceries = [...groceries, newGrocery].sort((a, b) => a.type.days_to_expiry - b.type.days_to_expiry)

      setGroceries(sortedGroceries)
      setItemName('')
      setErrors('')
      setSuccess('Item added to pantry.')
      setTimeout(function()
         {
          setSuccess('')
         },4000);
      setItemType(null)
    }
    
    }

    const onUps = (e, newValue) => {
      
      setItemType(newValue);
    }


  return (
    <form onSubmit={onAddGrocery} className={classes.root} noValidate autoComplete="off">
      <div className='addForm'>
      
      
        <Autocomplete
        required
        options= {types}
        getOptionLabel= {(option) => option.type}
        id="Item Type"
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
        <Button type="submit" variant="outlined" color="primary">Add Pantry Item</Button>
        {errors ? <Alert className='fade-out' severity="error">{errors}</Alert> : success ?
         <Alert className='fade-out' severity="success">Item added to fridge.</Alert> :
         ''
         }
      </div>
      
    </form>
  );
}