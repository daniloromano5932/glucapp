import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../Hooks/useFetch';

function ChartLine() {

  const baseURL = process.env.REACT_APP_BASE_URL;


  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/weight?time_period=200`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataWeight = data.map((item) => {
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
