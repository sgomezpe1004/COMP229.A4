import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Card,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Grid,
  Alert,
  Snackbar,
  Paper,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const onSubmit = (data) => {
    console.log('Form data:', data);
    setOpenSnackbar(true);
    reset();
    
    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom color="primary">
          Get In Touch
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Let's discuss your next project and bring your ideas to life
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information - Left Side */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Contact Info Card */}
            <Card sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Feel free to reach out through any of these channels
              </Typography>

              <Stack spacing={3}>
                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText'
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      simongomezpetro1004@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: 'secondary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'secondary.contrastText'
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      Phone
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      (437) 388 - 1761
                    </Typography>
                  </Box>
                </Box>

                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: 'success.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'success.contrastText'
                    }}
                  >
                    <LocationIcon />
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      Based In
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      Toronto, Canada
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>

            {/* Quick Response Card */}
            <Card 
              sx={{ 
                p: 3, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}
            >
              <TimeIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Quick Response
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mb: 1 }}>
                I typically respond within
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                24 Hours
              </Typography>
            </Card>

            {/* Languages Card */}
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <LanguageIcon color="info" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom color="info.main">
                Languages
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body1" fontWeight={500}>
                  🇪🇸 Spanish (Native)
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  🇺🇸 English (Fluent)
                </Typography>
              </Stack>
            </Card>
          </Stack>
        </Grid>

        {/* Contact Form - Right Side */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 4, height: '100%' }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h2" fontWeight={700} gutterBottom color="primary">
                Send Me a Message
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Fill out the form below and I'll get back to you as soon as possible
              </Typography>
            </Box>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                {/* Name Fields */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'First name must be at least 2 characters' }
                      })}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      InputProps={{
                        startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      {...register('lastName', { 
                        required: 'Last name is required',
                        minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                      })}
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  </Grid>
                </Grid>

                {/* Contact Information */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      type="tel"
                      {...register('contactNumber', { 
                        required: 'Contact number is required',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                          message: 'Please enter a valid phone number'
                        }
                      })}
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber?.message}
                      InputProps={{
                        startAdornment: <PhoneIcon color="action" sx={{ mr: 1 }} />
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      InputProps={{
                        startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Message */}
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  InputProps={{
                    startAdornment: <MessageIcon color="action" sx={{ mr: 1, mt: 1, alignSelf: 'flex-start' }} />
                  }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<SendIcon />}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Card>
        </Grid>
      </Grid>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you! Your message has been captured. Redirecting to Home Page...
        </Alert>
      </Snackbar>
    </Container>
  );
}