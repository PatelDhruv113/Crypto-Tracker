import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'


function LineChart({historaicalData}) {

    const [data, setData] = useState([["Date", "Prices"]])
      
    useEffect(()=> {
       let dataCopy = [["Date", "Prices"]];
       if(historaicalData.prices){
          historaicalData.prices.map((item)=>{
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
          })
          setData(dataCopy);
       }// 10/05/2024
    }, [historaicalData])


    return (
    <Chart
       chartType='LineChart'
       data={(data)}
       height="100%"
       legendToggle
    />
  )
}

export default LineChart
