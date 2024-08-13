import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../Hooks/useFetch';

function ChartMultipleLines({timePeriod}) {

  const baseURL = process.env.REACT_APP_BASE_URL;

  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/blood_pressure?time_period=${timePeriod}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataPressure = data.map((item) => {
    const data = {
      name: new Date(item.month).toLocaleDateString('en-US', {month: 'long'}),
      Max: Math.round(item.avg_max_metric),
      Min: Math.round(item.avg_min_metric)
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
          <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
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
