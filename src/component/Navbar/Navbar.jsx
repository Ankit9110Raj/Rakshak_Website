
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, styled, Menu, MenuItem, Hidden, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logos from '../../images/logo4.jpeg';

const Image = styled('img')({
  width: 150,
  height: 80,
  padding: 10,
});

const StyledHeader = styled(AppBar)`
  background: white;
  position: static;
`;

const buttonStyles = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'black',
};

const menuItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '200px',
  padding: '10px 0', // Adjust padding to reduce top and bottom gap
};

export default function ButtonAppBar() {
  const my_pages = ['Home', 'Plane', 'Competitions', 'Subsystems', 'Teams', 'Contact Us'];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader position="relative">
        <Toolbar>
          <Box>
            <Image src={logos} alt="" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              marginLeft: 'auto',
              marginRight: '50px',
            }}
          >
            <Hidden mdDown>
              {my_pages.map((page) => {
                if (page === 'Subsystems') {
                  return (
                    <div key={page}>
                      <Button
                        sx={{ my: 3, ...buttonStyles }}
                        aria-controls="subsystems-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        {page}
                        <ArrowDropDownIcon />
                      </Button>
                      <Menu
                        id="subsystems-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/aero" style={{ textDecoration: 'none',...buttonStyles }}>
                          Aerodynamics & Manufacturing
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/software" style={{ textDecoration: 'none', ...buttonStyles }}>
                          Software
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/controls" style={{ textDecoration: 'none',...buttonStyles }}>
                          Controls and Communication
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/marketing" style={{ textDecoration: 'none', ...buttonStyles }}>
                          Marketing
                        </Link>
                      </MenuItem>
                      </Menu>
                    </div>
                  );
                } else {
                  return (
                    <Link
                      to={`/${page.replace(/\s+/g, '').toLowerCase()}`}
                      key={my_pages}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button sx={{ my: 3, display: 'block', ...buttonStyles }}>{page}</Button>
                    </Link>
                  );
                }
              })}
            </Hidden>
          </Box>
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleMenuButtonClick}
              sx={{ fontWeight: 'bold', fontSize: '24px', ...buttonStyles }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </StyledHeader>
      <Drawer anchor="right" open={menuOpen} onClose={handleMenuButtonClick} sx={{ width: '100%', maxWidth: '100%' }}>
        <div style={{ width: '100%' }}>
          {my_pages.map((page) => {
            if (page === 'Subsystems') {
              return (
                <div key={page}>
                  <MenuItem
                    sx={{ my: 3, ...buttonStyles }}
                    aria-controls="subsystems-drawer-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    {page}
                    <ArrowDropDownIcon />
                  </MenuItem>
                  <Menu
                    id="subsystems-drawer-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                   


                   <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/aero" style={{ textDecoration: 'none',...buttonStyles }}>
                          Aerodynamics & Manufacturing
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/software" style={{ textDecoration: 'none', ...buttonStyles }}>
                          Software
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/controls" style={{ textDecoration: 'none',...buttonStyles }}>
                          Controls and Communication
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}
                       style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minWidth: '200px', // Adjust menu item width as needed
                      }}>
                        <Link to="/subsystems/marketing" style={{ textDecoration: 'none', ...buttonStyles }}>
                          Marketing
                        </Link>
                      </MenuItem>
                  </Menu>
                </div>
              );
            } else {
              return (
                <Link
                  to={`/${page.replace(/\s+/g, '').toLowerCase()}`}
                  key={my_pages}
                  style={{ textDecoration: 'none', ...buttonStyles }}
                >
                  <MenuItem onClick={handleMenuButtonClick} style={{ ...buttonStyles, menuItemStyles }}>
                    {page}
                  </MenuItem>
                </Link>
              );
            }
          })}
        </div>
      </Drawer>
    </Box>
  );
}
