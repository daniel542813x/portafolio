import { Card, Chip, Divider, Stack, Typography, Collapse, IconButton, Box, Grid } from "@mui/material";
import  { FC, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';

interface Project {
    title: string;
    description: string;
}

interface ExperienceProps{
    businessName:string;
    role:string;
    startDate:string;
    endDate:string;
    description:string;
    skills:string[];
    projects?: Project[];
}

const ExperienceCard : FC<ExperienceProps>= ({businessName,description,role,endDate,startDate,skills,projects}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: '1200px',
                backgroundColor: '#1F3A5F',
                color: 'white',
                marginBottom: 4,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                overflow: 'visible',
                '&:hover': {
                    boxShadow: '0 8px 30px rgba(76, 175, 80, 0.3)',
                    transform: 'translateY(-4px)',
                }
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #2c5282 0%, #1F3A5F 100%)',
                    padding: 3,
                    borderBottom: '3px solid #4CAF50'
                }}
            >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            sx={{
                                backgroundColor: '#4CAF50',
                                borderRadius: '50%',
                                padding: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
                        </Box>
                        <Stack>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    fontFamily: 'Raleway',
                                    color: 'white'
                                }}
                            >
                                {businessName}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Raleway',
                                    color: '#4CAF50',
                                    fontWeight: 500
                                }}
                            >
                                {role}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Chip
                        label={`${startDate} - ${endDate}`}
                        sx={{
                            backgroundColor: '#0F1C2E',
                            color: 'white',
                            fontFamily: 'Raleway',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            padding: '20px 10px'
                        }}
                    />
                </Stack>
            </Box>

            {/* Content Section */}
            <Box sx={{ padding: 3 }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Raleway',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.7,
                        marginBottom: 3
                    }}
                >
                    {description}
                </Typography>

                {/* Skills Section */}
                <Box sx={{ marginBottom: 2 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontFamily: 'Raleway',
                            color: '#4CAF50',
                            fontWeight: 'bold',
                            marginBottom: 1.5
                        }}
                    >
                        TECHNOLOGIES & SKILLS
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skills.map((skill:string,idx) => (
                            <Chip
                                key={idx}
                                label={skill}
                                sx={{
                                    backgroundColor: '#0F1C2E',
                                    color: 'white',
                                    fontFamily: 'Raleway',
                                    border: '1px solid rgba(76, 175, 80, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#4CAF50',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Key Activities Section */}
                {projects && projects.length > 0 && (
                    <Box sx={{ marginTop: 3 }}>
                        <Divider sx={{ marginY: 2, borderColor: 'rgba(76, 175, 80, 0.3)' }} />
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                cursor: 'pointer',
                                padding: 1,
                                borderRadius: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                                }
                            }}
                            onClick={() => setExpanded(!expanded)}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Raleway',
                                    color: '#4CAF50',
                                    fontWeight: 'bold'
                                }}
                            >
                                KEY ACTIVITIES ({projects.length})
                            </Typography>
                            <IconButton
                                size="small"
                                sx={{
                                    color: '#4CAF50',
                                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s',
                                }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Stack>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                                {projects.map((project, idx) => (
                                    <Grid item xs={12} md={6} key={idx}>
                                        <Box
                                            sx={{
                                                backgroundColor: '#0F1C2E',
                                                padding: 2,
                                                borderRadius: 2,
                                                borderLeft: '4px solid #4CAF50',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#1a2942',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: '#4CAF50',
                                                    fontFamily: 'Raleway',
                                                    marginBottom: 1
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255,255,255,0.8)',
                                                    fontFamily: 'Raleway',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Collapse>
                    </Box>
                )}
            </Box>
        </Card>
    );
}

export default ExperienceCard;