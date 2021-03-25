import React, { useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../Title';
import '../mini-profile.css'

import { DeletePantryActivity } from '../delete/PantryDelete';
import AddPantryActivity from '../addItem/AddPantryItem';
import { DateDiffInDays } from '../dateDiffer/DateDiffInDays';
import { ExpireCountdown } from '../dateDiffer/ExpireCountdown';

import Modal from 'react-modal'
import RecipeSearch from '../../recipe-search/RecipeSearch';
import CloseIcon from '@material-ui/icons/Close';


import { PantryEditActivity } from '../edit/PantryEdit';


export default function Pantry({activities, setactivities}) {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentActivity, setCurrentActivity] = useState('')
  



  
  const handleTypeClick = (activity) => {
    setCurrentActivity(activity.type.type);
    setModalIsOpen(true)   
  }



 

  return (
    <React.Fragment>
    <Title>Pantry</Title>
     
      <AddPantryActivity activities={activities} setactivities={setactivities}/>
     <div className='pantryBackground'>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Stored</TableCell>
            <TableCell>Days Passed</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Expires</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>{activity.createdAt}</TableCell>
              <TableCell><DateDiffInDays activity={activity} /></TableCell>
              <TableCell>
                <PantryEditActivity activity={activity} activities={activities} setactivities={setactivities}/>
              </TableCell>
              <TableCell onClick={() => handleTypeClick(activity)}>{activity.type.type}</TableCell>
              <TableCell><ExpireCountdown activity={activity} /> </TableCell>
              <TableCell align="right"><DeletePantryActivity activities={activities} activity={activity} setactivities={setactivities} /></TableCell>
            </TableRow>
          ))}
          
            
          
        </TableBody>
      </Table>
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
              left: '1%',
              right: '1%',
              bottom: '5%',
              border: '1px solid #ccc',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '5px',
              outline: 'none',
              padding: '20px'
            }
          }
          }
          >
            <div className='closeIcon'>
              <CloseIcon onClick={() => setModalIsOpen(false)}>Close</CloseIcon>
            </div>
            <RecipeSearch currentActivity={currentActivity}/>
            
          </Modal>
          
    </React.Fragment>
  );
}