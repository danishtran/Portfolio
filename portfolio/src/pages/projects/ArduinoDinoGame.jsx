import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavBar from "../../components/Navbar";

export default function ArduinoDinoGame() {
  return (
    <Box sx={{ position: "relative" }}>
      <NavBar />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#050b10",
          color: "white",
          px: { xs: 2, sm: 4, md: 6 },
          pt: { xs: 12, md: 14 },
          pb: 6,
          maxWidth: 1000,
          mx: "auto"
        }}
      >
        <Button
          variant="outlined"
          href="/projects"
          sx={{
            mb: 4,
            textTransform: "none",
            color: "#00e676",
            borderColor: "#00e676",
            ":hover": { borderColor: "#00ff88", color: "#00ff88" }
          }}
        >
          ← Back to Projects
        </Button>
        
        <Box
           sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: "#00e676", mb: 4 }}
          >
            Arduino Dino Game
          </Typography>

          <IconButton
            href="https://github.com/danishtran/arduinoDinoGame"
            target="_blank"
            sx={{
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              border: "1px solid rgba(0, 230, 118, 0.6)",
            }}
          >
            <GitHubIcon sx={{ fontSize: { xs: 24, md: 28 }, color: "#00e676" }} />
          </IconButton>
        </Box>

        <Stack spacing={6}>
          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 2 }}>
              Project Photo
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: { xs: "220px", sm: "300px", md: "380px" },
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <img
                src="/images/arduinoDinoHorizontal.jpg"
                alt="Arduino Dino Game"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 2 }}>
              Demo Video
            </Typography>

            <Box
              sx={{
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <video
                src="/videos/rfid-spotify-player.mp4" // change video
                controls
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Description
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              This project is a handheld Arduino-based clone of the Chrome Dino game, built around an 
              Arduino Nano and a 240×240 ST7789 TFT display. The game runs entirely on the microcontroller: 
              rendering the Dino, obstacles, ground, and score in real time, while reading two physical 
              buttons for jump and duck. Everything is powered from a single Li-Po battery with usb-c charging. 
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Why It Was Made
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              I wanted a small mobile game project that was fun and portable since my phone battery died fast. 
              To solve this I decided to take a game I enjoyed that doesn't require an internet connection and decided
              to build it out on a handheld console to take with me.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Technologies Used
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Arduino Nano V3.0 (ATmega328P, C++/Arduino)</Typography>
              <Typography>• ST7789 240×240 TFT display</Typography>
              <Typography>• Adafruit GFX Library</Typography>
              <Typography>• Adafruit ST7735 and ST7789 Library</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Materials
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Arduino Nano V3.0</Typography>
              <Typography>• ST7789 240×240 SPI TFT module</Typography>
              <Typography>• TP4056 Li-Po charger/protection board (USB-C input)</Typography>
              <Typography>• MT3608 boost converter</Typography>
              <Typography>• Two momentary push-buttons</Typography>
              <Typography>• MT3608 boost converter</Typography>
              <Typography>• SPST slide switch</Typography>
              <Typography>• Wires</Typography>
              <Typography>• Perfboard</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Development Process
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6, mb: 1 }}>
              Developing I ran into some problems:
            </Typography>

            <Stack spacing={2} sx={{ opacity: 0.8 }}>
              <Box>
                <Typography fontWeight={600}>
                  Problem 1: Full-Screen Redraw Caused Flickering and Slowdown
                </Typography>
                <Typography>
                  On early versions, every frame cleared and redrew the entire 240×240 screen, including background, ground, 
                  Dino. This worked, but the screen's frame rate dropped once obstacles and score was introduced. 
                  The full-screen clears was too slow for it to be smooth.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Instead of redrawing the whole screen, I optimized the rendering to only update the regions that 
                  actually change each frame (Dino, obstacles, ground line, and score area). Static parts of the background are drawn once.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 2: Jump Code Didn't Work With Obstacle
                </Typography>
                <Typography>
                  At first I implemented the jump and duck, but once I implemented obstacles the jump would freeze time 
                  and draw out the jump without the obstacle moving at all.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Change the code logic to update by tick so if the player jumped then it would lock other controls
                  until it was done jumping and would move the player and obstacle every tick rather than seperately.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 3: Arduino Doesn't Recieve Proper Voltage
                </Typography>
                <Typography>
                  Initially I only had a lipo battery and TP4056 charging module and I notice my Arduino wasn't behaving 
                  properly.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Added a MT3608 boost converter module and used a multimeter to properly set it to 5V for the Arduino.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}