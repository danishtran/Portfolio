import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Stack } from "@mui/material";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "esp32-weather-station",
    title: "ESP32 Weather Station",
    shortDescription: 'ESP32-based IoT weather station with local display, web UI, and cloud backend.',
    image: "/images/esp32-weather.jpg",
    githubUrl: "https://github.com/danishtran/esp32-weather-station"
  },
  {
    id: "yocto-spotify-display",
    title: "Yocto Spotify Display",
    shortDescription: "Spotify 'now playing' display built with Yocto Linux.",
    image: "/images/yoctoSpotify.jpg",
    githubUrl: "https://github.com/danishtran/spotifyDisplay"
  },
  {
    id: "arduino-dino-game",
    title: "Arduino Dino Game",
    shortDescription: "Portable ATmega328P handheld running a custom Dino Game.",
    image: "/images/arduinoDino.jpg",
    githubUrl: "https://github.com/danishtran/arduinoDinoGame"
  },
  {
    id: "rfid-spotify-player",
    title: "RFID Spotify Player",
    shortDescription: "RFID Spotify playback controller.",
    image: "/images/rfidSpotify.jpg",
    githubUrl: "https://github.com/danishtran/rfidSpotifyPlayer"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative" }}>
      <NavBar />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#050b10",
          color: "white",
          px: { xs: 2, sm: 4, md: 6 },
          pt: { xs: 12, md: 14 }
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 4, color: "#00e676", textAlign: "center" }}
        >
          Projects
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {projects.map((p) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={p.id}
              display="flex"
              justifyContent="center"
            >
              <Card
                onClick={() => navigate(`/projects/${p.id}`)}
                sx={{
                  width: 360,
                  height: 420,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#0d141a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  transition: ".25s",
                  ":hover": {
                    borderColor: "#00e676",
                    transform: "scale(1.02)"
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={p.image}
                  alt={p.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={700}>
                    {p.title}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                    {p.shortDescription}
                  </Typography>
                </CardContent>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    justifyContent: "space-between"
                  }}
                >
                  <Button
                    variant="outlined"
                    color="success"
                    href={p.githubUrl}
                    target="_blank"
                    sx={{ textTransform: "none", flex: 1 }}
                  >
                    GitHub
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ textTransform: "none", flex: 1 }}
                    onClick={() => navigate(`/projects/${p.id}`)}
                  >
                    View
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}