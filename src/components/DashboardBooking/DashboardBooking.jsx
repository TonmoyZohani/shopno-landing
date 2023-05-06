import React from "react";
import { Box, Typography } from "@mui/material";

const DashboardBooking = () => {
  return (
    <Box
      sx={{
        width: "980px",
        height: "200px",
        backgroundColor: "#fff",
        marginLeft: "30px",
        marginTop: "20px",
        borderRadius: "10px",
        display: "flex",
        position: "relative",
      }}
    >
      <Box sx={{ width: "300px", height: "200px", backgroundColor: "#fff",borderRadius:"10px" }}>
        <Typography variant="h5" sx={{ mt: 4, ml: 4, color: "#222222" }}>
          Air Ticket
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, ml: 4, color: "#222222" }}>
          Booking Stats Today
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box
          sx={{
            width: "134px",
            height: "122px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#003E6B",
              borderRadius: "100%",
              position: "absolute",
              top: "-14px",
              left: "-1px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#9C9797", textAlign: "right", paddingRight: "8px",paddingTop:"6px" }}
          >
            Today
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: "#405687", fontSize: "13px", fontWeight: 500,paddingLeft:"10px" }}
          >
            Booking Reissue Request
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "35px", textAlign: "right",paddingRight:"10px" }}
          >
            100
          </Typography>
        </Box>

        <Box
          sx={{
            width: "134px",
            height: "122px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#003E6B",
              borderRadius: "100%",
              position: "absolute",
              top: "-14px",
              left: "-1px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#9C9797", textAlign: "right", paddingRight: "8px",paddingTop:"6px" }}
          >
            Today
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: "#405687", fontSize: "13px", fontWeight: 500,paddingLeft:"10px" }}
          >
            Booking Reissue Request
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "35px", textAlign: "right",paddingRight:"10px" }}
          >
            100
          </Typography>
        </Box>
        <Box
          sx={{
            width: "134px",
            height: "122px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#003E6B",
              borderRadius: "100%",
              position: "absolute",
              top: "-14px",
              left: "-1px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#9C9797", textAlign: "right", paddingRight: "8px",paddingTop:"6px" }}
          >
            Today
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: "#405687", fontSize: "13px", fontWeight: 500,paddingLeft:"10px" }}
          >
            Booking Reissue Request
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "35px", textAlign: "right",paddingRight:"10px" }}
          >
            100
          </Typography>
        </Box>
        <Box
          sx={{
            width: "134px",
            height: "122px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#003E6B",
              borderRadius: "100%",
              position: "absolute",
              top: "-14px",
              left: "-1px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#9C9797", textAlign: "right", paddingRight: "8px",paddingTop:"6px" }}
          >
            Today
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: "#405687", fontSize: "13px", fontWeight: 500,paddingLeft:"10px" }}
          >
            Booking Reissue Request
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "35px", textAlign: "right",paddingRight:"10px" }}
          >
            100
          </Typography>
        </Box>
        <Box
          sx={{
            width: "98px",
            height: "122px",
            backgroundColor: "red",
            borderRadius: "12px",
            position: "absolute",
            right: "-20px",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "14px", mt: 3, ml: 3 }}>
            Full <br /> Stats
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardBooking;
