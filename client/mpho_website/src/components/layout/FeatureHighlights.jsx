// FeatureHighlights.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function FeatureHighlights() {
  return (
    <Box sx={{ py: 6, bgcolor: "background.default", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Why Choose Us?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", bgcolor: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Custom Designs
            </Typography>
            <Typography variant="body2">
              Our designs are tailored to your specific needs and preferences, ensuring a perfect fit for your space.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", bgcolor: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              High Quality Materials
            </Typography>
            <Typography variant="body2">
              We use only the best materials for durability and a premium finish.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", bgcolor: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Expert Craftsmanship
            </Typography>
            <Typography variant="body2">
              Our skilled craftsmen bring years of experience to every project, ensuring perfection in every detail.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


export default FeatureHighlights