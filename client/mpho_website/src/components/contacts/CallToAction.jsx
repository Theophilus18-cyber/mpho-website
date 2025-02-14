
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function CallToAction() {
  return (
    <Box sx={{ py: 6, textAlign: "center", bgcolor: "primary.light", color: "white" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Ready to transform your space?
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Get in touch with us today to bring your ideas to life with expert craftsmanship.
      </Typography>
      <Button
        variant="contained"
        sx={{
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        Request a Quote
      </Button>
    </Box>
  );
}


export default  CallToAction