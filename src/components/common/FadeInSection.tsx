import { Box } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
}

const FadeInSection: FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            });
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return (
        <Box
            ref={domRef}
            sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
        >
            {children}
        </Box>
    );
};

export default FadeInSection;
