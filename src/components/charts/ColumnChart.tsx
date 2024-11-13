import "./ColumnChart.scss";
// Charts
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
// Animation
import { motion } from "framer-motion";

interface ColumnChartProps {
  data: { choice: string; count: number; }[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({data}) => {
  return (
    <motion.div
      id="columnChart"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="choice" />
          <YAxis dataKey="count" allowDecimals={false}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ColumnChart;