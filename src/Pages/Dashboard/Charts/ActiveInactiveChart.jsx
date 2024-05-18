"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

export const Status = [
  { name: "Active", value: 31000 },
  { name: "Inactive", value: 10500 },
  // { name: "Group C", value: 300 },
  // { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        // fill={fill}
        // fill="#E3B51A"
        fill="#B18900"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        // fill={fill}
        // fill="B18900"
        fill="E3B51A"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex - 15},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex -10} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * -2}
        y={ey}
        textAnchor={textAnchor}
        fill="#000"
        // >{`PV ${value}`}</text>
      >{` ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * -20}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#E3B51A"
      >
        {`(Rate ${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
        //  width={400} height={400}
        >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={Status}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={63}
            // fill="#8884d8"
            // fill="#B18900"
            fill="#E3B51A"
            dataKey="value"
            startAngle={-180}
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
