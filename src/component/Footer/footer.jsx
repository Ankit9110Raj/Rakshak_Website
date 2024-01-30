
import * as React from "react";
import {Container, Typography, Link, Grid, styled} from "@mui/material";
import { Facebook, Instagram, YouTube,LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

const Dabba =styled(Box)`
  background-color: lightblue;
  padding-top:6px;
`
const CenteredGrid = styled(Grid)`
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const CenteredTypography = styled(Typography)`
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const CenteredLink = styled(Link)`
@media (max-width: 600px){
  text-align: center;
}
`;
const CenteredBox = styled(Box)`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

function Footer() {
  return <>
    <Dabba >
      <Container maxWidth="lg">
        <CenteredGrid container spacing={5}>
          <CenteredGrid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="black">
            IITB Rakshak Team Lab, Basement, Aero Annex Building, Academic Area, IIT Bombay, Powai, Mumbai, 400076
            </Typography>
          </CenteredGrid>


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
            <CenteredTypography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </CenteredTypography>

            <CenteredBox style={{display:'flex',margin:'auto'}}>
            <CenteredLink href="https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL" color="inherit"  >
            <Facebook />
            
            </CenteredLink>
            <CenteredTypography style={{marginLeft:'8px'}}>Facebook</CenteredTypography>
            </CenteredBox>
           

            <CenteredBox style={{display:'flex'}}>
            <Link
              href="https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA=="
              color="inherit">
            <Instagram />
            </Link>
            <Typography style={{marginLeft:'8px'}}>Instagram</Typography>
            </CenteredBox>
            
            <CenteredBox style={{display:'flex'}}>
            <Link href="https://www.youtube.com/@teamrakshakiitb2540" color="inherit">
              <YouTube />
            </Link>
            <Typography style={{marginLeft:'8px'}}>Youtube</Typography>
            </CenteredBox>
            

            <CenteredBox style={{display:'flex'}}>
            <Link href="https://www.linkedin.com/company/rakshak-iit-bombay/" color="inherit">
              <LinkedIn />
            </Link>
            <Typography style={{marginLeft:'8px'}}>LinkedIn</Typography>
            
            </CenteredBox>
          </Grid>
        </CenteredGrid>
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