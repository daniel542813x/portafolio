import { Typography, Stack, Avatar, Divider, Button } from "@mui/material";
import picture from "../../assets/foto.jpg";
import Skills from "./Skills";
import { FC } from "react";
import LinkendIcon from '../../assets/Linkend.png';
import GitHubIcon from '../../assets/github.png';
import { IsMobile } from "../../utils/helpers";
const githubLink = "https://github.com/daniel542813x"
const linkedinLink = "https://www.linkedin.com/in/dmadronero"

const HomePage : FC = () => {
    const isMobile = IsMobile();
    return (
        <Stack
            sx={{
                marginTop: 10,
                marginLeft: isMobile ? 0 : '15%',
                justifyContent: "flex-start",
            }} 
            >
                <Stack flexDirection={isMobile ? 'column' : 'row'}>
                    <Avatar
                        src={picture}
                        sx={{
                            width: 150,
                            height: 150,
                            marginRight: 5,
                            border: "5px solid green",
                            alignSelf: isMobile ? 'center' : 'flex-start',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)',
                            }
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
                            I'm a FullStack Developer & AI Engineer.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        marginTop: 5,
                        width: "100%",
                        flexDirection: isMobile ? 'column' : 'row',
                    }}
                >
                    <Stack width={isMobile ? '100%' : '60%'}>
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
                            I'm a Systems Engineer with 4 years of professional experience in full-stack development
                            and AI engineering. I specialize in building modern web applications with React + TypeScript
                            in the frontend and Python (FastAPI/Flask) in the backend. I have extensive experience with
                            cloud infrastructure (AWS, Kubernetes, Docker) and databases (PostgreSQL, MySQL).
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
                            I specialize in AI/ML integrations, building production-ready chatbots with RAG architectures
                            using LangChain, OpenAI APIs, and Amazon Bedrock. I've implemented SSO authentication (SAML 2.0),
                            monitoring systems (Prometheus/Grafana), automation workflows (n8n, Zapier, Selenium), and
                            speech-to-text solutions with speaker diarization. I'm experienced in DevOps practices,
                            including CI/CD, containerization, and cloud infrastructure management.
                        </Typography>
                        <Divider sx={{marginTop: 2, marginBottom: 1}}/>
                        <Stack justifyContent={isMobile ? 'center' : 'flex-start'} flexDirection={'row'} gap={1}>
                            <Button
                                sx={{
                                    width: 50,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px) scale(1.1)',
                                    }
                                }}
                                autoCapitalize="false"
                                startIcon={<img style={{width:30}} src={LinkendIcon} alt="linkedin" />}
                                href={linkedinLink}
                                target="_blank"
                            />
                            <Button
                                sx={{
                                    width: 50,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px) scale(1.1)',
                                    }
                                }}
                                autoCapitalize="false"
                                startIcon={<img style={{width:30}} src={GitHubIcon} alt="github" />}
                                href={githubLink}
                                target="_blank"
                            />
                        </Stack>
                    </Stack>
                    <Skills/>
            </Stack>
        </Stack>

    );
}

export default HomePage;