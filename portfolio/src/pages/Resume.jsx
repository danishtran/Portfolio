import { Box, Button } from "@mui/material";
import NavBar from "../components/Navbar";

export default function Resume() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <NavBar />

      <Box
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "#050b10",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, md: 12 },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            flexGrow: 1,
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <iframe
            src="/files/resume.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="secondary"
          href="/files/resume.pdf"
          download
          sx={{
            mt: 2,
            mb: 2,
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.4 },
          }}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}
