import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../Title';
import '../mini-profile.css'

import { DeleteGrocery } from '../delete/Delete';
import AddGrocery from '../addItem/Add';
import { DateDiffInDays } from '../dateDiffer/DateDiffInDays';
import { ExpireCountdown } from '../dateDiffer/ExpireCountdown';

import Modal from 'react-modal'
import RecipeSearch from '../../recipe-search/RecipeSearch';
import CloseIcon from '@material-ui/icons/Close';


import { EditGrocery } from '../edit/Edit';


export default function Fridge({groceries, setGroceries}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentGrocery, setCurrentGrocery] = useState('')
  



  
  const handleTypeClick = (grocery) => {
    setCurrentGrocery(grocery.type.type);
    setModalIsOpen(true)   
  }



 

  return (
    <React.Fragment>
    <Title>Job Search Weekly Tally</Title>
      
      <AddGrocery groceries={groceries} setGroceries={setGroceries}/>
      <div className='fridgeBackground'>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Stored</TableCell>
            <TableCell>Hour Multiplier</TableCell>
            <TableCell>Item Description</TableCell>
            <TableCell>Activity Type</TableCell>
            <TableCell>Total Points</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.map((grocery) => (
            <TableRow key={grocery.id}>
              <TableCell>{grocery.createdAt}</TableCell>
              <TableCell>{grocery.hours_multiplier}</TableCell>
              <TableCell>
                <EditGrocery grocery={grocery} groceries={groceries} setGroceries={setGroceries}/>
              </TableCell>
              <TableCell onClick={() => handleTypeClick(grocery)}>{grocery.type.type}</TableCell>
              <TableCell>{grocery.type.days_to_expiry * grocery.hours_multiplier} </TableCell>
              <TableCell align="right"><DeleteGrocery groceries={groceries} grocery={grocery} setGroceries={setGroceries} /></TableCell>
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
            <RecipeSearch currentGrocery={currentGrocery}/>
            
          </Modal>
          
    </React.Fragment>
  );
}
