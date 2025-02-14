import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Divider, Modal, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material'; // Import icons

// Modal content for Privacy Policy and Terms of Service
function ModalContent({ open, onClose, title, content }) {
  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 24, width: 400 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained" color="primary">Close</Button>
      </Box>
    </Modal>
  );
}

function FooterSection() {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (type) => {
    if (type === 'privacy') {
      setModalTitle('Privacy Policy');
      setModalContent('This is the privacy policy content...');
    } else if (type === 'terms') {
      setModalTitle('Terms of Service');
      setModalContent('These are the terms of service content...');
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={{ py: 6, bgcolor: "background.default", color: "text.secondary" }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Contact Us Section */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">123 Main Street, City</Typography>
          <Typography variant="body2">email@company.com</Typography>
          <Typography variant="body2">+123-456-7890</Typography>
        </Grid>

        {/* Follow Us Section with Icons */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Legal
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="text" color="inherit" onClick={() => handleOpenModal('privacy')}>
                Privacy Policy
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit" onClick={() => handleOpenModal('terms')}>
                Terms of Service
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Divider Line to separate footer content */}
      <Divider sx={{ my: 4, bgcolor: "text.primary" }} />

      {/* Footer Copyright */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">&copy; 2025 Carpentry Works</Typography>
      </Box>

      {/* Modal for Privacy Policy and Terms of Service */}
      <ModalContent open={openModal} onClose={handleCloseModal} title={modalTitle} content={modalContent} />
    </Box>
  );
}

export default FooterSection;
