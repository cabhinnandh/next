import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1976d2", width: "100%" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          News
        </Typography>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>

        {/* Signup button */}
        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/sate")}
        >
          useStae
        </Button>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/counter")}
        >
          counter
        </Button>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/button")}
        >
          ButtonNaming
        </Button>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/api")}
        >
          Api
        </Button>

        <Button
          color="inherit"
          sx={{ fontWeight: "bold", textTransform: "none" }}
          onClick={() => navigate("/card")}
        >
          Card
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
