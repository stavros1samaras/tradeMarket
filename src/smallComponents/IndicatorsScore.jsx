import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

const IndicatorsScore = () => {
  const data = [
    { name: 'Group A', value: 70 },
    { name: 'Group B', value: 30 }
  ];

  const COLORS = ['#2c6f9aff', '#f75656ff']; // πράσινο και κόκκινο

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IndicatorsScore;
