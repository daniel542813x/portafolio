import { Box } from "@mui/material";
import { FC, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    useEffect(() => {
        if (transitionStage === "fadeOut") {
            const timeout = setTimeout(() => {
                setTransitionStage("fadeIn");
                setDisplayLocation(location);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [transitionStage, location]);

    return (
        <Box
            sx={{
                opacity: transitionStage === "fadeIn" ? 1 : 0,
                transition: 'opacity 0.15s ease-in-out',
            }}
        >
            {children}
        </Box>
    );
};

export default PageTransition;
