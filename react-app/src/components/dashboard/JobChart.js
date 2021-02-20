import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';



export const JobChart = ({groceries})=> {
    const userId = localStorage.getItem('userId')
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);
  
    useEffect(() => {
        if(groceries){

          let stockChartXValuesFunction = [];
          let stockChartYValuesFunction = [];
          groceries.map((grocery) => {
            stockChartXValuesFunction.push(grocery.type.type)
            stockChartYValuesFunction.push(grocery.type.type, grocery.type.days_to_expiry * grocery.hours_multiplier)
            return grocery;
        })
        let unique = [...new Set(stockChartXValuesFunction)];
        let newArray = []
        let counter = 0;
        console.log(unique)
        console.log(stockChartYValuesFunction)

        for (let i = 1; i < stockChartXValuesFunction.length; i++) {
            const element1 = stockChartXValuesFunction[i];
            
            for (let ii = 0; ii < stockChartYValuesFunction.length+2; ii+=2) {
                const element2 = stockChartYValuesFunction[ii];
                if ( element1 === element2){
                    counter += stockChartYValuesFunction[ii+1]
                }
                else{
                  newArray.push(counter)
                  counter = 0
                }
                

            }
        }
        console.log(newArray)
        let newNewArray = []
        for(let i=0; i<newArray.length;i++ )
        { 
           if(newArray[i]!== 0)
           newNewArray.push(newArray[i]); 
         } 

         console.log(newNewArray)
        
        setstockChartXValues(unique)
        setstockChartYValues(newNewArray)
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
  //   let stackedBar = new Chart(ctx, {
  //     type: 'bar',
  //     data: stockChartYValues,
  //     options: {
  //         scales: {
  //             xAxes: [{
  //                 stacked: true
  //             }],
  //             yAxes: [{
  //                 stacked: true
  //             }]
  //         }
  //     }
  // });
  const doughnutData = {
    datasets: [{
        data: stockChartYValues,
        
        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        borderColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        borderWidth: 5,
    }],
    

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: stockChartXValues,
    
};

const pieOptions= {
  legend: {
    display: false,
    position: "right"
  },
 responsive: true,
}
    return (
        <>
    <div className='data-bars'>
  
         <div>
        {/* {stackedBar} */}
        
        <Bar
          data={data}
          width={800}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />

<Doughnut data={doughnutData} options={pieOptions} />

      </div>
          </div>
        </>
    )
}