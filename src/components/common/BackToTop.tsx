import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FC, useEffect, useState } from "react";

const BackToTop: FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Zoom in={showButton}>
            <Fab
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: { xs: 16, sm: 32 },
                    right: { xs: 16, sm: 32 },
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    zIndex: 1000,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#45a049',
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    }
                }}
                aria-label="scroll back to top"
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default BackToTop;
