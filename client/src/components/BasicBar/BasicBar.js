import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars(props) {
    const {xtext} = props
   return (
    <BarChart
      xAxis={[{ scaleType: "band", data: [xtext] }]}
      series={[
        { data: [8] },
        { data: [12] },
        { data: [6] },
        { data: [10] },
        { data: [11] },
        { data: [8] },
      ]}
      sx={{
        maxWidth:'446px',
        maxHeight:'199px',
        backgroundColor: "#DBE2EF",
        borderRadius:'2px',
        marginBottom:'50px',
        "& rect": {
          fill: "#3F72AF", 
        },
      }}
   
      width={500}
      height={250}
    />
  );
}
