import { Doughnut } from "react-chartjs-2";
import React from "react";
import { extendDefaultDoughnut } from "./utils";

extendDefaultDoughnut();

const Donut = props => {
  const { data, options } = props;

  return <Doughnut data={data} options={options} />;
};

export default Donut;
