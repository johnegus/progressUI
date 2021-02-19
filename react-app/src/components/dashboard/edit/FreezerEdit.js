import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { editFreezerGrocery } from '../../../services/groceries';
import TextField from '@material-ui/core/TextField';
import '../mini-profile.css'
const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));

export const FreezerEditGrocery = ({grocery, groceries, setGroceries})=> {
    const classes = useStyles();
    const [isEdit, setIsEdit] = useState(false)
    const [itemName, setItemName] = useState("");

    const onEdit = () => {
        setIsEdit(true)
      }

      const onCancel = () => {
        setIsEdit(false)
      }
    
      const onEditSubmit = async (e) => {
        e.preventDefault()  
        const newGrocery = await editFreezerGrocery(grocery.id, itemName);
        const newGroceries = groceries.map(item => item.id === grocery.id ? newGrocery: item)
        // const sortedGroceries = [...groceries, newGrocery].sort((a, b) => a.type.days_to_expiry - b.type.days_to_expiry)
    
        setGroceries(newGroceries)
        setItemName('')
        setIsEdit(false)
      }

    return (
        <>
            {isEdit ?
                
                <div className='editform'>
                  <form onSubmit={onEditSubmit} className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="filled-textarea"
                    label="Item Name"
                    placeholder="Item Name"
                    multiline
                    size="small"
                    variant="filled"
                    value={itemName} 
                    onChange={e => setItemName(e.target.value)}
                  />
                  <Button type="submit" variant="outlined" color="primary">Save</Button>
                  <Button variant="outlined" color="secondary"  onClick={async ()=> {
                            onCancel()
                            }}>Cancel
                </Button>
                  </form>
                  
                </div>
              
                : grocery.item_name
                
              }
              <div className='editform'>
              {isEdit ? '':
              // <div className='edit-button'>
              <Button variant="outlined" color="primary"  onClick={async ()=> {
                            onEdit()
                            }}>Edit
                </Button>
               
}
</div>
        </>
    )
}