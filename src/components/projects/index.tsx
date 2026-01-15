import { Divider, Stack, Typography, Chip, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { IsMobile } from "../../utils/helpers";
import FadeInSection from "../common/FadeInSection";
import { useState, useMemo } from "react";

const PROJECTS = [
        {
            title: "RAG Chatbot with Private Data",
            description: "Built production-ready chatbots using LangChain and vector databases to enable natural language interactions with private company data. Integrated with OpenAI APIs and Amazon Bedrock for generative responses.",
            technologies: ["LangChain", "OpenAI", "Amazon Bedrock", "RAG", "Vector DB", "Python"],
            category: "AI/ML"
        },
        {
            title: "AI Agents for Business Automation",
            description: "Developed autonomous AI agents deployed across Facebook Chats and Microsoft Teams channels using n8n and Zapier. Agents handle customer inquiries, data extraction, and workflow automation.",
            technologies: ["LangChain", "n8n", "Zapier", "OpenAI", "Facebook API", "MS Teams"],
            category: "AI/ML"
        },
        {
            title: "Speech-to-Text with Speaker Diarization",
            description: "Implemented automated transcription system with speaker identification to streamline compliance processes. Processes multiple audio formats and generates structured transcripts with speaker labels.",
            technologies: ["Python", "Speech-to-Text", "Speaker Diarization", "Audio Processing"],
            category: "AI/ML"
        },
        {
            title: "SSO Authentication System (SAML 2.0)",
            description: "Implemented enterprise-grade Single Sign-On authentication integrated with AWS Cognito. Configured site-to-site VPN between AWS and FortiGate for secure network communication.",
            technologies: ["SAML 2.0", "AWS Cognito", "FortiGate", "VPN", "Security"],
            category: "DevOps/Security"
        },
        {
            title: "Marketing Automation & Meta Conversions API",
            description: "Built automated system for extracting marketing metrics and ingesting leads from social media platforms. Implemented webhook-based lead ingestion supporting Meta Conversions API for accurate attribution tracking.",
            technologies: ["FastAPI", "Facebook API", "Meta Conversions", "Webhooks", "MySQL"],
            category: "Backend"
        },
        {
            title: "Monitoring & Observability for EKS",
            description: "Implemented comprehensive monitoring solution using Prometheus and Grafana for Amazon EKS clusters. Created custom dashboards and alerting rules for proactive system health monitoring.",
            technologies: ["Prometheus", "Grafana", "Amazon EKS", "Kubernetes", "Monitoring"],
            category: "DevOps"
        },
        {
            title: "Automated Browser Workflows",
            description: "Developed Selenium-based automation for report download, processing, and data extraction across multiple websites. Handles authentication, navigation, and data parsing for business intelligence.",
            technologies: ["Selenium", "Python", "Web Scraping", "Automation"],
            category: "Automation"
        },
        {
            title: "Student Enrollment Platform",
            description: "Designed and deployed complete backend system for form management and student enrollment using FastAPI and Tortoise ORM. Includes RESTful APIs, data validation, and MySQL database integration.",
            technologies: ["FastAPI", "Tortoise ORM", "MySQL", "Docker", "RESTful API"],
            category: "Backend"
        },
];

const Projects = () => {
    const isMobile = IsMobile();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = useMemo(() => {
        const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
        return cats.map(cat => ({
            name: cat,
            count: cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length
        }));
    }, []);

    const filteredProjects = useMemo(() => {
        return selectedCategory === "All"
            ? PROJECTS
            : PROJECTS.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <Stack flexDirection={'column'}>
            <Typography
                marginTop={isMobile ? 10 : 3}
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    marginTop: 1,
                    color: "white",
                    marginBottom: 1,
                    opacity: 0.8,
                }}
            >
                Featured Projects
            </Typography>
            <Divider sx={{ m: 1, background: '#a64aff' }} />

            {/* Category Filters */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1.5,
                    marginTop: 3,
                    marginBottom: 2,
                    px: { xs: 2, sm: 3 }
                }}
            >
                {categories.map((cat) => (
                    <Chip
                        key={cat.name}
                        label={`${cat.name} (${cat.count})`}
                        onClick={() => setSelectedCategory(cat.name)}
                        sx={{
                            backgroundColor: selectedCategory === cat.name ? '#4CAF50' : '#1F3A5F',
                            color: 'white',
                            fontFamily: 'Raleway',
                            fontWeight: selectedCategory === cat.name ? 'bold' : 'normal',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            padding: { xs: '4px 8px', sm: '8px 12px' },
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: selectedCategory === cat.name ? '#45a049' : '#2c5282',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                            }
                        }}
                    />
                ))}
            </Box>

            {/* Projects Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gap: 3,
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: { xs: 2, sm: 3 }
                }}
            >
                {filteredProjects.map((project, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            category={project.category}
                        />
                    </FadeInSection>
                ))}
            </Box>
        </Stack>
    );
};

export default Projects;
