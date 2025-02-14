import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import woodIcon from "../../assets/wood_icon.jpg";

 function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* AppBar (Top Navigation) */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 1 }}>
            <img src={woodIcon} alt="Carpentry Logo" style={{ width:40, height:40,borderRadius: "8px" }} />
            Carpentry
          </Typography>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6" style={{ marginLeft: "auto", marginRight:"80px" }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            <Button component={Link} to="/projects" color="inherit">Projects</Button>
            <Button component={Link} to="/shop" color="inherit">Shop</Button>
            <Button component={Link} to="/blog" color="inherit">Blog</Button>
            <Button component={Link} to="/contact" color="inherit">Contact</Button>
          </div>

          {/* Icons (Search & Cart) */}
          <div className="flex items-center space-x-3">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            {/* Mobile Menu Button */}
            <IconButton color="inherit" className="md:hidden" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {["Home", "About", "Projects", "Shop", "Blog", "Contact"].map((text) => (
            <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Adds spacing so the navbar doesn’t overlap content */}
      <Toolbar />
    </>
  );
}

export default NavBar
