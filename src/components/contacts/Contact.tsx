import { Box, Stack, Typography, Grid, Divider, Button } from "@mui/material";
import LinkendIcon from '../../assets/Linkend.png';
import GitHubIcon from '../../assets/github.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon2 from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import contactImage from '../../assets/contact.png';
import { FC } from "react";
import FadeInSection from "../common/FadeInSection";

const Contact : FC= () => {
    const linkedinLink = "https://www.linkedin.com/in/dmadronero"
    const githubLink = "https://github.com/daniel542813x"
    const email = "danielestevan542813152090@gmail.com"

    const contactMethods = [
        {
            icon: <EmailIcon sx={{ fontSize: 40 }} />,
            title: "Email",
            value: email,
            link: `mailto:${email}`,
            color: '#EA4335'
        },
        {
            icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
            title: "LinkedIn",
            value: "linkedin.com/in/dmadronero",
            link: linkedinLink,
            color: '#0A66C2'
        },
        {
            icon: <GitHubIcon2 sx={{ fontSize: 40 }} />,
            title: "GitHub",
            value: "github.com/daniel542813x",
            link: githubLink,
            color: '#fff'
        },
    ];

    const details = [
        {
            icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
            label: "Location",
            value: "Colombia"
        },
        {
            icon: <PhoneIcon sx={{ fontSize: 30 }} />,
            label: "Availability",
            value: "Open to Remote Opportunities"
        },
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
                    background: 'radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)',
                    bottom: '-200px',
                    left: '-150px',
                    animation: 'pulse 12s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.4 },
                        '50%': { transform: 'scale(1.3)', opacity: 0.2 },
                    }
                }}
            />

            <Stack
                sx={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: { xs: 3, md: 6 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Header */}
                <FadeInSection delay={0}>
                    <Box sx={{ marginBottom: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: 'Raleway',
                                marginBottom: 2,
                                background: 'linear-gradient(135deg, #ffffff 0%, #4CAF50 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Let's Connect
                        </Typography>
                        <Divider sx={{ background: 'linear-gradient(90deg, #4CAF50 0%, transparent 100%)', height: 3, border: 'none' }} />
                    </Box>
                </FadeInSection>

                <Grid container spacing={4}>
                    {/* Left Side - Contact Image & CTA */}
                    <Grid item xs={12} md={5}>
                        <FadeInSection delay={100}>
                            <Stack spacing={4}>
                                <Box
                                    sx={{
                                        backgroundColor: '#1F3A5F',
                                        borderRadius: 4,
                                        padding: 4,
                                        border: '2px solid rgba(76, 175, 80, 0.2)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={contactImage}
                                        alt="contact"
                                        style={{
                                            width: '100%',
                                            maxWidth: '300px',
                                            marginBottom: '20px'
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                            fontWeight: 'bold',
                                            marginBottom: 2,
                                        }}
                                    >
                                        Ready to Work Together?
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontFamily: 'Raleway',
                                            lineHeight: 1.6,
                                            marginBottom: 3,
                                        }}
                                    >
                                        I'm always interested in hearing about new projects and opportunities.
                                        Feel free to reach out through any of the channels listed.
                                    </Typography>
                                    <Stack direction="row" spacing={2} justifyContent="center">
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
                                                padding: '10px 24px',
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#45a049',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)',
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
                                                padding: '10px 24px',
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: '#4CAF50',
                                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                    transform: 'translateY(-2px)',
                                                }
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    </Stack>
                                </Box>

                                {/* Additional Details */}
                                <Stack spacing={2}>
                                    {details.map((detail, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                backgroundColor: '#1F3A5F',
                                                borderRadius: 3,
                                                padding: 2,
                                                border: '2px solid rgba(76, 175, 80, 0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#4CAF50',
                                                }}
                                            >
                                                {detail.icon}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.6)',
                                                        fontFamily: 'Raleway',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 1,
                                                    }}
                                                >
                                                    {detail.label}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'white',
                                                        fontFamily: 'Raleway',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {detail.value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>
                            </Stack>
                        </FadeInSection>
                    </Grid>

                    {/* Right Side - Contact Methods */}
                    <Grid item xs={12} md={7}>
                        <FadeInSection delay={200}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Raleway',
                                    marginBottom: 4,
                                }}
                            >
                                Get In Touch
                            </Typography>
                            <Stack spacing={3}>
                                {contactMethods.map((method, index) => (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: '#1F3A5F',
                                            borderRadius: 3,
                                            padding: 3,
                                            border: '2px solid rgba(76, 175, 80, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 3,
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateX(8px)',
                                                borderColor: '#4CAF50',
                                                boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
                                                '& .icon-box': {
                                                    transform: 'scale(1.1) rotate(5deg)',
                                                    backgroundColor: method.color,
                                                    color: 'white',
                                                }
                                            }
                                        }}
                                    >
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                                minWidth: 80,
                                                height: 80,
                                                borderRadius: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#4CAF50',
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {method.icon}
                                        </Box>
                                        <Box flex={1}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                    fontFamily: 'Raleway',
                                                    marginBottom: 0.5,
                                                }}
                                            >
                                                {method.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontFamily: 'Raleway',
                                                    wordBreak: 'break-word',
                                                }}
                                            >
                                                {method.value}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </FadeInSection>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
};

export default Contact;
