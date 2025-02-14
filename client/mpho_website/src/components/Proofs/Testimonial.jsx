
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

function Testimonial() {
  return (
    <Box sx={{ py: 6, bgcolor: "background.paper", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        What Our Clients Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
              "The craftsmanship of the wooden furniture is exceptional. Truly amazing!"
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.600" }}>
              - John Doe, Homeowner
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ bgcolor: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
              "Incredible service and attention to detail. Our kitchen is now a masterpiece!"
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.600" }}>
              - Jane Smith, Designer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial
