import ExperienceCard  from "./ExperienceCard";
import { Divider, Stack, Typography } from "@mui/material";
import FadeInSection from "../common/FadeInSection";
const Experience = () => {
    const experiences = [
        {
            businessName:"AQUINAS NETWORK",
            role:"Mid-Senior Developer",
            startDate:"2024",
            endDate:"2025",
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
    ]

    return <Stack flexDirection={'column'}>
            <Typography marginTop={3}  
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    marginTop: 1,
                    color: "white",
                    marginBottom: 1,
                    opacity: 0.8,

                }}>
                    Somes Experiences
            </Typography>
            <Divider sx={{m:1,background:'#a64aff'}} />
        <Stack flexDirection={'column'} alignItems={'center'} margin={3}>
        {
            experiences.map((experience, index) => {
                return <FadeInSection key={index} delay={index * 200}>
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
            })
        }
        </Stack>
    </Stack>;
}

export default Experience;