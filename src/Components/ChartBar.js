import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../Hooks/useFetch';

function ChartBar({timePeriod}) {

  const baseURL = process.env.REACT_APP_BASE_URL;

  const { data, loading, error } = useFetch(`${baseURL}measurements/unitary/heart_rate?time_period=${timePeriod}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dataHeart = data.map((item) => {
    if (item.month) {
      const data = {
        name: new Date(item.month).toLocaleDateString('en-US', {month: 'long'}),
        Heart: Math.round(item.avg_metric),
      }
      return data;
    } else if (item.day_of_month) {
      const data = {
        name: new Date(item.day_of_month).toLocaleDateString('en-US', {day: 'numeric'}),
        Heart: Math.round(item.avg_metric),
      }
      return data;
    }
    else if (item.day_of_week) {
      const data = {
        name: new Date(item.day_of_week).toLocaleDateString('en-US', {weekday: 'short'}),
        Heart: Math.round(item.avg_metric),
      }
      return data;
    } else {
      const data = {
        name: new Date(item.quarterly_month).toLocaleDateString('en-US', {month: 'long'}),
        Heart: Math.round(item.avg_metric),
      }
      return data;
    }
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
          <YAxis type="number" domain={['dataMin - 3', 'dataMax + 3']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Heart" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartBar;
