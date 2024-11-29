// components/RevenueChart.js
import { Bar } from "react-chartjs-2";

const RevenueChart = ({dates, revenue}) => {
    

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Sản phẩm",
        data: revenue,
        backgroundColor: "#0096fe",
        maxBarThickness: 15,
        borderRadius: 4,
      },
      // {
      //   label: "Chuyên gia",
      //   data: [20, 40, 60, 80, 40, 30, 50],
      //   backgroundColor: "#00e097",
      //   maxBarThickness: 15,
      //   borderRadius: 4,
      // },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Tổng doanh thu",
            color: "#333", // Title color
            align: "start",
            font: {
              size: 20,
              weight: "bold",
              family: "Arial",
            },
          },
          legend: {
            position: "bottom",
            labels: {
              color: "#444", // Legend text color
              font: {
                size: 12,
              },
              boxWidth: 20,
              usePointStyle: true,
            },
          },
        },
      }}
    />
  );
};

export default RevenueChart;
