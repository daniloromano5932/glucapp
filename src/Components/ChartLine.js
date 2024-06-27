import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dummyData from "../dummyData";

function ChartLine () {
  // const data = [
  //   // {
  //   //   name: 'Page A',
  //   //   uv: 4000,
  //   //   pv: 2400,
  //   //   amt: 2400,
  //   // },
  //   { name: 'Jan',
  //     uv: 2.3, 
  //     pv: 162000 },
  // ];
 

  const [opacity, setOpacity] = React.useState({
    avgTemp: 1,
    iceCreamSales: 1,
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

return (
  <div style={{ width: '100%' }}>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      width={500}
      height={300}
      data={dummyData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <Line type="monotone" dataKey="avgTemp" strokeOpacity={opacity.avgTemp} stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="iceCreamSales" strokeOpacity={opacity.iceCreamSales} stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
  <p className="notes">Tips: Hover the legend !</p>
</div>
)}

export default ChartLine;
