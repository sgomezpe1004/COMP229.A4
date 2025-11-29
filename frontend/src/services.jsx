import React from 'react';
import {
  Container,
  Card,
  Typography,
  Box,
  Stack,
  Grid,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Web as WebIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and modern websites using HTML, CSS, JavaScript, and React with focus on user experience and performance.",
      image: "/img1.jpg",
      icon: <WebIcon color="primary" sx={{ fontSize: 40 }} />,
      features: ["Responsive Design", "Modern UI/UX", "Cross-browser Compatibility", "Performance Optimization"],
      color: "primary"
    },
    {
      title: "Full-Stack Projects",
      description: "Building complete applications with frontend and backend functionality, including authentication, database management, and API integration.",
      image: "/img2.png", 
      icon: <StorageIcon color="secondary" sx={{ fontSize: 40 }} />,
      features: ["Frontend & Backend", "User Authentication", "Database Design", "RESTful APIs"],
      color: "secondary"
    },
    {
      title: "Encore.dev Projects",
      description: "Developing distributed systems and backend applications using TypeScript with the Encore.dev framework and built-in infrastructure.",
      image: "/img3.png",
      icon: <CloudIcon color="success" sx={{ fontSize: 40 }} />,
      features: ["TypeScript Development", "Distributed Systems", "Built-in Infrastructure", "Scalable Architecture"],
      color: "success"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="primary">
          My Services
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Bringing your ideas to life through modern technology and innovative solutions
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }
              }}
            >
              {/* Service Image */}
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  mb: 2,
                  borderRadius: 2,
                  border: '2px solid',
                  borderColor: `${service.color}.light`,
                  backgroundColor: `${service.color}.50`,
                  p: 1
                }}
              />

              {/* Service Icon */}
              <Box sx={{ mb: 1 }}>
                {service.icon}
              </Box>

              {/* Service Title */}
              <Typography variant="h5" component="h3" fontWeight={600} gutterBottom color={`${service.color}.main`}>
                {service.title}
              </Typography>

              {/* Service Description */}
              <Typography variant="body1" color="text.secondary" paragraph sx={{ flex: 1 }}>
                {service.description}
              </Typography>

              {/* Service Features */}
              <Stack spacing={1} sx={{ width: '100%', mt: 2 }}>
                {service.features.map((feature, featureIndex) => (
                  <Box
                    key={featureIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: `${service.color}.50`,
                      border: '1px solid',
                      borderColor: `${service.color}.100`
                    }}
                  >
                    <BuildIcon fontSize="small" color={service.color} />
                    <Typography variant="body2" fontWeight={500}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Card 
        sx={{ 
          mt: 6, 
          p: 4, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Ready to Start Your Project?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
          Let's work together to bring your ideas to life with modern technology and innovative solutions.
        </Typography>
        <SecurityIcon sx={{ fontSize: 48, opacity: 0.8 }} />
      </Card>
    </Container>
  );
}