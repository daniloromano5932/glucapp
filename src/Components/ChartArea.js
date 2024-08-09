import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '../Hooks/useFetch';


function ChartArea() {

  const baseURL = process.env.REACT_APP_BASE_URL;

  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/glycemia?time_period=200`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataGlycemia = data.map((item) => {
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
          data={dataGlycemia}
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
