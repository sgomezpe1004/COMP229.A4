import React from 'react';
import {
  Container,
  Card,
  Typography,
  Box,
  Stack,
  Divider,
  Chip,
  Grid,
} from '@mui/material';
import {
  School as SchoolIcon,
  Language as LanguageIcon,
  Security as SecurityIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

export default function Education() {
  const educationData = [
    {
      institution: 'University of Cordoba, Montería, Colombia',
      program: 'General English Course - B2 Level CEFR',
      period: '2016-2023',
      icon: <LanguageIcon color="primary" />
    },
    {
      institution: 'La Salle School, Montería, Colombia',
      program: 'High School Diploma',
      period: '2018-2023',
      icon: <SchoolIcon color="secondary" />
    },
    {
      institution: 'ILAC, Toronto, Canada',
      program: 'English Proficiency Program (Level 16) and University Pathway 3.2',
      period: 'Mar-Jul 2024',
      icon: <LanguageIcon color="success" />
    },
    {
      institution: 'Coursera - Google Cybersecurity Certificate',
      program: 'Cybersecurity Professional Certificate',
      period: 'Completed: Dec 2024',
      skills: ['Python', 'Linux', 'SIEM tools', 'IDS', 'Cybersecurity principles'],
      icon: <SecurityIcon color="warning" />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="primary">
          Education
        </Typography>
        <Typography variant="h6" color="text.secondary">
          My Academic Journey and Certifications
        </Typography>
      </Box>

      {/* Education Timeline */}
      <Card sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          Academic Background
        </Typography>
        <Stack spacing={3}>
          {educationData.map((edu, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ mt: 0.5 }}>
                  {edu.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body1" color="text.primary" paragraph>
                    {edu.program}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CalendarIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {edu.period}
                    </Typography>
                  </Box>
                  {edu.skills && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                      {edu.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
              {index < educationData.length - 1 && (
                <Divider sx={{ mt: 2 }} />
              )}
            </Box>
          ))}
        </Stack>
      </Card>

      {/* Certificates Section */}
      <Grid container spacing={3}>
        {/* ILAC Certificates */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" fontWeight={600} gutterBottom color="primary">
              ILAC Certificates
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  English Proficiency (Level 16)
                </Typography>
                <iframe
                  src="/288330_Proficiency (Level 16).pdf"
                  width="100%"
                  height="400"
                  title="ILAC Proficiency Certificate"
                  style={{
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  University Pathway 3.2
                </Typography>
                <iframe
                  src="/ILAC PW3.2_Certificate_288330 Gomez Petro, Simon.pdf"
                  width="100%"
                  height="400"
                  title="ILAC Pathway Certificate"
                  style={{
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* Cybersecurity Certificate */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" fontWeight={600} gutterBottom color="primary">
              Professional Certification
            </Typography>
            <Box>
              <Typography variant="h6" gutterBottom>
                Google Cybersecurity Certificate
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Completed December 2024 - Comprehensive training in cybersecurity fundamentals
              </Typography>
              <iframe
                src="/Coursera VT3WCBRB282V.pdf"
                width="100%"
                height="400"
                title="Cybersecurity Certificate"
                style={{
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}