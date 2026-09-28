import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Angular", value: 40 },
  { name: "React", value: 30 },
  { name: "Java", value: 20 },
  { name: "Spring Boot", value: 10 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function MyPieChart() {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <h2>Technology Usage</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          {/* <Legend /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyPieChart;