import { Stack, Typography } from "@mui/material";
import fullbody from "../../assets/fullbody.jpg"
import { IsMobile } from "../../utils/helpers";
const About = () => {
    const isMobile = IsMobile();
    return (
        <Stack flexDirection={'column'}>
            <Typography 
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: "Raleway",
                    marginTop: isMobile ? '10%' : '1%',
                    marginBottom: 1,
                    opacity: 0.8,

                }} 
            >
                About me 
            </Typography>
            <Stack 
                direction={isMobile ? 'column' : 'row'} 
                marginLeft={isMobile ? 0 : '20%'}
                marginTop={'2%'}
                width={isMobile ? '100%' : '70%'}
            >
                <Stack flexDirection={'column'}>
                    <Typography 
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "Raleway",
                            opacity: 0.8,
                            textAlign: 'start',
                        }}
                        width={'100%'}
                    >
                        I am a System Engineer with a passion for creating and building things.
                        I am a graduate of the University of Nariño at Colombia. 
                        I have experience in full stack development, machine learning and Cloud Computing. {'\n'}
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        sx={{
                            marginTop: 1,
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "Raleway",
                            opacity: 0.8,
                            textAlign: 'start',

                        }}
                        width={'100%'}
                    >
                        I start in the world of programming when I was 14 years old, Fastly I was interested in 
                        hacking and I start to learn about it, I was learning about the different types of hacking
                        and practicing in my own computer and phone, playing with the different tools that I found
                        in the internet how BackTrack after Kali Linux and theirs tools. {'\n'} 
                        
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        sx={{
                            marginTop: 1,
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "Raleway",
                            opacity: 0.8,
                            textAlign: 'start',

                        }}
                        width={'100%'}
                    >
                        Always I was curious about how the things work, for this reason, I break many things in my
                        house equally I was fixing then, for example some days 
                        I add a new chip sim card to my phone this was a challenge for me because I don`t have 
                        the best tools for this, but I did it, and Works perfectly.
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        sx={{
                            marginTop: 1,
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "Raleway",
                            opacity: 0.8,
                            textAlign: 'start',

                        }}
                        width={'100%'}
                    >
                        Also, I have skills in leadership, teamwork, and communication developed through
                        many years even before my university studies because I start my leadership when
                        I was 10 years old in my school and I was the leader of my class for each year and president 
                        of the student on my least year of high school. In my university, I was recognized as a leader
                        until the end.
                        
                    </Typography>
                </Stack>
                
                <img src={fullbody} 
                    alt="full body" 
                    width="300"
                    height="400"
                    style={{borderRadius: '50%', shapeOutside: 'circle(50%)', alignSelf: 'center'}}
                />
            </Stack>
        </Stack>
    );
    };

export default About;