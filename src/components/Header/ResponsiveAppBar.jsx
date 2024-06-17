import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Logo from "../../assets/images/newLogo-white.png";
import { Link } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../contexts/userContex";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Features",
    href: "/#awesome-features-area",
  },
  {
    name: "About",
    href: "/#app-about-area",
  },
  {
    name: "FAQs",
    href: "/#faq-area",
  },
  {
    name: "Contact",
    href: "/#contact-area",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { userState, dispatch } = useUser();
  console.log(userState);

  const navigate = useNavigate();

  const isLogged = localStorage.getItem("isLogged");
  console.log("🚀 ~ ResponsiveAppBar ~ isLogged:", isLogged);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='header navbar.affix-top '>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Link
            href='#'
            className='logo'
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <img src={Logo} alt='' />
          </Link>

          <Box
            className='menu'
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link href={page.href}>{page.name} </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link
            href='#'
            className='logo'
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img src={Logo} alt='' />
          </Link>

          <Box
            className='menu'
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page.name}
              </Button>
            ))}

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              color='success'
              variant='contained'
              onClick={
                isLogged
                  ? () => {
                      dispatch({ type: "LOGOUT" });
                    }
                  : () => {
                      navigate("/login");
                    }
              }>
              {isLogged ? "logout" : "login"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;
