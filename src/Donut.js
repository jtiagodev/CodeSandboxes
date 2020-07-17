import { Doughnut } from "react-chartjs-2";
import React from "react";
import { extendDefaultDoughnut } from "./utils";

extendDefaultDoughnut();

const Donut = props => {
  const { data, options, doughnutWidth = 300, doughtnutHeight = 300 } = props;
  
  return <Doughnut 
  data={data} 
  width={doughnutWidth}
  height={doughnutHeight}
  options={options} />;
};

export default Donut;
