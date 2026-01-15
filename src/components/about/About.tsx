import { Box, Stack, Typography, Grid, Divider } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import FadeInSection from "../common/FadeInSection";

const About = () => {
    const timeline = [
        {
            year: "Age 10",
            title: "Early Leadership",
            description: "Started developing leadership skills as class leader and later became student president in high school.",
            icon: <GroupsIcon sx={{ fontSize: 40 }} />
        },
        {
            year: "Age 14",
            title: "Programming Journey Begins",
            description: "Discovered programming and cybersecurity, experimenting with BackTrack and Kali Linux tools.",
            icon: <CodeIcon sx={{ fontSize: 40 }} />
        },
        {
            year: "University",
            title: "Systems Engineering",
            description: "Graduated from University of Nariño in Colombia with diplomas in New and Emerging Technologies, and Entrepreneurship and Leadership.",
            icon: <SchoolIcon sx={{ fontSize: 40 }} />
        },
        {
            year: "2022-Present",
            title: "Professional Career",
            description: "4 years of experience specializing in full-stack development, AI/ML engineering, and Cloud Computing.",
            icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />
        },
    ];

    const traits = [
        {
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            title: "Security Enthusiast",
            description: "Started with ethical hacking and cybersecurity exploration using tools like Kali Linux."
        },
        {
            icon: <BuildIcon sx={{ fontSize: 40 }} />,
            title: "Problem Solver",
            description: "Natural curiosity for understanding how things work, constantly tinkering and fixing challenges."
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 40 }} />,
            title: "Natural Leader",
            description: "Recognized leader from school through university, with strong teamwork and communication skills."
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
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)',
                    top: '10%',
                    right: '-100px',
                    animation: 'pulse 10s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.4 },
                        '50%': { transform: 'scale(1.2)', opacity: 0.2 },
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
                            About Me
                        </Typography>
                        <Divider sx={{ background: 'linear-gradient(90deg, #4CAF50 0%, transparent 100%)', height: 3, border: 'none' }} />
                    </Box>
                </FadeInSection>

                {/* Introduction */}
                <FadeInSection delay={100}>
                    <Box
                        sx={{
                            backgroundColor: '#1F3A5F',
                            borderRadius: 4,
                            padding: 4,
                            marginBottom: 6,
                            border: '2px solid rgba(76, 175, 80, 0.2)',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'white',
                                fontFamily: 'Raleway',
                                lineHeight: 1.8,
                                marginBottom: 2,
                            }}
                        >
                            I am a <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>Systems Engineer</span> with 4 years of professional experience and a passion for creating and building things.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                fontFamily: 'Raleway',
                                lineHeight: 1.8,
                            }}
                        >
                            Graduate of the University of Nariño in Colombia with diplomas in New and Emerging Technologies,
                            and Entrepreneurship and Leadership. I specialize in full-stack development, AI/ML engineering, and Cloud Computing.
                        </Typography>
                    </Box>
                </FadeInSection>

                {/* Personal Traits */}
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
                        What Defines Me
                    </Typography>
                    <Grid container spacing={3} sx={{ marginBottom: 6 }}>
                        {traits.map((trait, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: '#1F3A5F',
                                        borderRadius: 3,
                                        padding: 3,
                                        height: '100%',
                                        border: '2px solid transparent',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            borderColor: '#4CAF50',
                                            boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                            width: 70,
                                            height: 70,
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#4CAF50',
                                            marginBottom: 2,
                                        }}
                                    >
                                        {trait.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                            marginBottom: 1,
                                        }}
                                    >
                                        {trait.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontFamily: 'Raleway',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {trait.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </FadeInSection>

                {/* Timeline */}
                <FadeInSection delay={300}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontFamily: 'Raleway',
                            marginBottom: 4,
                        }}
                    >
                        My Journey
                    </Typography>
                    <Stack spacing={3}>
                        {timeline.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    gap: 3,
                                    position: 'relative',
                                    '&::before': index < timeline.length - 1 ? {
                                        content: '""',
                                        position: 'absolute',
                                        left: '35px',
                                        top: '80px',
                                        width: '2px',
                                        height: 'calc(100% + 24px)',
                                        background: 'linear-gradient(180deg, #4CAF50 0%, rgba(76, 175, 80, 0.3) 100%)',
                                    } : {}
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                        minWidth: 70,
                                        height: 70,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#4CAF50',
                                        border: '3px solid #4CAF50',
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: '#1F3A5F',
                                        borderRadius: 3,
                                        padding: 3,
                                        flex: 1,
                                        border: '2px solid rgba(76, 175, 80, 0.2)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: '#4CAF50',
                                            transform: 'translateX(8px)',
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#4CAF50',
                                            fontFamily: 'Raleway',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: 1,
                                        }}
                                    >
                                        {item.year}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                            marginTop: 1,
                                            marginBottom: 1,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            fontFamily: 'Raleway',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </FadeInSection>
            </Stack>
        </Box>
    );
};

export default About;