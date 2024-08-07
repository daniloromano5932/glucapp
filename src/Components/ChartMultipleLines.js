import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';


function ChartMultipleLines() {

  const [bloodPressure, setBloodPressure] = useState([]);
  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://localhost:8000/measurements/unitary/blood_pressure?time_period=400', {
          headers: {
            user_id: 1
          }
        })
        .then((res) => {
          setBloodPressure(res.data)
        })
        .catch((err => console.log(err)))
    }
    data();
  }, [])

  const dataPressure = bloodPressure.map((item) => {
    const data = {
      name: new Date(item.date).toLocaleDateString(),
      Max: item.max_value,
      Min: item.min_value
    }
    return data;
  })

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={dataPressure}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Max" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Min" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartMultipleLines;
