import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  GitHub as GitHubIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Edit as EditIcon,
  Login as LoginIcon,
  Delete as DeleteIcon,
  Contacts as ContactsIcon,
} from '@mui/icons-material';

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || 'null'));
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [deleteDialog, setDeleteDialog] = useState(false);

  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'Resume' },
    { link: '/education', label: 'Education' },
    { link: '/project', label: 'Projects' },
    { link: '/services', label: 'Services' },
    { link: '/contact', label: 'Contact' },
    { link: '/contacts-crud', label: 'Add Contacts', icon: <ContactsIcon fontSize="small" /> }
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
    setSnackbar({ open: true, message: 'Successfully logged out!', severity: 'info' });
    navigate('/');
  };

  const handleDeleteProfile = () => setDeleteDialog(true);

  const confirmDeleteProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:3005/api/users/profile", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete profile");
      }
      localStorage.removeItem("currentUser");
      localStorage.removeItem("authToken");
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
      setCurrentUser(null);
      setDeleteDialog(false);
      setSnackbar({ open: true, message: "Profile deleted successfully!", severity: "success" });
      navigate("/");
    } catch (error) {
      console.error("❌ Delete profile error:", error);
      setSnackbar({ open: true, message: error.message, severity: "error" });
    }
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });
  const handleCloseDeleteDialog = () => setDeleteDialog(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Simón Gómez</Typography>
      <List>
        {links.map(item => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              selected={location.pathname === item.link}
              sx={{ textAlign: 'center' }}
            >
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {!isLoggedIn ? (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/register" sx={{ textAlign: 'center' }}>
                <PersonIcon sx={{ mr: 1 }} />
                <ListItemText primary="Create Account" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login" sx={{ textAlign: 'center' }}>
                <LoginIcon sx={{ mr: 1 }} />
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/profile" sx={{ textAlign: 'center' }}>
                <PersonIcon sx={{ mr: 1 }} />
                <ListItemText primary="My Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/edit-profile" sx={{ textAlign: 'center' }}>
                <EditIcon sx={{ mr: 1 }} />
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDeleteProfile} sx={{ textAlign: 'center', color: 'error.main' }}>
                <DeleteIcon sx={{ mr: 1 }} />
                <ListItemText primary="Delete Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center' }}>
                <LogoutIcon sx={{ mr: 1 }} />
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </>
        )}

        <ListItem disablePadding>
          <ListItemButton component="a" href="https://github.com/sgomezpe1004" target="_blank" sx={{ textAlign: 'center' }}>
            <GitHubIcon sx={{ mr: 1 }} />
            <ListItemText primary="GitHub" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: 'background.paper', color: 'text.primary', boxShadow: 1 }}>
        <Toolbar sx={{ minHeight: '56px !important' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
            <Button component={Link} to="/" sx={{ textTransform: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="/images.png" alt="Logo" style={{ width: 30, height: 30, borderRadius: 4 }} />
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #1976d2, #42a5f5)' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Simón Gómez</Typography>
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 0.5 }}>
              {links.map(item => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.link}
                  variant={location.pathname === item.link ? 'contained' : 'text'}
                  size="small"
                  startIcon={item.icon || null}
                  sx={{ borderRadius: 1, fontWeight: 600, px: 1.5, py: 0.5 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {!isLoggedIn ? (
                <>
                  <Button component={Link} to="/register" variant="outlined" size="small" startIcon={<PersonIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>Create Account</Button>
                  <Button component={Link} to="/login" variant="contained" size="small" startIcon={<LoginIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>Sign In</Button>
                </>
              ) : (
                <>
                  <Button component={Link} to="/profile" variant="outlined" size="small" startIcon={<PersonIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>My Profile</Button>
                  <Button component={Link} to="/edit-profile" variant="outlined" size="small" startIcon={<EditIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>Edit Profile</Button>
                  <Button onClick={handleDeleteProfile} variant="outlined" color="error" size="small" startIcon={<DeleteIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>Delete Profile</Button>
                  <Button onClick={handleLogout} variant="outlined" color="error" size="small" startIcon={<LogoutIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>Logout</Button>
                </>
              )}
              <Button component="a" href="https://github.com/sgomezpe1004" target="_blank" variant="outlined" size="small" startIcon={<GitHubIcon fontSize="small" />} sx={{ borderRadius: 1, fontWeight: 600, px: 1.5 }}>GitHub</Button>
            </Stack>

            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' }, ml: 1 }}>
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pt: 0 }}>
        <Container maxWidth="lg" sx={{ py: 0 }}>
          {children}
        </Container>
      </Box>

      <Dialog open={deleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle color="error">
          <DeleteIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Delete Profile
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your profile? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={confirmDeleteProfile} color="error" variant="contained" autoFocus>Delete Profile</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
);
}
