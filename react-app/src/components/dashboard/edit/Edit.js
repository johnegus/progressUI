import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { editActivity } from '../../../services/activities';
import TextField from '@material-ui/core/TextField';
import '../mini-profile.css'
const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));

export const EditActivity = ({activity, activities, setactivities})=> {
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
        const newActivity = await editActivity(activity.id, itemName);
        const newactivities = activities.map(item => item.id === activity.id ? newActivity: item)
        // const sortedactivities = [...activities, newActivity].sort((a, b) => a.type.days_to_expiry - b.type.days_to_expiry)
    
        setactivities(newactivities)
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
              
                : activity.item_name
                
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