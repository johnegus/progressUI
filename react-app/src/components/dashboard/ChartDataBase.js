import React, { useState, useEffect } from 'react';

import './mini-profile.css'

import {Bar} from 'react-chartjs-2';

import './mini-profile.css'



export default function ChartDataBase({types}) {

  const [stockChartXValues, setstockChartXValues] = useState([]);
  const [stockChartYValues, setstockChartYValues] = useState([]);

  useEffect(() => {
    (async () => {
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
  if (types) {
    

    const sortedTypes = types.sort((groceryA, groceryB) => groceryA.days_to_expiry - groceryB.days_to_expiry)
    sortedTypes.map((type) => {
        stockChartXValuesFunction.push(type.type)
        stockChartYValuesFunction.push(type.days_to_expiry)
        return type;
    })
  }
  setstockChartXValues(stockChartXValuesFunction)
  setstockChartYValues(stockChartYValuesFunction)
  })()
  }, [types])

  const data = {
    labels: stockChartXValues,
    datasets: [
      {
        label: 'Points per Activity',
        backgroundColor: ['#a55fc1', '#d65ab1', '#74d14c', '#f2af58', '#4c96d7', 
        '#ec4c4c', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        borderColor: ['#a55fc1', '#d65ab1', '#74d14c', '#f2af58', '#4c96d7', 
        '#ec4c4c', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        borderWidth: 1,
        hoverBackgroundColor: ['#a55fc1', '#d65ab1', '#74d14c', '#f2af58', '#4c96d7', 
        '#ec4c4c', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: stockChartYValues
      }
    ]
  };
  return (
    <React.Fragment>
      <div className='data-bars'>
  
         <div>
        
        <Bar
          data={data}
          width={1232}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
          </div>
          
    </React.Fragment>
  );
}