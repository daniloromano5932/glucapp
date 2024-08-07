import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';


function ChartLine() {

  const [weight, setWeight] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://localhost:8000/measurements/unitary/weight?time_period=400', {
          headers: {
            user_id: 1
          }
        })
        .then((res) => {
          setWeight(res.data)
        })
        .catch((err => console.log(err)))
    }
    data();
  }, [])


  const dataWeight = weight.map((item) => {
    const data = {
      name: new Date(item.date).toLocaleDateString(),
      Weight: item.value,
    }
    return data;
  })

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataWeight}
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
          <Line type="monotone" dot={false} dataKey="Weight" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartLine;
