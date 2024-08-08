import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../hooks/useFetch';

function ChartMultipleLines() {

  const { data, loading, error } = useFetch('http://localhost:8000/measurements/unitary/blood_pressure?time_period=200', {
    headers: {
      user_id: 1
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataPressure = data.map((item) => {
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
