import React from "react";
import { AppBar, Avatar, Box, Button } from "@mui/material";

const Header = () => {
    const paths = [
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Contact",path:"/contact"},
        {name:"Experience",path:"/experience"},
        {name:"Projects",path:"/projects"},
        {name:"Certificates",path:"/certificates"},
    ]

    return (
        <AppBar sx={{
            display:"flex",
            height:70,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            background:"#212129",
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
                
            <Box sx={{
                width:"100%",
                marginLeft:'auto',
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-end",
                alignItems:"center",
            }}
            >
                {paths.map((path) => {
                    return (
                        <Button key={path.name} href={path.path} sx={{mx:1}}>{path.name}</Button>
                    )
                })}
            </Box>
        </AppBar>
    )
};

export default Header;
