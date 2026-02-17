import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Contact from './src/contact.jsx';
import About from './src/about.jsx';
import Education from './src/education.jsx';
import Project from './src/project.jsx';
import Services from './src/services.jsx';
import Register from './src/register.jsx';
import Login from './src/login.jsx';
import EditProfile from './src/edit-profile.jsx';
import Profile from './src/profile.jsx';
import ContactsCrud from './src/contactsmanager.jsx';

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts-crud" element={<ContactsCrud />} />
      </Routes>
    </Layout>
  );
};

export default MainRouter;
