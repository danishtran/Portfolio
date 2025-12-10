import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavBar from "../../components/Navbar";

export default function YoctoSpotifyDisplay() {
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
            Yocto Spotify Display
          </Typography>

          <IconButton
            href="https://github.com/danishtran/spotifyDisplay"
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
                src="/images/yoctoSpotifyHorizontal.jpg"
                alt="Yocto Spotify Display"
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
              This project is a dedicated “Now Playing” display for Spotify, built on a Raspberry Pi 4 running a custom 
              Yocto Linux image. On boot, the Pi launches directly into a full-screen C application that pulls JSON state 
              from a separate Spotify webserver (my RFID Spotify player), decodes album art, and renders it to a 3.5" SPI 
              LCD using a framebuffer. The screen shows album cover, track title, artist, play/pause icon, and repeat/shuffle 
              status, with scrolling text for longer names. It’s designed to be a visual display to the RFID + Spotify 
              controller project.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Why It Was Made
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              After building the RFID Spotify controller, I realized I would not know what was playing and whether repeat and shuffle 
              were on. I took the opportunity to learn how to create my own operating systems and desktop environments, since my other 
              Raspberry Pi Project was bloated by the RaspberryPiOS. I wanted to be minimal and immediately show Spotify playback status. 
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Technologies Used
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Yocto / Poky (with meta-raspberrypi, meta-openembedded, and custom meta-custom layer on kirkstone)</Typography>
              <Typography>• C</Typography>
              <Typography>• Bash</Typography>
              <Typography>• Linux framebuffer</Typography>
              <Typography>• stb_image for decoding album art images</Typography>
              <Typography>• SPI</Typography>
              <Typography>• Wi-Fi networking via wpa_supplicant</Typography>
              <Typography>• HTTPS communication with Flask API</Typography>
              <Typography>• Dropbear SSH for debugging</Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Materials
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• Raspberry Pi 4 Model B (1 GB)</Typography>
              <Typography>• Inland 3.5" SPI TFT LCD Touch Screen (480×320, ILI9486)</Typography>
              <Typography>• microSD card (for image) with adapter</Typography>
              <Typography>• Wi-Fi network (both Pis on same LAN)</Typography>
              <Typography>• USB-TTL serial adapter for UART console</Typography>
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
                  Problem 1: Yocto Layer Setup and Image Failing to Build
                </Typography>
                <Typography>
                  Getting all required layers (poky, meta-openembedded, meta-raspberrypi, and meta-custom) and meta-custom recipes 
                  to work together took some trial and error.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Most of it was the learning process of yocto and learning how the to properly make recipes for the layer to work with 
                  the other required layers. Properly organizing a meta-custom directory and recipes with their .bbapend files helped with 
                  debugging issues.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 2: Wanted to Set Up Instant Start Up
                </Typography>
                <Typography>
                  I ran into issues with the wifi and ssh not being available right away until I boot into the image and use the UART console 
                  to enable them both. This wasn't practically because once I install the screen I would no longer have access to the UART GPIO
                  pins so I need it to automatically boot with wifi and ssh enabled.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I learned to use .service files with systemd to automatically enable wifi and ssh on boot. I used what I learned from that to later
                  implement the same thing to the C application to automatically boot the application to make the display seemless. 
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 3: The Kernel Driver Would Not Boot Properly
                </Typography>
                <Typography>
                  I had issues with the display not initializing at all and would only get power and could not be written to. On the box of the display
                  it said it was using ILI9481 as its driver.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I learned I had to create a custom kernel by making a patch tree to in my meta-custom layer to allow the SPI to interact with the display.
                  I ran into another issue with SPI enabled and custom kernel enabled it still would not work. I used the tutorial for the screen with the 
                  RaspberryPiOS to ensure the screen was working properly and the screen wasn't the issue. I found that it was working properly so I check 
                  the files to find that the driver listed on the box was completely wrong and the screen was actually using ILI9486 as its driver. 
                  I fixed my patch tree with the new driver and it worked right away.
                </Typography>
              </Box>

              
              <Box>
                <Typography fontWeight={600}>
                  Problem 4: The Song Title Was Too Long
                </Typography>
                <Typography>
                  For some songs the title was too long so the title would break and overlap and go over to the other side since it didn't have enough
                  room to write another text to the right.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I decided the best way to fix this was to make a scrolling effect on the text since I didn't want to just cut off the title and limit it.
                  I also created a backbuffer using that I made a double buffer to make the scrolling more smooth and avoid flinkering on the screen.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 5: The Album Art Doesn't Load
                </Typography>
                <Typography>
                  I could not figure out how to get the album art to display since I had the link to the image and access to wifi.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  Coming from web develpment, I thought having the linked to the image and wifi, I didn't realize that the web browser automatically did it. 
                  I learned that I actaully had to decode the image since there was no way for it to automatically know how to decode it. I found that I could
                  implement stb_image to decode the image for me and I can use it to draw to the screen.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}