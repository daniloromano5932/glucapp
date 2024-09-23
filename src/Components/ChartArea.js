import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useFetch from '../Hooks/useFetch';


function ChartArea({ timePeriod }) {

  const baseURL = process.env.REACT_APP_BASE_URL;

  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/glycemia?time_period=${timePeriod}`);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataGlycemia = data.map((item) => {
    if (item.month) {
      const data = {
        name: new Date(item.month).toLocaleDateString('en-US', {month: 'long'}),
        Glycemia: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.day_of_month) {
      const data = {
        name: new Date(item.day_of_month).toLocaleDateString('en-US', {day: 'numeric'}),
        Glycemia: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.day_of_week) {
      const data = {
        name: new Date(item.day_of_week).toLocaleDateString('en-US', {weekday: 'short'}),
        Glycemia: Math.round(item.avg_metric),
      }
      return data;
    }
  })

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={dataGlycemia}
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={['dataMin - 3', 'dataMax + 3']} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Glycemia" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartArea;
