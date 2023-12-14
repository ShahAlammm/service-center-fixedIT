// BarChart.js
import Chart from "react-apexcharts";

const BarChart = ({ data }) => {
  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: data.map((entry) => entry.date),
    },
  };

  const series = [
    {
      name: "Bookings",
      data: data.map((entry) => entry.bookingCount),
    },
  ];

  return <Chart options={options} series={series} type="bar" width="500" />;
};

export default BarChart;
