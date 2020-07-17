import React from "react";
import StatusEntry from "./StatusEntry";
import { Grid } from "@material-ui/core";

const Status = props => {
  const { data } = props;
  return (
    <Grid container spacing={3}>
      {data.map(dataEntry => {
        return <StatusEntry data={dataEntry} />;
      })}
    </Grid>
  );
};

export default Status;
