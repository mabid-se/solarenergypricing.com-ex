import React, { useState } from 'react';

import { Box, AppBar, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Tabs, Tab, Grid } from '@mui/material';

import { styled, alpha } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import "../assets/CSS/MainNavbar.css";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2), height: '100%',
    pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
}));

const MainNavbar = (props) => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const styles = {
        logoBtn: {
            color: "white",
            textDecoration: "none",
        },
    }

    return (
        <React.Fragment>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap component="div"
                            sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }} >
                            <a href='/' style={styles.logoBtn} >
                                Solar Energy Pricing
                            </a>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            {/* Mobile Menu Button */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit" >
                                <MenuIcon />
                            </IconButton>

                            {/* Menu Items */}
                            <Menu
                                id="menu-appbar" keepMounted anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' }, }} >

                                <MenuItem key="incentives" onClick={handleCloseNavMenu} textAlign="center">
                                    <Link to={"/incentives"}>
                                        <Typography>incentives</Typography>
                                    </Link>
                                </MenuItem>

                                <MenuItem key="about-us" onClick={handleCloseNavMenu} textAlign="center">
                                    <Link to={"/about_us/mission"}>
                                        <Typography>about us</Typography>
                                    </Link>
                                </MenuItem>

                                <MenuItem key="resources" onClick={handleCloseNavMenu} textAlign="center">
                                    <Link to={"/resources/calculator"}>
                                        <Typography>resources</Typography>
                                    </Link>
                                </MenuItem>

                                <MenuItem key="blog" onClick={handleCloseNavMenu} textAlign="center">
                                    <Link to={"/blog"}>
                                        <Typography>blog</Typography>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Typography variant="h6" noWrap component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                                <Button key="incentive" onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, display: 'block' }} >
                                    <Link to={"/incentives"} className="appbarItem">
                                        incentive
                                    </Link>
                                </Button>

                                <Button key="about-us" onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, display: 'block' }} >
                                    <Link to={"/about_us/mission"} className="appbarItem">
                                        about us
                                    </Link>
                                </Button>

                                <Button key="resources" onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, display: 'block' }} >
                                    <Link to={"/resources/calculator"} className="appbarItem">
                                        resources
                                    </Link>
                                </Button>

                                <Button key="blog" onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, display: 'block' }} >
                                    <Link to={"/blog"} className="appbarItem">
                                        blog
                                    </Link>
                                </Button>

                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                </Search>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>

                <Grid>
                    {props.children}
                </Grid>
            </AppBar>
        </React.Fragment>
    );
};

export default MainNavbar; // 727
