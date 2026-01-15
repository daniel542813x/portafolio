import { Box, Chip } from "@mui/material";
import { FC } from "react";

const Skills : FC = () => {
    const skills = [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Flask",
        "Docker",
        "Kubernetes",
        "AWS",
        "Machine Learning",
        "LangChain/RAG",
        "PostgreSQL/MySQL",
        "Prometheus/Grafana",
        "n8n/Zapier",
        "Selenium",
        "Linux",
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                justifyContent: 'center',
            }}
        >
            {skills.map((skill) => (
                <Chip
                    key={skill}
                    label={skill}
                    sx={{
                        backgroundColor: '#0F1C2E',
                        color: 'white',
                        fontFamily: 'Raleway',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        padding: '8px 4px',
                        border: '2px solid rgba(76, 175, 80, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#4CAF50',
                            borderColor: '#4CAF50',
                            transform: 'translateY(-3px) scale(1.05)',
                            boxShadow: '0 5px 15px rgba(76, 175, 80, 0.4)',
                        }
                    }}
                />
            ))}
        </Box>
    );
};

export default Skills;