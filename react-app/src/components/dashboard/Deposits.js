import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import CloseIcon from '@material-ui/icons/Close';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import profile from "./Profile.png"
import './mini-profile.css'
import { EditAvatar } from './edit/EditAvatar';
import { DeleteUser } from './edit/DeleteUser';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({groceries}) {
  const classes = useStyles();
  const [user, setUser] = useState({})
  const year = new Date().getFullYear();
  const month =new Date().getMonth() + 1;
  const date = new Date().getDate()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [accumulation, setAccumulation] = useState(0)
  const [applications, setApplications] = useState(0)

 
    
    useEffect(() => {
       let user = localStorage.getItem('userId');
        (async () => {
            const response = await fetch(`/api/users/${user}`);
            const userA = await response.json();
            setUser(userA);
        })()
    }, [])

    const handleClick = (grocery) => {

      setModalIsOpen(true)   
    }

    console.log(groceries)
   
    useEffect(() => {
      if(groceries){
        const deposits = (groceries.reduce(function (accumulator, instance){
          let unique = [...new Set(instance.type.type)];
          console.log(unique);
          return accumulator +  parseFloat(instance.type.days_to_expiry * instance.hours_multiplier);
        }, 0)).toFixed(2);
        let applicationNum = 0
        for(let i = 0; i < groceries.length; ++i){
          if(groceries[i].grocery_types_id === 13)
          applicationNum++;
      }
      
      
        setAccumulation(parseFloat(deposits))
        setApplications(applicationNum)
      }
    }, [groceries]);
  return (
    <React.Fragment>
      <div className='miniProfile' onClick={() => handleClick(user)}>
            {user.avatar ? (
                <img src={user.avatar} alt='user' />
            ) : (
                <img src={profile} alt='stock profile' />
            )}
            <h2 id={user.id} onClick={handleClick}>{user.first_name} {user.last_name}</h2>
            <Typography color="textSecondary" className={classes.depositContext}>
            Today is {month + '/' + date + '/' + year}
            
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
            
            Total Weekly Points: <b>{accumulation}</b>
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
            
            Total Jobs Applied: <b>{applications}</b>
            </Typography>
        </div>
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          closeTimeoutMS={500}
          style={
            {
            content: {
              background: 'linear-gradient(7deg, rgba(2,0,36,1) 0%, rgba(212,212,228,0.48921566917782733) 34%, rgba(0,212,255,1) 100%)', 
              position: 'absolute',
              top: '20%',
              left: '40%',
              right: '30%',
              bottom: '50%',
              border: '1px solid #ccc',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '5px',
              outline: 'none',
              padding: '20px',
              zIndex: '30',
            }
          }
          }
          >
            <div className='closeIcon'>
              <CloseIcon onClick={() => setModalIsOpen(false)}>Close</CloseIcon>
            </div>
            <div className='editAvatar'>
            <EditAvatar user={user} setUser={setUser} setModalIsOpen={setModalIsOpen}/>
            </div>
            <div className='deleteUser'>
            <DeleteUser user={user} />
            </div>
          </Modal>
    </React.Fragment>
  );
}
