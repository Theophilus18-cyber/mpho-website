import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const ServiceCard = ({ title, image, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%", padding: "10px 0", textTransform: "none" }}
        >
          Show More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
