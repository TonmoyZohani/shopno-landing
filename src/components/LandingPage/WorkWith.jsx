import React from "react";
import { Box } from "@mui/material";
import back from "../../assets/img/rectangle.png";
import wplane from "../../assets/img/wplane.png";
import watab from "../../assets/img/watab.png";
import wtaab from "../../assets/img/wtaab.png";
import wsabre from "../../assets/img/wsabre.png";
import wiata from "../../assets/img/wiata.png";
import wus from "../../assets/img/wus.png";
import wno from "../../assets/img/wno.png";
import wgal from "../../assets/img/wgal.png";
import quote from "../../assets/img/quote.png";
import { Typography } from "@mui/material";

const WorkWith = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "800px",
      }}
    >
      {/* first row div */}
      <Box
        style={{
          paddingTop: "60px",
          paddingLeft: "150px",
          width: "100%",
          height: "40%",
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Comfortaa",
              fontWeight: "700",

              color: "#000",
            }}
          >
            Who we work with
          </Typography>
        </Box>
        <Box sx={{ width: "50%",display:"flex" }}>
          <img src={quote} alt="" style={{width:"100px",height:"120px",paddingRight:"10px"}} />
          <Box>
            <Typography
              sx={{
                width: "689px",
                height: "96px",
                color: "#003E6B",
                fontFamily: "poppins",
                fontWeight: "400",
                fontSize: "15px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo
              elementum vestibulum. Semper gravida amet eleifend proin maecenas
              faucibus. Urna pellentesque tempor at adipiscing pellentesque
              imperdiet. Eget ridiculus quis scelerisque eu.Lorem ipsum dolor
              sit amet consectetur. Volutpat turpis commodo elementum
              vestibulum.
            </Typography>
            <br></br>

            <Typography
              sx={{
                width: "689px",
                height: "96px",
                color: "#003E6B",
                fontFamily: "poppins",
                fontWeight: "400",
                fontSize: "15px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo
              elementum vestibulum. Semper gravida amet eleifend proin maecenas
              faucibus. Urna pellentesque
            </Typography>

            <Typography
              sx={{
                color: "#003E6B",
                fontFamily: "poppins",
                fontWeight: "500",
              }}
            >
              Mr. Syed Afridi
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "poppins",
                fontWeight: "500",
                fontSize: "15px",
                fontStyle: "italic",
              }}
            >
              CEO XYZ Company
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>

      {/* second row div */}
      <Box
        sx={{
          width: "84%",
          height: "60%",
          //   backgroundColor: "yellow",
          display: "flex",
        }}
      >
        <Box sx={{ width: "12%", height: "100%" }}></Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wplane}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              marginBottom: "40px",
              transition: "border-color 0.3s ease-in-out",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
          <img
            src={watab}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wsabre}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "100px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wiata}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "200px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wus}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "100px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wtaab}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "200px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wno}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "100px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
        <Box sx={{ width: "12%", height: "100%" }}>
          <img
            src={wgal}
            style={{
              border: "4px solid #fff",
              borderRadius: "100%",
              backgroundColor: "#fff",
              transition: "border-color 0.3s ease-in-out",
              marginTop: "200px",
            }}
            alt=""
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "green";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#fff";
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WorkWith;

// import React from "react";

// const WorkWith = () => {
//   return (<Box sx={{ width: "100%", height: "200x" }}>

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum dolorem velit, necessitatibus quaerat harum fugit repellendus quod quos asperiores repudiandae autem voluptatibus, laudantium mollitia aperiam nesciunt eum, incidunt iure nulla commodi fuga. Et eligendi dicta commodi odit officia numquam hic rem nostrum accusamus, laborum officiis, maiores inventore. Repudiandae numquam tenetur adipisci eligendi nostrum, in officia commodi debitis perspiciatis rerum? Modi et distinctio nesciunt provident libero nihil ad? Doloribus numquam hic cumque aut eaque dolor inventore nisi in rerum modi soluta asperiores eligendi, quam explicabo vero eos. Magnam porro laborum inventore quibusdam odio sit perferendis iusto eum, id nihil autem?
//   </Box>);
// };

// export default WorkWith;
