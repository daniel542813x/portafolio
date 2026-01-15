import { AppBar, Avatar, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const paths = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Experience", path: "/experience" },
        { name: "Certificates", path: "/certificates" },
    ];

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                display: "flex",
                height: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#212129",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
            }}
        >
            <Avatar
                sx={{
                    width: 50,
                    height: 50,
                    marginLeft: 5,
                }}
                alt="Remy Sharp"
                src="https://avatars1.githubusercontent.com/u/60397100?v=4"
            />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <Button sx={{ display: { md: 'none' } }} onClick={toggleDrawer}>
                    <MenuIcon />
                </Button>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {paths.map((path) => {
                        const isActive = location.pathname === path.path;
                        return (
                            <Button
                                key={path.name}
                                href={path.path}
                                sx={{
                                    mx: 1,
                                    color: isActive ? '#4CAF50' : 'white',
                                    borderBottom: isActive ? '2px solid #4CAF50' : 'none',
                                    borderRadius: 0,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#4CAF50',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                {path.name}
                            </Button>
                        );
                    })}
                </Box>
            </Box>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#1F3A5F',
                        width: 250,
                    }
                }}
            >
                <List>
                    {paths.map((path) => {
                        const isActive = location.pathname === path.path;
                        return (
                            <ListItem
                                key={path.name}
                                button
                                component="a"
                                href={path.path}
                                onClick={toggleDrawer}
                                sx={{
                                    color: 'white',
                                    backgroundColor: isActive ? 'rgba(76, 175, 80, 0.2)' : 'transparent',
                                    borderLeft: isActive ? '4px solid #4CAF50' : 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                    }
                                }}
                            >
                                <ListItemText primary={path.name} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Header;
