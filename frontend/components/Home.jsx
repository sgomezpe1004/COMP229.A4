import React from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import {
  Email as EmailIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  DesignServices as DesignIcon,
  Cloud as CloudIcon,
  DataObject as DataObjectIcon,
  Terminal as TerminalIcon,
  Web as WebIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

export default function Home() {
  const skills = [
    { 
      icon: <CodeIcon />, 
      label: 'React', 
      color: 'primary',
      description: 'Building dynamic and responsive user interfaces with modern hooks and state management'
    },
    { 
      icon: <StorageIcon />, 
      label: 'Node.js', 
      color: 'success',
      description: 'Developing robust backend APIs and server-side applications with Express.js'
    },
    { 
      icon: <DesignIcon />, 
      label: 'TypeScript', 
      color: 'info',
      description: 'Writing type-safe code for better maintainability and fewer runtime errors'
    },
    { 
      icon: <StorageIcon />, 
      label: 'MongoDB', 
      color: 'secondary',
      description: 'Designing and managing NoSQL databases with Mongoose ODM for scalable applications'
    },
    { 
      icon: <CloudIcon />, 
      label: 'Encore.dev', 
      color: 'warning',
      description: 'Building distributed systems and backend applications with built-in infrastructure'
    },
    { 
      icon: <DataObjectIcon />, 
      label: 'REST APIs', 
      color: 'error',
      description: 'Creating RESTful web services and integrating third-party APIs'
    },
    { 
      icon: <TerminalIcon />, 
      label: 'Python', 
      color: 'info',
      description: 'Scripting, automation, and backend development for various applications'
    },
    { 
      icon: <CodeIcon />, 
      label: 'C#', 
      color: 'primary',
      description: 'Object-oriented programming and application development with .NET framework'
    },
    { 
      icon: <WebIcon />, 
      label: 'HTML/CSS', 
      color: 'warning',
      description: 'Building responsive, accessible, and modern web interfaces and layouts'
    },
    { 
      icon: <StorageIcon />, 
      label: 'SQL', 
      color: 'secondary',
      description: 'Database design, complex queries, and data management for relational databases'
    },
    { 
      icon: <TerminalIcon />, 
      label: 'JavaScript', 
      color: 'warning',
      description: 'Client-side scripting, interactive features, and modern ES6+ features'
    },
  ];

  return (
    <Box sx={{ pt: 0, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Card
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          p: 2,
          borderRadius: 0,
          boxShadow: 'none',
          mb: 1
        }}
      >
        <Stack spacing={1} alignItems="center" sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              src="/profile.png"
              alt="Simón Gómez"
              sx={{
                width: 50,
                height: 50,
                border: '2px solid white',
              }}
            />
            <Box>
              <Typography variant="h6" component="h1" fontWeight={700}>
                Hi, I'm Simon!
              </Typography>
              <Typography variant="caption">
                Software Engineer | Full-Stack Developer
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={0.5}>
            <Button
              component="a"
              href="mailto:sgomezpe1004@gmail.com"
              variant="outlined"
              color="inherit"
              startIcon={<EmailIcon />}
              size="small"
              sx={{
                borderRadius: 1,
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                fontSize: '0.7rem',
                px: 1,
                py: 0.3,
              }}
            >
              Contact Me
            </Button>
            <Button
              component="a"
              href="https://github.com/sgomezpe1004/COMP229-Assignment2"
              target="_blank"
              variant="contained"
              color="inherit"
              startIcon={<GitHubIcon />}
              size="small"
              sx={{
                borderRadius: 1,
                fontWeight: 600,
                color: '#667eea',
                fontSize: '0.7rem',
                px: 1,
                py: 0.3,
              }}
            >
              View This Project
            </Button>
          </Stack>
        </Stack>
      </Card>

      <Container maxWidth="lg" sx={{ py: 1 }}>
        <Grid container spacing={1}>
          {/* About Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, height: 'fit-content' }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" paragraph>
                I am a 19-year-old Colombian studying software engineering at Centennial College. 
                I work with Python, C#, HTML, CSS, SQL, JavaScript, React, and I'm learning TypeScript with the Encore.dev framework. 
                I've built projects like a movie app with authentication and pagination, which helped me gain hands-on experience in 
                frontend-backend development. Curious, driven, and always learning, I enjoy tackling challenges, 
                improving my skills, and creating projects that make an impact in the world of technology.
              </Typography>
              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                <Chip label="Full-Stack" size="small" color="primary" variant="outlined" />
                <Chip label="Problem Solver" size="small" color="success" variant="outlined" />
                <Chip label="Backend Focus" size="small" color="warning" variant="outlined" />
              </Stack>
            </Card>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Technologies & Experience
              </Typography>
              <Grid container spacing={1}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 1,
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Box 
                        sx={{ 
                          color: `${skill.color}.main`, 
                          fontSize: '1.2rem',
                          mt: 0.2
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight={600}>
                          {skill.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {skill.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}