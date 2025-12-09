import { AppBar, Toolbar, Box, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/" || location.pathname === "/home";

  const scrollToId = (id) => {
    const domElem = document.getElementById(id);
    if (!domElem) return;

    domElem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHomeAndScroll = (id) => {
    if (isHome) {
      scrollToId(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const handleHomeClick = () => {
    goHomeAndScroll("home-section");
  };

  const handleAboutClick = () => {
    goHomeAndScroll("about-section");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background:
          "linear-gradient(90deg, #020309 0%, #020814 50%, #020309 100%)", // darker than page bg
        borderBottom: "1px solid rgba(0, 255, 170, 0.4)",
        backdropFilter: "blur(10px)",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left: "Danish T." clickable button */}
        <Button
          onClick={handleHomeClick}
          sx={{
            p: 0,
            minWidth: "auto",
            borderRadius: 1.5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 1.5,
              border: "1px solid rgba(0, 255, 170, 0.8)",
              px: 1.5,
              py: 0.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: "0.9rem",
              color: "#e0fff5",
              bgcolor: "rgba(0, 10, 18, 0.95)",
              boxShadow: "0 0 15px rgba(0, 255, 170, 0.4)",
              overflow: "hidden",
              textTransform: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "#00ff6a",
                color: "#00130a",
                boxShadow: "0 0 25px rgba(0, 255, 170, 0.9)",
              },
            }}
          >
            Danish T.
          </Box>
        </Button>

        {/* Right-side nav buttons */}
        <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
          <Button
            onClick={handleHomeClick}
            sx={{
              textTransform: "none",
              fontSize: "0.95rem",
              color: "#e0f7ff",
            }}
          >
            Home
          </Button>

          <Button
            onClick={handleAboutClick}
            sx={{
              textTransform: "none",
              fontSize: "0.95rem",
              color: "#e0f7ff",
            }}
          >
            About
          </Button>

          <Button
            component={RouterLink}
            to="/projects"
            sx={{
              textTransform: "none",
              fontSize: "0.95rem",
              color: "#e0f7ff",
            }}
          >
            Projects
          </Button>

          <Button
            component={RouterLink}
            to="/resume"
            sx={{
              textTransform: "none",
              fontSize: "0.95rem",
              color: "#e0f7ff",
            }}
          >
            Resume
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
