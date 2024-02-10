import { Divider, Stack, Typography } from "@mui/material";
import { getCertificates, getFileName, getTags } from "./utils";

const Certifications = () => {
    return <>
        <div 
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'}}
        >
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                width:'100%'}}
            >
                {
                    getTags().map((tag,idx) => (
                        <div key={idx}>
                            <Divider sx={{m:4,background:'#a64aff'}} />
                            <Stack  direction={'column'}>
                                <Typography 
                                    minWidth={300}
                                    variant="h3"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "white",
                                        fontFamily: "Raleway",
                                        opacity: 0.8,
                                        marginBottom: 2,
                                    }}
                                >
                                    {tag}
                                </Typography>
                                <Stack flexDirection={'row'} flexWrap={"wrap"} justifyContent={'space-between'}>
                                    {getCertificates(tag).map((files_) => 
                                        <div 
                                            style={{
                                                display:'flex',
                                                flexDirection:'column',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                width:'350px',
                                                height:'350px',
                                                margin:'10px',
                                            }}
                                        >
                                                <img 
                                                    src={files_.path} 
                                                    style={{
                                                        width:350,
                                                        height:350,
                                                        margin:'10px'}}
                                                />
                                            <Typography                                 
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    fontFamily: "Raleway",
                                                    opacity: 0.8,
                                                    marginBottom: 2,
                                                }}
                                            >
                                                {getFileName(files_.path)}
                                            </Typography>
                                        </div>
                                    )
                                }
                                </Stack>
                        </Stack>
                    </div>
                ))}
            </div>
        </div>
    </>

};

export default Certifications;

