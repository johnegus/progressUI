import React, { useState, useEffect } from 'react';
import {Bar, HorizontalBar} from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';



export const JobChart = ({activities, screen})=> {
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);
  
    useEffect(() => {
        if(activities){

        //   let result = activities.reduce(function(acc, val){
        //     var o = acc.filter(function(obj){
        //       console.log(o)
        //         return obj.type.type==val.type.type;
        //     }).pop() || {name:val.type.type, value:0};
            
        //     o.value += val.value;
        //     acc.push(o);
        //     return acc;
        // },[]);
        
        // console.log(result);
    


          let holder = {};

          activities.forEach(function(activity){
            if (activity.type.type in holder){
              holder[activity.type.type] = holder[activity.type.type] + activity.type.days_to_expiry * activity.hours_multiplier;
            } else {
              holder[activity.type.type] = activity.type.days_to_expiry * activity.hours_multiplier
            }


          })

          let obj2 = [];

          for (let prop in holder) {
            obj2.push({type: prop, value: holder[prop]});
          }

          console.log(obj2)

          let stockChartXValuesFunction = [];
          let stockChartYValuesFunction = [];
          obj2.map((activity) => {
            stockChartXValuesFunction.push(activity.type)
            stockChartYValuesFunction.push(activity.value.toFixed(1))
            return activity;
        })
     
        
        setstockChartXValues(stockChartXValuesFunction)
        setstockChartYValues(stockChartYValuesFunction)
        }
      }, [activities]);
    // const data = {
    //   labels: stockChartXValues,
    //   datasets: [
    //     {
    //       label: 'Total Points',
    //       backgroundColor: 'salmon',
    //       borderColor: 'salmon',
    //       borderWidth: 1,
    //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //       hoverBorderColor: 'rgba(255,99,132,1)',
    //       data: stockChartYValues
    //     }
    //   ]
    // };

    const data = {
      labels: stockChartXValues,
      datasets: [
        {
          label: 'Total Points',
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



  
  const doughnutData = {
    datasets: [{
        data: stockChartYValues,
        
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
        borderWidth: 5,
    }],
    

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: stockChartXValues,
    
};

const pieOptions= {
  legend: {
    display: false,
    position: "left"
  },
 responsive: true,
}
    return (
        <>
    <div className='data-bars'>
  
         <div>
      {screen === 'fridge'? 
        
        <HorizontalBar
          data={data}
          width={900}
          height={250}
          options={{
            maintainAspectRatio: true
          },
          {
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              display: false,
              position: "right"
            }
          }
          
        }
        />
:

<Doughnut data={doughnutData} options={pieOptions} />

}
      </div>
          </div>
        </>
    )
}