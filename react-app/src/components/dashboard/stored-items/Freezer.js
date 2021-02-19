import React, { useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../Title';
import '../mini-profile.css'

import { DeleteFreezerGrocery } from '../delete/FreezerDelete';
import AddFreezerGrocery from '../addItem/AddFreezerItem';
import { DateDiffInDays } from '../dateDiffer/DateDiffInDays';
import { ExpireCountdown } from '../dateDiffer/ExpireCountdown';

import Modal from 'react-modal'
import RecipeSearch from '../../recipe-search/RecipeSearch';
import CloseIcon from '@material-ui/icons/Close';


import { FreezerEditGrocery } from '../edit/FreezerEdit';







export default function Freezer({groceries, setGroceries}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentGrocery, setCurrentGrocery] = useState('')
  



  
  const handleTypeClick = (grocery) => {
    setCurrentGrocery(grocery.type.type);
    setModalIsOpen(true)   
  }



 

  return (
    <React.Fragment>
    <Title>Freezer</Title>
      
      <AddFreezerGrocery groceries={groceries} setGroceries={setGroceries}/>
      <div className='freezerBackground'>
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
          {groceries.map((grocery) => (
            <TableRow key={grocery.id}>
              <TableCell>{grocery.createdAt}</TableCell>
              <TableCell><DateDiffInDays grocery={grocery} /></TableCell>
              <TableCell>
                <FreezerEditGrocery grocery={grocery} groceries={groceries} setGroceries={setGroceries}/>
              </TableCell>
              <TableCell onClick={() => handleTypeClick(grocery)}>{grocery.type.type}</TableCell>
              <TableCell><ExpireCountdown grocery={grocery} /> </TableCell>
              <TableCell align="right"><DeleteFreezerGrocery groceries={groceries} grocery={grocery} setGroceries={setGroceries} /></TableCell>
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