import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavBar from "../../components/Navbar";

export default function RfidSpotifyPlayer() {
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
            RFID Spotify Player
          </Typography>

          <IconButton
            href="https://github.com/danishtran/rfidSpotifyPlayer"
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
                src="images/rfidSpotifyHorizontal.jpg"
                alt="RFID Spotify Player"
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
                src="/videos/rfid-spotify-player.mp4"
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
              Raspberry Pi-based RFID music player uses RFID tags to instantly start Spotify playlists, 
              control playback, and switch tracks without needing a phone or graphical interface. Each RFID tag is
              mapped to a specific playlist, artist, or control action, allowing a touch-free and user-friendly 
              way to play music. It uses Spotify's OAuth 2.0 with automatic token refresh and Python scripts integrated 
              with RFID hardware for playback control.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Why It Was Made
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              I recently built a speaker system, but I ran into an issue, I wanted to use my phone while 
              listening to music, but it was connected to the system. To solve this, I decided to build 
              a music player that links directly to my Spotify, allowing me to control it freely from my 
              phone or another device. RFID tags came in handy for faster control of the player. Tapping 
              the tags was much quicker than unlocking my phone and navigating the Spotify app, and it 
              also let me control the player without using my phone at all.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Technologies Used
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Raspberry Pi</Typography>
              <Typography>• Python</Typography>
              <Typography>• Spotify Web API</Typography>
              <Typography>• OAuth 2.0 (with auto token refresh)</Typography>
              <Typography>• RFID PN532 hardware</Typography>
              <Typography>• REST/HTTPS integration</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Materials
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Raspberry Pi</Typography>
              <Typography>• PN532 RFID Module</Typography>
              <Typography>• RFID Tags / Cards</Typography>
              <Typography>• Python runtime + requests library</Typography>
              <Typography>• Spotify developer account</Typography>
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
                  Problem 1: Spotify API Token Last 1 Hour
                </Typography>
                <Typography>
                  The player would lose control every hour, this was due to the Spotify tokens expiring
                  every hour. So running the code again to get the new token every hour become inconvientent 
                  and ruined the experience. 
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Implemented automatic refresh token so playback always remains active.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 2: Spotify Player Would Not Start Sometimes
                </Typography>
                <Typography>
                  The Spotify API would not allow controls when the player was inactive for too long.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Added default values to select a preset playlist and state to make the experience
                  more seemless.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 3: Bad RFID Scanner Hardware
                </Typography>
                <Typography>
                  Initially the code was built the more popular RC522 RFID module. However it would randomly break
                  when plugging and unplugging the power source for the Raspberry Pi.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Switched to PN532 since it was a more reliable module and had faster communication with 
                  Raspberry Pi.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
