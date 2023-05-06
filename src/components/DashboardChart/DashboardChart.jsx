import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const DashboardChart = () => {
  const data = [
    { name: "May 2022", pv: 2400, uv: 1000 },
    { name: "Jun 2022", pv: 1398, uv: 2000 },
    { name: "Jul 2022", pv: 9800, uv: 500 },
    { name: "Aug 2022", pv: 3908, uv: 600 },
    { name: "Oct 2022", pv: 4800, uv: 900 },
    { name: "Nov 2022", pv: 3800, uv: 300 },
  ];

  return (
    <div
      style={{
        width: "1000px",
        height: "349px",
        backgroundColor: "#fff",
        marginLeft: "30px",
        borderRadius: "10px",
        paddingLeft: "40px",
        paddingRight:"40px",
        paddingTop:"20px"
      }}
    >
      <div className="flex justify-between pb-4">
        
        <div>
          <p style={{fontSize:"18px"}}>Air Ticket Search vs Booking vs Ticketed</p>
        </div>
        <div>
          <button style={{width:"125px",height:"22px",backgroundColor:"#D1E9FF",borderRadius:"3px",marginRight:"10px",color:"#2156A6"}}>B2B Portal</button>
          <button style={{width:"205px",height:"22px",backgroundColor:"#DC143C",borderRadius:"3px",marginRight:"10px",color:"#fff"}}>26 MAY - 28 MAY 2022</button>
          <button style={{width:"125px",height:"22px",backgroundColor:"#D1E9FF",borderRadius:"3px",color:"#2156A6"}}>Air Ticket</button>
        </div>
      </div>

      <BarChart
        width={920}
        height={250}
        style={{ marginRight: "50px" }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#FFA84D" />
        <Bar dataKey="uv" fill="#2156A6" />
        <Bar dataKey="uv" fill="#DC143C" />
      </BarChart>
    </div>
  );
};

export default DashboardChart;
