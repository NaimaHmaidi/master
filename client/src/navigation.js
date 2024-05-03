import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer cela si vous utilisez React Router pour la navigation

function Navigate() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="notifications" style={{marginLeft:'1170px'}}>
                        <NotificationsIcon />
                    </IconButton>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit" style={{marginLeft:'15px'}}>Profile </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/logout">Logout</Link></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navigate;
