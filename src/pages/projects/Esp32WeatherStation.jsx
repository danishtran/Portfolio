import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavBar from "../../components/Navbar";
import { Link as RouterLink } from "react-router-dom";

export default function Esp32WeatherStation() {
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
          component={RouterLink}
          to="/projects"
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
            ESP32 Weather Station
          </Typography>

          <IconButton
            href="https://github.com/danishtran/esp32-weather-station"
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
                src="images/esp32WeatherStationHorizontal.jpg"
                alt="ESP32 Weather Station"
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
                src="videos/esp32WeatherStationVideo.mov"
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
              This project is an ESP32-based IoT weather station that measures temperature using a BME280 sensor, 
              displays the data on a local LCD, and hosts a small web UI to view on other devices. The ESP32 also 
              sends a JSON payloads over HTTPS to an AWS backend (API Gateway → Lambda → DynamoDB) for long-term 
              storage. The firmware is written in C using ESP-IDF and FreeRTOS, with credentials stored in NVS.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Why It Was Made
            </Typography>

            <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              I noticed a problem with my room always being warmer than other locations in my house. I took this opportunity 
              to make a  weather station to accurately measure the temperature in my room and compare it to another room. I 
              decided to take the opportunity with the new project idea to learn how to use an ESP32 and wifi capability to 
              store it in a cloud storage.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Technologies Used
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• ESP32 (ESP-IDF, C) </Typography>
              <Typography>• FreeRTOS </Typography>
              <Typography>• I2C </Typography>
              <Typography>• HTTP web server </Typography>
              <Typography>• HTTPS to AWS API Gateway </Typography>
              <Typography>• AWS: API Gateway, AWS Lambda, DynamoDB </Typography>
              <Typography>• Terraform </Typography>
              <Typography>• Docker </Typography>
              <Typography>• ESP-IDF NVS </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: "#00e676", mb: 1 }}>
              Materials
            </Typography>

            <Stack spacing={1} sx={{ opacity: 0.8 }}>
              <Typography>• ESP32 </Typography>
              <Typography>• BME280 temperature/humidity/pressure sensor </Typography>
              <Typography>• Inland 1602 I2C LCD Display Module </Typography>
              <Typography>• Wi-Fi network </Typography>
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
                  Problem 1: Hard To Make Another Weather Station On A Different Computer
                </Typography>
                <Typography>
                  I originally developed the weather station on my desktop, but when I switched to working on my laptop, I ran 
                  into build and environment issues that didn’t exist before.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I created a Docker container that includes ESP-IDF, the toolchain, and Terraform so my development environment is 
                  identical across machines. This made it easier to build, flash, and manage the project from another device without 
                  reconfiguring everything.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 2: I Didn't Like Using AWS's Console
                </Typography>
                <Typography>
                  Managing the backend on the AWS Console made it hard to track changes, recreate the environment, or remember 
                  which settings were applied where.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I moved the entire AWS setup into Terraform {" ("}API Gateway, Lambda, DynamoDB tables, and IAM policies{") "}. 
                  This made it easy to have version-control changes and recreate the setup without going through the console.
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  Problem 3: Wanted To Hide Credentials
                </Typography>
                <Typography>
                  Early versions of the project the wifi credentials were variables, which is made posting it on GitHub impossible.
                  I couldn't use an env file either since there was no way to store it.
                </Typography>
                <Typography fontStyle="italic" sx={{ mt: 1 }}>
                  <Box
                    component="span"
                    sx={{ fontWeight: 700, color: "#00e676" }}
                  >
                    Solution:
                  </Box>{" "}
                  I learned I can store credentials into ESP-IDF’s NVS. The device stored and loaded Wi-Fi SSID/password, and any 
                  sensitive information from NVS instead of leaving them in the code. This keeps credentials out of the codebase 
                  and allows updating them using a configuration file without reflashing the firmware.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}