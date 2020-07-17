import React from "react";
import { Flex } from "./Grid";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const AmountStyled = styled.span`
  font-size: 24px;
  letter-spacing: 0px;
  color: #333333;
`;

const CircleStyled = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
`;

const PercentStyled = styled.span`
  font-size: 24px;
  letter-spacing: 0px;
  color: #8e8e8e;
`;

const StatusStyled = styled.span`
  text-align: left;
  font-size: 24px;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;
const StatusEntry = props => {
  const { data } = props;

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      item
      xs={6}
    >
      <Flex style={{ marginRight: "10px" }}>
        <CircleStyled color={data.color} />
      </Flex>
      <Flex style={{ marginRight: "10px" }}>
        <AmountStyled>{data.amount}</AmountStyled>
      </Flex>
      <Flex style={{ marginRight: "10px" }}>
        <PercentStyled>({data.percent})</PercentStyled>
      </Flex>
      <Flex style={{ marginRight: "10px" }}>
        <StatusStyled>{data.title}</StatusStyled>
      </Flex>
    </Grid>
  );
};

export default StatusEntry;
