import React from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  Stack,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Visibility as VisibilityIcon,
  School as SchoolIcon,
  Flag as FlagIcon,
} from '@mui/icons-material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Profile Section */}
        <Grid item xs={12} md={5}>
          <Card sx={{ 
            p: 3, 
            textAlign: 'center', 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Avatar
              src="/profile.png"
              alt="Simon Gomez"
              sx={{
                width: 160,
                height: 160,
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main'
              }}
            />
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Simon Gomez Petro
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Software Engineering Student
            </Typography>
            
            <Stack spacing={1} sx={{ width: '100%', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <FlagIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  Colombian • 19 years old
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <SchoolIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  Centennial College
                  <p style={{ color: 'blue' }}>This is a change for CI/CD Test.</p>
                </Typography>
              </Box>
            </Stack>
        
            <Stack spacing={1} sx={{ width: '100%' }}>
              <Button
                variant="contained"
                startIcon={<VisibilityIcon />}
                fullWidth
                size="medium"
                component="a"
                href="/CV sgp D.pdf"
                target="_blank"
              >
                View Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                fullWidth
                size="medium"
                component="a"
                href="/CV sgp D.pdf"
                download
              >
                Download PDF
              </Button>
            </Stack>
          </Card>
        </Grid>

        {/* Resume Preview Section */}
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom align="center" color="primary">
              Resume Preview
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <iframe 
                src="/CV sgp D.pdf"
                width="100%"
                height="650"
                title="Resume"
                style={{ 
                  border: '2px solid', 
                  borderColor: 'divider',
                  borderRadius: '12px',
                  maxWidth: '600px'
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}