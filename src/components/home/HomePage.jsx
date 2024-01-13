import { Paper, Typography,Box, Stack, Avatar, Divider } from "@mui/material";
import React from "react";
import picture from "../../assets/foto.jpg";
import Skills from "./Skills";

const HomePage = () => {
    return (
        <Stack
            sx={{
                marginTop: 10,
                marginLeft: '15%',
                justifyContent: "flex-start",
            }} 
            >
                <Stack flexDirection={'row'}>
                    <Avatar 
                        src={picture} 
                        sx={{
                            width: 150,
                            height: 150,
                            marginRight: 5,
                            border: "5px solid green",
                        }}
                    />
                    <Stack sx={{justifyContent:"flex-start"}}>
                        <Typography 
                            alignSelf={'flex-start'}
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "green",
                                fontFamily: "Raleway",
                                opacity: 0.8,
                            }}
                        >
                            Hi, my name is 
                        </Typography>
                        <Typography 
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                color: "white",
                                fontFamily: "Raleway",
                                marginTop: 1,
                                marginBottom: 1,
                                opacity: 0.8,
                                alignSelf:'flex-start'

                            }} 
                        >
                            Daniel E. Madroñero.
                        </Typography>
                        <Typography 
                            variant="h3" 
                            sx={{
                                alignSelf:'flex-start',
                                fontWeight: "bold",
                                color: "white",
                                fontFamily: "Raleway",

                                opacity: 0.5,
                            }} 
                        >
                            I'm a full-stack web developer.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        marginTop: 5,
                        width: "100%",
                        flexDirection: "row",
                    }}
                >
                    <Stack width={'60%'}>
                        <Typography 
                            variant="subtitle1"
                            textAlign={'left'}
                            sx={{
                                fontWeight: "bold",
                                color: "white",
                                fontFamily: "Raleway",
                                opacity: 0.8,
                            }}
                        >
                            I'm Enginner System focused on web devepement,
                            I have experience in web applications with React + Typescript in the frontend 
                            and Python/Flask in the backend. I have also worked with databases such as 
                            PostgreSQL and MySQL and I have experience with Kubernets/Docker and AWS (Cognito, S3, EKS).
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            textAlign={'left'}
                            sx={{
                                fontWeight: "bold",
                                color: "white",
                                marginTop: 2,
                                fontFamily: "Raleway",
                                opacity: 0.8,
                            }}
                        >
                            Additionally I have experience with Machine Learning and Deep Learning, from 
                            multuples courses and projects I have done in the past. In my work I have been
                            working on  integrations with OpenIA services as GPT, also building a chatbots
                            usign genereative models from Aws BedRock for interactions with users and Private Data.

                        </Typography>
                        <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                    </Stack>
                    <Skills/>
            </Stack>
        </Stack>

    );
}

export default HomePage;