import { Stack,Slider, Typography } from "@mui/material";
import { FC } from "react";

const Skills : FC = () => {
    const skills = [
        {name:"React", icon:"fab fa-react",level: 90},
        {name:"JavaScript", icon:"fab fa-js-square",level: 90},
        {name:"TypeScript", icon:"fab fa-css3-alt",level: 80},
        {name:"PostgreSQL", icon:"fas fa-database",level: 80},
        {name:"Python", icon:"fab fa-python",level: 90},
        {name:"Flask", icon:"fas fa-flask",level: 90},
        {name:"Docker", icon:"fab fa-docker",level: 80},
        {name:"Kubernetes", icon:"fab fa-kubernetes",level: 60},
        {name:"AWS", icon:"fab fa-aws",level: 50},
        {name:"Machine Learning", icon:"fab fa-aws",level: 60},
        {name:"Java", icon:"fab fa-aws",level: 70},
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