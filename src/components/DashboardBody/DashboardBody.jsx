import React from "react";
import DashboardNoti from "../DashboardNoti/DashboardNoti";
import DashboardChart from "../DashboardChart/DashboardChart";
import DashboardBooking from "../DashboardBooking/DashboardBooking";
import { Container } from "@mui/material";

const DashboardBody = () => {
  return (
   
      <div className="flex">
        <div>
          <DashboardNoti />
        </div>
        <div>
          <DashboardChart />
          <DashboardBooking />
        </div>
      </div>
   
  );
};

export default DashboardBody;
