import { Divider, Stack, Typography, Box, Grid } from "@mui/material";
import { getCertificates, getFileName, getTags } from "./utils";
import FadeInSection from "../common/FadeInSection";

const Certifications = () => {
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
            {/* Animated Background Element */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(166, 74, 255, 0.08) 0%, transparent 70%)',
                    top: '20%',
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
                    maxWidth: '1400px',
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
                                background: 'linear-gradient(135deg, #ffffff 0%, #a64aff 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Certifications
                        </Typography>
                        <Divider sx={{ background: 'linear-gradient(90deg, #a64aff 0%, transparent 100%)', height: 3, border: 'none' }} />
                    </Box>
                </FadeInSection>

                {getTags().map((tag, idx) => (
                    <FadeInSection key={idx} delay={idx * 100}>
                        <Box sx={{ marginBottom: 6 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    color: "white",
                                    fontFamily: "Raleway",
                                    marginBottom: 3,
                                }}
                            >
                                {tag}
                            </Typography>
                            <Grid container spacing={3}>
                                {getCertificates(tag).map((files_, certIdx) => (
                                    <Grid item xs={12} sm={6} md={4} key={certIdx}>
                                        <Box
                                            sx={{
                                                backgroundColor: '#1F3A5F',
                                                borderRadius: 3,
                                                padding: 2,
                                                border: '2px solid rgba(166, 74, 255, 0.2)',
                                                transition: 'all 0.3s ease',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    borderColor: '#a64aff',
                                                    boxShadow: '0 10px 30px rgba(166, 74, 255, 0.3)',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    aspectRatio: '1/1',
                                                    overflow: 'hidden',
                                                    borderRadius: 2,
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <img
                                                    src={files_.path}
                                                    alt={getFileName(files_.path)}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    fontFamily: "Raleway",
                                                    fontSize: '0.9rem',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {getFileName(files_.path)}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </FadeInSection>
                ))}
            </Stack>
        </Box>
    );

};

export default Certifications;

