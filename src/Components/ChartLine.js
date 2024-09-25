import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../Hooks/useFetch';

function ChartLine({ timePeriod }) {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/weight?time_period=${timePeriod}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataWeight = data.map((item) => {
    if (item.month) {
      const data = {
        name: new Date(item.month).toLocaleDateString('en-US', {month: 'long'}),
        Weight: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.day_of_month) {
      const data = {
        name: new Date(item.day_of_month).toLocaleDateString('en-US', {day: 'numeric'}),
        Weight: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.day_of_week) {
      const data = {
        name: new Date(item.day_of_week).toLocaleDateString('en-US', {weekday: 'short'}),
        Weight: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.quarterly_month) {
      const data = {
        name: new Date(item.quarterly_month).toLocaleDateString('en-US', {month: 'long'}),
        Weight: Math.round(item.avg_metric),
      }
      return data;
    }
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
          <YAxis type="number" domain={['dataMin - 3', 'dataMax + 3']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dot={false} dataKey="Weight" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartLine;
