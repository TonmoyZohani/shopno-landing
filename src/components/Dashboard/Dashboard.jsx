import React from "react";
// import Header from "../Header/Header";
import DashboardNav from "../DashboardNav/DashboardNav";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardBody from "../DashboardBody/DashboardBody";
import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Container sx={{ margin: 0 }}>
  <div
    className="flex flex-col space-y-20"
    style={{ backgroundColor: "#EBF0F4" }}
  >
    <DashboardNav />
    <DashboardHeader />
    <DashboardBody />
  </div>
</Container>

  );
};

export default Dashboard;
