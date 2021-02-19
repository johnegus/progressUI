import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';



export const JobChart = ({groceries})=> {
    const userId = localStorage.getItem('userId')
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);
  console.log(stockChartYValues)
  
    useEffect(() => {
        if(groceries){

          let stockChartXValuesFunction = [];
          let stockChartYValuesFunction = [];
          groceries.map((grocery) => {
            stockChartXValuesFunction.push(grocery.type.type)
            stockChartYValuesFunction.push(grocery.type.type, grocery.type.days_to_expiry)
            return grocery;
        })
        let unique = [...new Set(stockChartXValuesFunction)];
        let newArray = []
        let counter = 0;
        for (let i = 0; i < stockChartXValuesFunction.length; i++) {
            const element1 = stockChartXValuesFunction[i];
            
            for (let ii = 0; ii < stockChartYValuesFunction.length-1; ii++) {
                const element2 = stockChartYValuesFunction[ii];
                if (element1 === element2){
                    counter += stockChartYValuesFunction[ii+1]
                }
                

            }
            newArray.push(counter)
            counter = 0
        }
        console.log(newArray)
        setstockChartXValues(unique)
        setstockChartYValues(newArray)
        }
      }, [groceries]);
    const data = {
      labels: stockChartXValues,
      datasets: [
        {
          label: 'Days to Expiry',
          backgroundColor: 'salmon',
          borderColor: 'salmon',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: stockChartYValues
        }
      ]
    };


    return (
        <>
    <div className='data-bars'>
  
         <div>
        
        <Bar
          data={data}
        //   width={2000}
        //   height={600}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
          </div>
        </>
    )
}