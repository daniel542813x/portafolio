import { Typography,Link, Stack, Button } from "@mui/material";
import LinkendIcon from '../../assets/Linkend.png';
import GmailIcon from '../../assets/email.png';
import WhatsAppIcon from '../../assets/whatsapp.png';
import contactImage from '../../assets/contact.png';
import { FC } from "react";
import { IsMobile } from "../../utils/helpers";

const Contact : FC= () => {
    const whatsappLink = "https://api.whatsapp.com/send/?phone=%2B573146075667&text&type=phone_number&app_absent=0"
    const linkedinLink = "https://www.linkedin.com/in/daniel-estevan-madro%C3%B1ero-moreno-50020a1a8/"
    const isMobile = IsMobile();
    return (
        <div>
            <Typography marginTop={3}  
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    color: "white",
                    marginTop: 1,
                    marginBottom: 1,
                    opacity: 0.8,

                }} >Contact Information</Typography>
            <Stack flexDirection={'row'}
                sx={{
                    marginLeft: '15%',
                    justifyContent: "flex-start",
                }}
            >
                {!isMobile && <img 
                    src={contactImage} 
                    alt="contact" 
                    style={{width:'30%'}}
                />}
                <Stack justifyContent={'flex-start'} flexDirection={'column'} marginTop={5} >
                    <Button
                        sx={{ width: 110 }}
                        autoCapitalize="false"
                        startIcon={<img style={{width:30}} src={LinkendIcon} alt="linkedin" />}
                    >
                        <Link href={linkedinLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </Link>
                    </Button>
                    <Button
                        sx={{ width: 120 }}
                        autoCapitalize="false"
                        startIcon={<img style={{width:30}} src={WhatsAppIcon} alt="linkedin" />}
                    >
                        <Link href={whatsappLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </Link>
                    </Button>
                <Typography 
                    alignContent={'normal'} 
                    sx={{display:'flex', alignItems:'center', marginTop:0.5}} 
                    color={'white'}
                >
                    <img
                        style={{ width: 30, marginRight:9 }}
                        src={GmailIcon}
                        alt="Email Icon"
                    />
                    danielestevan542813152090@gmail.com
                </Typography>
                </Stack>

            </Stack>
            
        </div>
    );
};

export default Contact;
