import { Card, CardContent, CardHeader, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import  { FC } from "react";

interface ExperienceProps{
    businessName:string;
    role:string;
    startDate:string;
    endDate:string;
    description:string;
    skills:string[];
}

const ExperienceCard : FC<ExperienceProps>= ({businessName,description,role,endDate,startDate,skills}) => {
    return <Stack 
                sx={{
                    '&:hover': {
                        color: "#ffee10",
                        boxShadow: "5px -5px 5px #122c91",
                        textShadow: "0 0 5px blue",
                    },
                }}
            >
            <Paper 
                sx={{display:'flex',
                    flexDirection:'row',
                    backgroundColor:'#0F1C2E',
                    fontFamily: "Raleway",
                    marginBottom:2}}
            >
                <Typography
                    margin={2}
                    fontFamily="Raleway"
                    color={'white'}
                    variant="h6"
                >
                    {startDate} - {endDate}
                </Typography>
                <Card sx={{width:300,justifyContent:'flex-start',backgroundColor:'#1F3A5F',color:'white'}}>
                    <CardHeader 
                        justifyContent={'flex-start'}
                        sx={{justifyContent:'flex-start'}}
                        title={
                            <Typography  
                                fontFamily="Raleway"
                                variant="h5" 
                                align="left">{businessName}
                            </Typography>
                        }
                        subheader={
                            <Typography 
                                fontFamily="Raleway" 
                                align="left">{role}
                            </Typography>}
                    />
                    <Divider/>

                    <CardContent>
                        <Typography 
                            align="left"
                            variant="body1"
                            fontFamily="Raleway"
                        >
                            {description}
                        </Typography>
                        <Divider sx={{m:1}} />
                        <Typography variant="body1">
                            {skills.map((skill:string,idx) => {
                                return (
                                    <Chip 
                                        key={idx}
                                        sx={{margin:0.2,color:'white',fontFamily:"Raleway"}}
                                        label={skill}
                                    />
                                )
                            })}
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
    </Stack>
}

export default ExperienceCard;