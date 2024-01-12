
import * as React from "react";
import {Container, Typography, Link, Grid, styled} from "@mui/material";
import { Facebook, Instagram, YouTube,LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

const Dabba =styled(Box)`
  background-color: lightblue;
  padding-top:6px;
`

function Footer() {
  return <>
    <Dabba >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="black">
            IITB Rakshak Team Lab, Basement, Aero Annex Building, Academic Area, IIT Bombay, Powai, Mumbai, 400076
            </Typography>
          </Grid>


          <Grid item xs={12} sm={4} style={{ paddingLeft: '40px' }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Link to="./home">
            <Typography variant="body2" color="text.secondary">
             HOME
            </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              PLANES
            </Typography>
            <Typography variant="body2" color="text.secondary">
              COMPETITION
            </Typography>
            <Typography variant="body2" color="text.secondary">
              TEAMS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SUBSYSTEM
            </Typography>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Typography style={{display:'flex'}}>
            <Link href="https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL" color="inherit"  >
            <Facebook />
            
            </Link>
            <Typography style={{marginLeft:'8px'}}>Rakshak, IIT BOMBAY</Typography>
            </Typography>
           

            <Typography style={{display:'flex'}}>
            <Link
              href="https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA=="
              color="inherit">
            <Instagram />
            </Link>
            <Typography style={{marginLeft:'8px'}}>rakshak.iitb</Typography>
            </Typography>
            
            <Typography style={{display:'flex'}}>
            <Link href="https://www.youtube.com/@teamrakshakiitb2540" color="inherit">
              <YouTube />
            </Link>
            <Typography style={{marginLeft:'8px'}}>Team Rakshak IITB</Typography>
            </Typography>
            

            <Typography style={{display:'flex'}}>
            <Link href="https://www.linkedin.com/company/rakshak-iit-bombay/" color="inherit">
              <LinkedIn />
            </Link>
            <Typography style={{marginLeft:'8px'}}>Rakshak IIT BOMBAY</Typography>
            
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
             IIT BOMBAY 2023
           
            {"."}
          </Typography>
        </Box>
      </Container>
    </Dabba>
  </>;
}
export default Footer;