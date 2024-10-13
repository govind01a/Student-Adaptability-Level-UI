import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 0,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        width: "100%", // Add this to ensure full width
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid container spacing={0} sx={{ paddingLeft: "0px" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary" align="left">
              © {new Date().getFullYear()} My Website. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
