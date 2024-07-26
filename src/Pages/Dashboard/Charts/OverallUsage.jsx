"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // Defs,
  // LinearGradient,
  // Stop,
} from "recharts";

const OverallUsageChartComponent = ({
  ActiveUsers,
  Inactive,
  handleToggleProduct1,
  handleToggleProduct2,
}) => {
  // const productSales = [

  //   {
  //     month: "Jan",
  //     Active: 4000,
  //     Inactive: 2400,
  //   },
  //   {
  //     month: "Feb",
  //     Active: 7000,
  //     Inactive: 2210,
  //   },
  //   {
  //     month: "Mar",
  //     Active: 4000,
  //     Inactive: 6290,
  //   },
  //   {
  //     month: "Apr",
  //     Active: 4780,
  //     Inactive: 2000,
  //   },
  //   {
  //     month: "May",
  //     Active: 1890,
  //     Inactive: 3181,
  //   },
  //   {
  //     month: "Jun",
  //     Active: 6390,
  //     Inactive: 2500,
  //   },
  //   {
  //     month: "Jul",
  //     Active: 5390,
  //     Inactive: 1500,
  //   },
  //   {
  //     month: "Aug",
  //     Active: 5090,
  //     Inactive: 4610,
  //   },
  //   {
  //     month: "Sep",
  //     Active: 4390,
  //     Inactive: 2002,
  //   },
  //   {
  //     month: "Oct",
  //     Active: 6390,
  //     Inactive: 500,
  //   },
  //   {
  //     month: "Nov",
  //     Active: 4890,
  //     Inactive: 3800,
  //   },
  //   {
  //     month: "Dec",
  //     Active: 5890,
  //     Inactive: 6500,
  //   },
  // ];

  // State to store fetched data
  const [productSales, setProductSales] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://66a3830a44aa637045817a39.mockapi.io/mockapi/APItest"
        );
        const data = await response.json();

        // Log the data to check its structure
        console.log("Fetched data:", data);

        // Check if the data needs to be transformed
        const transformedData = data.map((item) => ({
          Month: item.Month, // or adjust according to the actual structure
          Active: item.Active,
          Inactive: item.Inactive,
        }));

        setProductSales(transformedData); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        // width={500}
        // height={400}
        data={productSales}
        margin={{ right: 0 }}
      >
        <defs>
          <linearGradient id="colorProduct1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFC400" stopOpacity={1} />
            <stop offset="55%" stopColor="#FFC400" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#FFC400" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorProduct2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C0C011" stopOpacity={1} />
            <stop offset="55%" stopColor="#C0C011" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#C0C011" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <YAxis
          tick={() => null} // Hide ticks
          axisLine={false} // Hide y-axis line
        /> */}
        <XAxis
          dataKey="Month"
          tick={{ fill: "#ffffff" }}
          interval="preserveStartEnd" // Keep the first and last labels, hide others as needed
          angle={-45} // Rotate the labels by 45 degrees
          textAnchor="end" // Anchor the rotated labels at the end
          height={40} // Set the height to accommodate the rotated labels
          style={{
            fontSize: "12px", // Adjust the font size as needed
            fontWeight: "bold", // Adjust the font weight as needed
            whiteSpace: "nowrap", // Prevent wrapping of long labels
          }}
        />
        {/* <CartesianGrid strokeDasharray="5 1" /> */}
        <CartesianGrid stroke="#8E8E8E" strokeDasharray="5 0" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        {ActiveUsers && (
          <Area
            type="monotone"
            dataKey="Active"
            fill="url(#colorProduct1)"
            stroke="#FFC400"
            // fill="#FFC400"
            // stackId="1"
          />
        )}

        {Inactive && (
          <Area
            type="monotone"
            dataKey="Inactive"
            stroke="#C0C011"
            fill="url(#colorProduct2)"
            // fill="#C0C011"
            // stackId="1"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  // if (active && payload && payload.length) {
  //   return (
  //     <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
  //       <p className="text-medium text-lg">{label}</p>
  //       <p className="text-sm text-blue-400">
  //         Product 1:
  //         <span className="ml-2">${payload[0].value}</span>
  //       </p>
  //       <p className="text-sm text-indigo-400">
  //         Product 2:
  //         <span className="ml-2">${payload[1].value}</span>
  //       </p>
  //     </div>
  //   );
  // }

  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        {payload.map((item, index) => {
          // <p key={index} className={`text-lime-600 text-sm text-${item.color}`}>
          //   {item.name}:{" "}
          //   <span className="ml-2 text-pink-600">${item.value}</span>
          // </p>

          const textColorClass =
            item.dataKey === "Active" ? "text-yellow-400" : "text-yellow-200"; // Set text color based on dataKey
          return (
            <p key={index} className={`text-sm ${textColorClass}`}>
              {item.name}: <span className="ml-2">${item.value}</span>
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};

export default OverallUsageChartComponent;
