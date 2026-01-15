import { Typography, Stack, Avatar, Button, Box, Grid } from "@mui/material";
import picture from "../../assets/foto.jpg";
import Skills from "./Skills";
import { FC } from "react";
import LinkendIcon from '../../assets/Linkend.png';
import GitHubIcon from '../../assets/github.png';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FadeInSection from "../common/FadeInSection";

const githubLink = "https://github.com/daniel542813x"
const linkedinLink = "https://www.linkedin.com/in/dmadronero"

const HomePage : FC = () => {
    const highlights = [
        { icon: <CodeIcon sx={{ fontSize: 40 }} />, title: "Full-Stack Developer", description: "React, TypeScript, Python, FastAPI/Flask" },
        { icon: <SmartToyIcon sx={{ fontSize: 40 }} />, title: "AI Engineer", description: "LangChain, RAG, OpenAI, Amazon Bedrock" },
        { icon: <CloudIcon sx={{ fontSize: 40 }} />, title: "Cloud & DevOps", description: "AWS, Kubernetes, Docker, CI/CD" },
    ];

    const stats = [
        { number: "4+", label: "Years Experience" },
        { number: "2", label: "Companies" },
        { number: "15+", label: "Technologies" },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
                position: 'relative',
                overflow: 'hidden',
                paddingBottom: 8,
            }}
        >
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%)',
                    top: '-250px',
                    right: '-250px',
                    animation: 'pulse 8s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
                        '50%': { transform: 'scale(1.2)', opacity: 0.3 },
                    }
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(166, 74, 255, 0.1) 0%, transparent 70%)',
                    bottom: '-200px',
                    left: '-200px',
                    animation: 'pulse 10s ease-in-out infinite',
                }}
            />

            <Stack
                sx={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: { xs: 3, md: 6 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Hero Section */}
                <FadeInSection delay={0}>
                    <Grid container spacing={4} alignItems="center" sx={{ marginBottom: 8 }}>
                        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -10,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #4CAF50 0%, #a64aff 100%)',
                                        animation: 'rotate 8s linear infinite',
                                        '@keyframes rotate': {
                                            '0%': { transform: 'rotate(0deg)' },
                                            '100%': { transform: 'rotate(360deg)' },
                                        },
                                        filter: 'blur(20px)',
                                        opacity: 0.6,
                                    }
                                }}
                            >
                                <Avatar
                                    src={picture}
                                    sx={{
                                        width: { xs: 200, md: 280 },
                                        height: { xs: 200, md: 280 },
                                        border: "8px solid #1F3A5F",
                                        position: 'relative',
                                        zIndex: 1,
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        }
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Stack spacing={2}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#4CAF50",
                                        fontFamily: "Raleway",
                                        fontWeight: "bold",
                                        letterSpacing: 2,
                                    }}
                                >
                                    👋 HELLO, I'M
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "900",
                                        color: "white",
                                        fontFamily: "Raleway",
                                        background: 'linear-gradient(135deg, #ffffff 0%, #4CAF50 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    }}
                                >
                                    Daniel E. Madroñero
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "rgba(255,255,255,0.7)",
                                        fontFamily: "Raleway",
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                    }}
                                >
                                    FullStack Developer & AI Engineer
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255,255,255,0.8)",
                                        fontFamily: "Raleway",
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                        marginTop: 2,
                                    }}
                                >
                                    Systems Engineer with 4 years of experience crafting scalable web applications
                                    and intelligent AI solutions. Passionate about building production-ready systems
                                    that solve real-world problems.
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                                    <Button
                                        variant="contained"
                                        href={linkedinLink}
                                        target="_blank"
                                        startIcon={<img style={{width:24}} src={LinkendIcon} alt="linkedin" />}
                                        sx={{
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                            fontWeight: 'bold',
                                            padding: '12px 32px',
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: '#45a049',
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 10px 20px rgba(76, 175, 80, 0.3)',
                                            }
                                        }}
                                    >
                                        LinkedIn
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        href={githubLink}
                                        target="_blank"
                                        startIcon={<img style={{width:24}} src={GitHubIcon} alt="github" />}
                                        sx={{
                                            borderColor: '#4CAF50',
                                            color: '#4CAF50',
                                            fontFamily: 'Raleway',
                                            fontWeight: 'bold',
                                            padding: '12px 32px',
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#4CAF50',
                                                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                transform: 'translateY(-3px)',
                                            }
                                        }}
                                    >
                                        GitHub
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </FadeInSection>

                {/* Stats Section */}
                <FadeInSection delay={100}>
                    <Grid container spacing={3} sx={{ marginBottom: 8 }}>
                        {stats.map((stat, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: '#1F3A5F',
                                        borderRadius: 3,
                                        padding: 3,
                                        textAlign: 'center',
                                        border: '2px solid rgba(76, 175, 80, 0.2)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: '#4CAF50',
                                            boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#4CAF50',
                                            fontFamily: 'Raleway',
                                        }}
                                    >
                                        {stat.number}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            fontFamily: 'Raleway',
                                            marginTop: 1,
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </FadeInSection>

                {/* Highlights Section */}
                <FadeInSection delay={200}>
                    <Grid container spacing={4} sx={{ marginBottom: 8 }}>
                        {highlights.map((highlight, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: '#1F3A5F',
                                        borderRadius: 3,
                                        padding: 4,
                                        height: '100%',
                                        border: '2px solid transparent',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            borderColor: '#4CAF50',
                                            boxShadow: '0 15px 40px rgba(76, 175, 80, 0.3)',
                                            '& .icon-box': {
                                                transform: 'scale(1.1) rotate(5deg)',
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        className="icon-box"
                                        sx={{
                                            backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                            width: 80,
                                            height: 80,
                                            borderRadius: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#4CAF50',
                                            marginBottom: 3,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {highlight.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                            marginBottom: 2,
                                        }}
                                    >
                                        {highlight.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontFamily: 'Raleway',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {highlight.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </FadeInSection>

                {/* Skills Section */}
                <FadeInSection delay={300}>
                    <Box
                        sx={{
                            backgroundColor: '#1F3A5F',
                            borderRadius: 4,
                            padding: { xs: 3, md: 5 },
                            border: '2px solid rgba(76, 175, 80, 0.2)',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: 'Raleway',
                                marginBottom: 4,
                                textAlign: 'center',
                            }}
                        >
                            Technical Skills
                        </Typography>
                        <Skills />
                    </Box>
                </FadeInSection>
            </Stack>
        </Box>
    );
}

export default HomePage;
