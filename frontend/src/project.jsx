import React from 'react';
import {
  Container,
  Card,
  Typography,
  Box,
  Stack,
  Chip,
  Grid,
  Button,
  Link,
} from '@mui/material';
import {
  Code as CodeIcon,
  Web as WebIcon,
  Movie as MovieIcon,
  ShoppingBag as ShoppingIcon,
  Description as FormIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';

export default function Project() {
  const projects = [
    {
      title: "Movie API Project",
      icon: <MovieIcon color="primary" />,
      description: "A comprehensive movie API that allows authorized users to perform CRUD operations with authentication and pagination features.",
      technologies: [
        { label: "TypeScript", color: "primary" },
        { label: "Encore.dev", color: "secondary" },
        { label: "REST API", color: "success" },
        { label: "Authentication", color: "warning" },
        { label: "Pagination", color: "info" }
      ],
      features: [
        "Create movies in database",
        "Get movie by ID",
        "Remove movies from database",
        "List movies with pagination",
        "Update movie information",
        "User authentication with tokens",
        "View user email and ID",
        "App status and timestamp"
      ],
      images: [
        {
          src: "/endpoints.png",
          alt: "Movie API Endpoints",
          description: "API endpoints overview",
          height: 400
        },
        {
          src: "/uae.png",
          alt: "List endpoint with filters", 
          description: "Using list endpoint with filters",
          height: 600 // ¡Más grande como la otra!

        }
      ]
    },
    {
      title: "The Vibe Lab Project",
      icon: <ShoppingIcon color="secondary" />,
      description: "A clothing shop website created as a first-semester assignment featuring modern design and user interface.",
      technologies: [
        { label: "HTML", color: "warning" },
        { label: "CSS", color: "info" }
      ],
      link: "http://studentweb.cencol.ca/sgomezpe/Project/project.html",
      iframe: {
        src: "http://studentweb.cencol.ca/sgomezpe/Project/project.html",
        title: "The Vibe Lab Website"
      }
    },
    {
      title: "Forms Website",
      icon: <FormIcon color="success" />,
      description: "A form-based website assignment from first semester demonstrating form design and user interaction.",
      technologies: [
        { label: "HTML", color: "warning" },
        { label: "CSS", color: "info" }
      ],
      link: "http://studentweb.cencol.ca/sgomezpe/Assignment3/assignment3.html",
      iframe: {
        src: "http://studentweb.cencol.ca/sgomezpe/Assignment3/assignment3.html",
        title: "Forms Website"
      }
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="primary">
          My Projects
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Showcasing my development work and technical skills
        </Typography>
      </Box>

      <Stack spacing={4}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ p: 3 }}>
            {/* Project Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {project.icon}
              <Typography variant="h4" component="h2" fontWeight={600}>
                {project.title}
              </Typography>
            </Box>

            {/* Technologies */}
            <Box sx={{ mb: 2 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {project.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech.label}
                    color={tech.color}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>
            </Box>

            {/* Description */}
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {project.description}
            </Typography>

            {/* Features for Movie API */}
            {project.features && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Key Features:
                </Typography>
                <Grid container spacing={1}>
                  {project.features.map((feature, featureIndex) => (
                    <Grid item xs={12} sm={6} key={featureIndex}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CodeIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Images for Movie API */}
            {project.images && (
              <Box sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                  {project.images.map((image, imageIndex) => (
                    <Grid item xs={12} md={6} key={imageIndex}>
                      <Card variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
                          {image.description}
                        </Typography>
                        <Box
                          component="img"
                          src={image.src}
                          alt={image.alt}
                          sx={{
                            width: '100%',
                            height: image.height || 250, // Usa la altura específica o 250 por defecto
                            objectFit: 'contain',
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'divider'
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Iframe and Link for Web Projects */}
            {project.iframe && (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <WebIcon color="action" />
                  <Typography variant="h6" fontWeight={600}>
                    Live Preview
                  </Typography>
                </Box>
                
                {/* External Link */}
                <Button
                  component={Link}
                  href={project.link}
                  target="_blank"
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                  sx={{ mb: 2 }}
                >
                  Open in New Tab
                </Button>

                {/* Iframe */}
                <iframe
                  src={project.iframe.src}
                  width="100%"
                  height="400"
                  title={project.iframe.title}
                  style={{
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            )}
          </Card>
        ))}
      </Stack>
    </Container>
  );
}