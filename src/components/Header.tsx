import { AppBar, Avatar, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
//        { name: "Projects", path: "/projects" },

const Header = () => {
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
            sx={{
                display: "flex",
                height: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#212129",
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
                    {paths.map((path) => (
                        <Button key={path.name} href={path.path} sx={{ mx: 1 }}>
                            {path.name}
                        </Button>
                    ))}
                </Box>
            </Box>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    {paths.map((path) => (
                        <ListItem key={path.name} button component="a" href={path.path} onClick={toggleDrawer}>
                            <ListItemText primary={path.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Header;
