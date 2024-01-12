import ExperienceCard  from "./ExperienceCard";
import { Divider, Stack, Typography } from "@mui/material";
const Experience = () => {
    const experiences = [
        {
            businessName:"Motivy",
            role:"FullStack Developer",
            startDate:"2022",
            endDate:"Present",
            skills:["React","Python","Flask","Aws","TypeScript","JavaScript","Machine Learning"],
            description:"My first job as developer,\
                where I am working in multiples tecnologies. Somes labors,\
                how refactor the react class components to functional components + Typescript,\
                develop a new features in the frontend and backend, build artificial intelligence integratios, \
                and SSO login systems with AWS Cognito."
        },
    ]

    return <Stack flexDirection={'column'}>
            <Typography marginTop={3}  
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    marginTop: 1,
                    marginBottom: 1,
                    opacity: 0.8,

                }}>
                    Somes Experiences
            </Typography>
            <Divider sx={{m:1,background:'#a64aff'}} />
        <Stack flexDirection={'row'} justifyContent={'center'} margin={3}>
        {
            experiences.map((experience) => {
                return <ExperienceCard 
                    businessName={experience.businessName}
                    description={experience.description}
                    endDate={experience.endDate}
                    role={experience.role}
                    skills={experience.skills}
                    startDate={experience.startDate}
                />
            })
        }
        </Stack>
    </Stack>;
}

export default Experience;