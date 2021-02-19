import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../mini-profile.css'
import { editAvatar } from '../../../services/users';
const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));

export const EditAvatar = ({user, setUser, setModalIsOpen})=> {
    const classes = useStyles();
    const [avatar, setAvatar] = useState("");

    
    
      const onEditSubmit = async (e) => {
        e.preventDefault()  
        const newUser = await editAvatar(user.id, avatar);    
    
        setAvatar('')
        setUser(newUser)
        setModalIsOpen(false)
      }

    return (
        <>
        
                
                <div >
                  <form onSubmit={onEditSubmit} className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="filled-textarea"
                    label="Avatar URL"
                    placeholder="Avatar URL"
                    multiline
                    size="small"
                    variant="filled"
                    value={avatar} 
                    onChange={e => setAvatar(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="primary" >Save</Button>
                  
                  </form>
                  
                </div>
             
       
        </>
    )
}