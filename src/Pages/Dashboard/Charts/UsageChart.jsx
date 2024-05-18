"use client";

// import { Fragment, Menu, Transition, ChevronDownIcon } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  // XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const UsageChart = [
  {
    name: "Jan",
    Usages: 3700,
    New: 2400,
  },
  {
    name: "Feb",
    Usages: 3000,
    New: 2210,
  },
  {
    name: "Mar",
    Usages: 3900,
    New: 2290,
  },
  {
    name: "Apr",
    Usages: 2780,
    New: 2000,
  },
  {
    name: "Mar",
    Usages: 3000,
    New: 1990,
  },
  {
    name: "May",
    Usages: 2590,
    New: 2181,
  },
  {
    name: "Jun",
    Usages: 5190,
    New: 2500,
  },
];

const UsageChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={UsageChart}
        margin={{ right: 0 }}
      >
        <defs>
          <linearGradient id="Usages" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#FFC400" stopOpacity={1} />
            <stop offset="80%" stopColor="#FFC400" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#FFC400" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="usersNew" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#000011" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C0C011" stopOpacity={0} />
          </linearGradient> */}
        </defs>

        {/* <YAxis /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <CartesianGrid strokeDasharray="" /> */}

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="Usages"
          stroke="#FFC400"
          // fill="#3b82f6"
          fill="url(#Usages)"
          // stackId="1"
        />

        {/* <Area
          type="monotone"
          dataKey="New"
          stroke="#7c3aed"
          // fill="#8b5cf6"
          fill="url(#usersNew)"
          // stackId="1"
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-yellow-400">
          Usages:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        {/* <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p> */}
      </div>
    );
  }
};

export default UsageChartComponent;
