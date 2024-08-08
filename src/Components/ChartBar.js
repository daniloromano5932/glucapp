import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
 
function ChartBar() {

  const [heartRate, setHeartRate] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://localhost:8000/measurements/unitary/heart_rate?time_period=200', {
          headers: {
            user_id: 1
          }
        })
        .then((res) => {
          setHeartRate(res.data)
        })
        .catch((err => console.log(err)))
    }
    data();
  }, []);

  const dataHeart = heartRate.map((item) => {
    const data = {
      name: new Date(item.date).toLocaleDateString(),
      Heart: item.value,
    }
    return data;
  })

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataHeart}
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
          <Bar dataKey="Heart" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartBar;
