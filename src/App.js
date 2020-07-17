import React from "react";
import "./styles.css";

import DonutStatus from "./DonutStatus";
import { parseDonutData, donutOptions } from "./parser";
import mockData from "./mockData";

export default function App() {
  return (
    <DonutStatus
      rawData={mockData}
      data={parseDonutData(mockData)}
      options={donutOptions}
    />
  );
}
