import { Stack,Slider, Typography } from "@mui/material";
import { FC } from "react";

const Skills : FC = () => {
    const skills = [
        {name:"React", icon:"fab fa-react",level: 95},
        {name:"TypeScript", icon:"fab fa-css3-alt",level: 90},
        {name:"Python", icon:"fab fa-python",level: 95},
        {name:"FastAPI", icon:"fas fa-bolt",level: 90},
        {name:"Flask", icon:"fas fa-flask",level: 90},
        {name:"Docker", icon:"fab fa-docker",level: 90},
        {name:"Kubernetes", icon:"fab fa-kubernetes",level: 85},
        {name:"AWS", icon:"fab fa-aws",level: 85},
        {name:"Machine Learning", icon:"fas fa-brain",level: 80},
        {name:"LangChain/RAG", icon:"fas fa-link",level: 85},
        {name:"PostgreSQL/MySQL", icon:"fas fa-database",level: 85},
        {name:"Prometheus/Grafana", icon:"fas fa-chart-line",level: 75},
        {name:"n8n/Zapier", icon:"fas fa-project-diagram",level: 80},
        {name:"Selenium", icon:"fas fa-robot",level: 80},
        {name:"Linux", icon:"fab fa-linux",level: 85},
    ]
    
    return (
        <Stack flexDirection={'column'} flexGrow={1}>
            {skills.map((skill) => (
                <Stack
                    key={skill.name}
                    sx={{
                        flexDirection: "row",
                        justifyContent: "space-outside",
                        alignItems: "center",
                        ml: 4,
                        marginBottom: 0.5,
                    }}
                >
                    <Typography 
                        color={'green'}
                        marginRight={1}
                    >
                        {skill.name}
                    </Typography>
                    <Slider
                        style={{color:"green",width: 200}}
                        size="small"
                        disabled
                        defaultValue={skill.level}
                        aria-label="Small"
                    />
                </Stack>
            ))}
            
        </Stack>        
    );
};

export default Skills;