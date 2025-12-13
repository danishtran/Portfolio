import { useEffect } from "react";
import { useLocation,  Link as RouterLink } from "react-router-dom";
import { Box, Typography, Stack, Avatar, IconButton, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NavBar from "../components/Navbar";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state && location.state.scrollTo;
    if (!scrollTo) return;

    const domElem = document.getElementById(scrollTo);
    if (!domElem) return;

    domElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [location]);

  return (
    <Box sx={{ position: "relative" }}>
      <NavBar />

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          bgcolor: "#050b10",
        }}
      >
        <Box
          id="home-section"
          sx={{
            minHeight: "100vh",
            scrollSnapAlign: "start",
            scrollMarginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
          >
            <Avatar
              src="images/profile.jpg"
              alt="Profile picture"
              sx={{
                width: { xs: "40vw", sm: "32vw", md: "22vw", lg: "18vw" },
                height: { xs: "40vw", sm: "32vw", md: "22vw", lg: "18vw" },
                maxWidth: 260,
                maxHeight: 260,
                boxShadow: "0 0 30px rgba(0, 230, 118, 0.35)",
              }}
            />

            <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#00e676",
                }}
              >
                Software Engineer Graduate
              </Typography>

              <Typography
                variant="h3"
                fontWeight={700}
                sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
              >
                Hi! My name is Danish Tran
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                I'm a recent Software Engineer B.S. graduate from the UC Irvine. I am interested in building embedded systems and software and IOT devices.
              </Typography>
            </Stack>
          </Stack>

          <IconButton
            onClick={() =>
              document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              mt: 6,
              bgcolor: "rgba(0, 230, 118, 0.15)",
              border: "1px solid rgba(0, 230, 118, 0.4)",
              ":hover": { bgcolor: "rgba(0, 230, 118, 0.3)" },
            }}
          >
            <ArrowDownwardIcon sx={{ color: "#00e676", fontSize: 32 }} />
          </IconButton>
        </Box>

        <Box
          id="about-section"
          sx={{
            minHeight: "100vh",
            scrollSnapAlign: "start",
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 960,
            mx: "auto",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <Stack spacing={6}>
            <Stack spacing={1.5}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ color: "#00e676" }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                I enjoy taking building useful projects that help solve problems I run into in my everyday life.
                I’m currently looking for opportunities to work on embedded software, firmware, or IoT systems.
                <br/><br/>
                Away from the computers, I like discovering new restaurants, exploring new cities, doing landscape photography, woodworking and playing games.
              </Typography>
            </Stack>

            <Button
              component={RouterLink}
              to="/projects"
              variant="outlined"
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                borderColor: "rgba(0, 230, 118, 0.8)",
                color: "#00e676",
                textTransform: "none",
                px: 3,
                py: 1,
                fontWeight: 600,
                ":hover": {
                  borderColor: "#00e676",
                  backgroundColor: "rgba(0, 230, 118, 0.12)",
                },
              }}
            >
              View Projects
            </Button>

            <Button
              component={RouterLink}
              to="/resume"
              variant="outlined"
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                borderColor: "rgba(0, 230, 118, 0.8)",
                color: "#00e676",
                textTransform: "none",
                px: 3,
                py: 1,
                fontWeight: 600,
                ":hover": {
                  borderColor: "#00e676",
                  backgroundColor: "rgba(0, 230, 118, 0.12)",
                },
              }}
            >
              Resume
            </Button>

            <Stack spacing={2}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ color: "#00e676" }}
              >
                Contact
              </Typography>

              <Stack direction="row" spacing={3}>
                <IconButton
                  href="https://www.linkedin.com/in/danish-tran/"
                  target="_blank"
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    border: "1px solid rgba(0, 230, 118, 0.6)",
                  }}
                >
                  <LinkedInIcon
                    sx={{ fontSize: { xs: 24, md: 28 }, color: "#00e676" }}
                  />
                </IconButton>

                <IconButton
                  href="https://github.com/danishtran"
                  target="_blank"
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    border: "1px solid rgba(0, 230, 118, 0.6)",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: 24, md: 28 }, color: "#00e676" }} />
                </IconButton>

                <IconButton
                  href="mailto:danishdtran@gmail.com"
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    border: "1px solid rgba(0, 230, 118, 0.6)",
                  }}
                >
                  <EmailIcon
                    sx={{ fontSize: { xs: 24, md: 28 }, color: "#00e676" }}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
