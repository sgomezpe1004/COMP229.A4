import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Card,
  Typography,
  TextField,
  Button,
  Stack,
  Grid,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Send as SendIcon } from '@mui/icons-material';

export default function ContactsManager() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [contacts, setContacts] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const token = localStorage.getItem("authToken");
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005/api';
  
  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_URL}/contacts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch contacts');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
      setSnackbarMsg(err.message);
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddOrUpdate = async (data) => {
    try {
      let url = `${API_URL}/contacts`;
      let method = 'POST';

      if (editingId) {
        url += `/${editingId}`;
        method = 'PUT';
      }

      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        contactNumber: data.contactNumber
      };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(responseBody));

      setSnackbarMsg(editingId ? 'Contact updated!' : 'Contact added!');
      setOpenSnackbar(true);
      reset();
      setEditingId(null);
      fetchContacts();
    } catch (err) {
      console.error(err);
      setSnackbarMsg(err.message);
      setOpenSnackbar(true);
    }
  };

  const handleEdit = (contact) => {
    setEditingId(contact._id);
    setValue('firstname', contact.firstname);
    setValue('lastname', contact.lastname);
    setValue('email', contact.email);
    setValue('contactNumber', contact.contactNumber || '');
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to delete contact');
      setSnackbarMsg('Contact deleted!');
      setOpenSnackbar(true);
      fetchContacts();
    } catch (err) {
      console.error(err);
      setSnackbarMsg(err.message);
      setOpenSnackbar(true);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0) return;

    try {
      const res = await fetch(`${API_URL}/contacts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ids: selectedIds }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(result));

      setSnackbarMsg('Selected contacts deleted!');
      setOpenSnackbar(true);
      setSelectedIds([]);
      fetchContacts();
    } catch (err) {
      console.error("Failed to delete selected contacts:", err);
      setSnackbarMsg(`Failed to delete selected contacts: ${err.message}`);
      setOpenSnackbar(true);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Contacts Manager
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {editingId ? 'Edit Contact' : 'Add Contact'}
            </Typography>
            <form onSubmit={handleSubmit(handleAddOrUpdate)}>
              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  fullWidth
                  {...register('firstname', { required: 'Required' })}
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  {...register('lastname', { required: 'Required' })}
                  error={!!errors.lastname}
                  helperText={errors.lastname?.message}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Email"
                  fullWidth
                  type="email"
                  {...register('email', {
                    required: 'Required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Contact Number"
                  fullWidth
                  {...register('contactNumber')}
                  InputLabelProps={{ shrink: true }}
                />

                <Button type="submit" variant="contained" startIcon={<SendIcon />}>
                  {editingId ? 'Update Contact' : 'Add Contact'}
                </Button>
              </Stack>
            </form>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.length === contacts.length && contacts.length > 0}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedIds(contacts.map(c => c._id));
                        else setSelectedIds([]);
                      }}
                    />
                  </TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map(contact => (
                  <TableRow key={contact._id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedIds.includes(contact._id)}
                        onChange={() => handleCheckboxChange(contact._id)}
                      />
                    </TableCell>
                    <TableCell>{contact.firstname}</TableCell>
                    <TableCell>{contact.lastname}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.contactNumber}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(contact)}><EditIcon /></IconButton>
                      <IconButton onClick={() => handleDelete(contact._id)}><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button sx={{ mt: 2 }} variant="contained" color="error" onClick={handleDeleteSelected}>
            Delete Selected
          </Button>
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
