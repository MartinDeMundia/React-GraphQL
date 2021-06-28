import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,    
  } from 'recharts';
 const FootfallChart = (props) => {
    const { dbObject } = props;
    const obj = [];
    for (var x in dbObject) {  
       obj.push({name: dbObject[x].name ,amnt:dbObject[x].amnt});
     }
 return (   
    <div class="card-body pt-0 chart_container">                
    <LineChart
            width={500}
            height={300}
            data={obj}
            margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
            <ReferenceLine y={9800} label="Max" stroke="red" />
            <Line type="monotone" dataKey="amnt" stroke="#8884d8" />                   
    </LineChart>                                      
  </div>
);
};
export default FootfallChart;