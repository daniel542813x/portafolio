import { Card, CardContent, CardHeader, Chip, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    category: string;
}

const ProjectCard: FC<ProjectProps> = ({ title, description, technologies, category }) => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                },
            }}
        >
            <Card
                sx={{
                    backgroundColor: '#1F3A5F',
                    color: 'white',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 8px 30px rgba(76, 175, 80, 0.3)',
                    }
                }}
            >
                <CardHeader
                    title={
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography fontFamily="Raleway" variant="h5">
                                {title}
                            </Typography>
                            <Chip
                                label={category}
                                size="small"
                                sx={{
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    fontFamily: 'Raleway',
                                }}
                            />
                        </Stack>
                    }
                />
                <Divider />
                <CardContent>
                    <Typography
                        variant="body1"
                        fontFamily="Raleway"
                        sx={{ marginBottom: 2, textAlign: 'left' }}
                    >
                        {description}
                    </Typography>
                    <Divider sx={{ m: 1 }} />
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        {technologies.map((tech: string, idx) => (
                            <Chip
                                key={idx}
                                sx={{
                                    margin: 0.3,
                                    color: 'white',
                                    fontFamily: 'Raleway',
                                    backgroundColor: '#0F1C2E',
                                }}
                                size="small"
                                label={tech}
                            />
                        ))}
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default ProjectCard;
