import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{backgroundColor: '#1976d2' }}>
      <Container maxWidth="xl">
      <Toolbar
      disableGutters
        sx={{
          display: "flex",
        
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 1.5, sm: 0 }, 
          gap: { xs: 1, sm: 0 }  
        }}
      >
        <Typography variant="h6"
        component="div"
        sx={{ fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.25rem" }, 
              textAlign: "center"}} >
          Clima Dashboard
        </Typography>

        <Box 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "center",
              gap: { xs: 0.5, sm: 1 } 
            }}
          ></Box>

          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
          
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/favoritos"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Favoritos
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/sobre"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
          >
            Sobre
          </Button>

      </Toolbar>
      </Container>
    </AppBar>
  );
}