import React from "react";
import Donut from "./Donut";
import Status from "./Status";
import { Flex } from "./Grid";

const DonutStatus = props => {
  const { data, options, rawData } = props;
  return (
    <Flex flexDirection="column">
      <Flex>
        <Donut data={data} options={options} />
      </Flex>
      <Flex style={{ marginTop: "10px" }}>
        <Status data={rawData} />
      </Flex>
    </Flex>
  );
};

export default DonutStatus;
