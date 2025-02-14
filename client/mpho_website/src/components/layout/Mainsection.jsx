import { Box, Typography, Grid, Button } from "@mui/material";
import ServiceCard from "../cards/ServiceCards"; 
import Testimonial from "../Proofs/Testimonial";
import CallToAction from "../contacts/CallToAction";
import FooterSection from "./FooterSection"; 
import FeatureHighlights from "../layout/FeatureHighlights"; 

import Custom_wooded_piece from '../../assets/custom_wooded_pieces.jpg';
import kitchen_furniture from '../../assets/kitchen_furniture.jpg';
import wooden_rack from '../../assets/wooden_rack.jpg';

function MainSection() {
  return (
    <Box>
      {/* Hero Section with Video */}
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        {/* Video Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source 
              src="https://ousqcqevoptzq3ri.public.blob.vercel-storage.com/carpentry-6uAzisfgXFawmrj5F4hAC5WwHKR69m.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Overlay Content */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            zIndex: 1,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "white", fontWeight: "bold", mb: 2 }}
          >
            WE ARE AVAILABLE FOR YOUR WOODEN WORK
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "grey.300", maxWidth: "600px", mb: 4 }}
          >
            Crafting high-quality wooden furniture and custom designs with precision and passion.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "0.3s",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Explore Our Work
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 4 }}>
          Services We Offer
        </Typography>

        {/* Grid layout for service cards */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Kitchen Furniture"
              image={kitchen_furniture}
              description="Custom kitchen designs tailored to your space and style."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Wooden Racks"
              image={wooden_rack}
              description="Durable and aesthetic wooden racks for home or office use."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Custom Wooden Pieces"
              image={Custom_wooded_piece}
              description="Unique, handcrafted wooden pieces to fit your needs."
            />
          </Grid>
        </Grid>
      </Box>

      {/* Testimonial Section */}
      <Testimonial />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Feature Highlights Section */}
      <FeatureHighlights />

      {/* Footer Section */}
      <FooterSection />
    </Box>
  );
}

export default MainSection;
