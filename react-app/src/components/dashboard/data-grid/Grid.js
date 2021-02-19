import React, { useState, useEffect } from 'react'

import { DataGrid } from '@material-ui/data-grid';



export const GridMaker = ({types})=> {
    const [rows, setRows] = useState([]);

 

    useEffect(() => {
        (async () => {
    const  mapHistoryToRows = () => {
      
      const gridRows = types.map((type) => {
      
        return ({
          id: type.id,
          type: type.type,
          days_to_expiry: type.days_to_expiry,
          
        }
        )
  
      })
      setRows(gridRows);
    }
    mapHistoryToRows();
})()
}, [types])

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'type', headerName: 'Type', width: 700 },
        { field: 'days_to_expiry', headerName: 'Expires', width: 200 },
        
        
      ];

    return (
      
             <div style={{ height: 500}}>
      <DataGrid rows={rows} columns={columns} pageSize={50} checkboxSelection />
      </div>
       
    )
}