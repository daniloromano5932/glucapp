import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
 

function ChartArea() {
  const [weight, setWeight] = useState([]);


  useEffect(() => {
    const data = async () => {
      await axios
        .get('http://localhost:8000/measurements/glycemia?time_period=100', {
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
      <ResponsiveContainer>
        <AreaChart
          data={dataWeight}
          width={500}
          height={300}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Weight" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartArea;
    
  

