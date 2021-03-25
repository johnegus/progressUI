import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../Title';
import '../mini-profile.css'

import { DeleteActivity } from '../delete/Delete';
import AddActivity from '../addItem/Add';





import { EditActivity } from '../edit/Edit';


export default function Fridge({activities, setactivities}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentActivity, setCurrentActivity] = useState('')
  



  
  const handleTypeClick = (activity) => {
    setCurrentActivity(activity.type.type);
    setModalIsOpen(true)   
  }



 

  return (
    <React.Fragment>
    <Title>Job Search Weekly Tally</Title>
      
      <AddActivity activities={activities} setactivities={setactivities}/>
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
          {activities.length > 0 ? activities.slice(0).reverse().map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>{activity.createdAt}</TableCell>
              <TableCell>{activity.hours_multiplier}</TableCell>
              <TableCell>
                <EditActivity activity={activity} activities={activities} setactivities={setactivities}/>
              </TableCell>
              <TableCell onClick={() => handleTypeClick(activity)}>{activity.type.type}</TableCell>
              <TableCell>{activity.type.days_to_expiry * activity.hours_multiplier} </TableCell>
              <TableCell align="right"><DeleteActivity activities={activities} activity={activity} setactivities={setactivities} /></TableCell>
            </TableRow>
          )): ''}
          
            
          
        </TableBody>
      </Table>
            
      </div>
          
    </React.Fragment>
  );
}
