import ExperienceCard  from "./ExperienceCard";
import { Divider, Stack, Typography, Box } from "@mui/material";
import FadeInSection from "../common/FadeInSection";

const Experience = () => {
    const experiences = [
        {
            businessName:"AQUINAS NETWORK",
            role:"Mid-Senior Developer",
            startDate:"Apr 2024",
            endDate:"Jan 2026",
            skills:["FastAPI","Tortoise ORM","MySQL","Docker","Linux","LangChain","AI Agents","RAG","n8n","Zapier","Selenium","Meta API","Speech-to-text"],
            description:"Designed and deployed backend systems for form management and student enrollment platforms. \
                Implemented automated marketing metrics extraction and AI agents with RAG solutions using LangChain. \
                Built speech-to-text algorithms with speaker diarization. Administered Ubuntu servers with security hardening \
                and deployed containerized Moodle/WordPress platforms.",
            projects: [
                {
                    title: "Student Enrollment Platform",
                    description: "Complete backend system for form management and student enrollment using FastAPI and Tortoise ORM with RESTful APIs and MySQL database."
                },
                {
                    title: "AI Agents for Business Automation",
                    description: "Autonomous AI agents deployed across Facebook Chats and Microsoft Teams using LangChain, n8n and Zapier for customer inquiries and workflow automation."
                },
                {
                    title: "Marketing Automation & Meta Conversions API",
                    description: "Automated system for extracting marketing metrics with webhook-based lead ingestion supporting Meta Conversions API."
                },
                {
                    title: "Speech-to-Text with Speaker Diarization",
                    description: "Automated transcription system with speaker identification to streamline compliance processes."
                },
                {
                    title: "Automated Browser Workflows",
                    description: "Selenium-based automation for report download, processing, and data extraction across multiple websites."
                }
            ]
        },
        {
            businessName:"MOTIVY-MADROV",
            role:"FullStack Developer",
            startDate:"2022",
            endDate:"2024",
            skills:["React","TypeScript","Python","Flask","AWS","Cognito","EKS","Prometheus","Grafana","OpenAI","Amazon Bedrock","SAML 2.0","VPN"],
            description:"Refactored React class components to functional components with TypeScript. \
                Built end-to-end features using React, MUI, React Router, and React Query. \
                Implemented SSO authentication (SAML 2.0) with AWS Cognito and site-to-site VPN. \
                Integrated generative AI solutions using OpenAI APIs and Amazon Bedrock, including private-data chatbots. \
                Implemented monitoring with Prometheus and Grafana for Amazon EKS.",
            projects: [
                {
                    title: "RAG Chatbot with Private Data",
                    description: "Production-ready chatbots using LangChain and vector databases with OpenAI APIs and Amazon Bedrock for private company data interactions."
                },
                {
                    title: "SSO Authentication System (SAML 2.0)",
                    description: "Enterprise-grade Single Sign-On authentication integrated with AWS Cognito and site-to-site VPN between AWS and FortiGate."
                },
                {
                    title: "Monitoring & Observability for EKS",
                    description: "Comprehensive monitoring solution using Prometheus and Grafana for Amazon EKS clusters with custom dashboards and alerting rules."
                }
            ]
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
                position: 'relative',
                overflow: 'hidden',
                paddingBottom: 8,
            }}
        >
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(166, 74, 255, 0.08) 0%, transparent 70%)',
                    bottom: '-200px',
                    left: '-150px',
                    animation: 'pulse 12s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.4 },
                        '50%': { transform: 'scale(1.3)', opacity: 0.2 },
                    }
                }}
            />

            <Stack
                sx={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: { xs: 3, md: 6 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Header */}
                <FadeInSection delay={0}>
                    <Box sx={{ marginBottom: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: 'Raleway',
                                marginBottom: 2,
                                background: 'linear-gradient(135deg, #ffffff 0%, #a64aff 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Professional Experience
                        </Typography>
                        <Divider sx={{ background: 'linear-gradient(90deg, #a64aff 0%, transparent 100%)', height: 3, border: 'none' }} />
                    </Box>
                </FadeInSection>

                <Stack flexDirection="column" alignItems="center">
                    {experiences.map((experience, index) => (
                        <FadeInSection key={index} delay={index * 200}>
                            <ExperienceCard
                                businessName={experience.businessName}
                                description={experience.description}
                                endDate={experience.endDate}
                                role={experience.role}
                                skills={experience.skills}
                                startDate={experience.startDate}
                                projects={experience.projects}
                            />
                        </FadeInSection>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}

export default Experience;