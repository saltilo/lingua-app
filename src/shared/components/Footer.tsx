import { Box, Container, Typography, Link, Stack, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box py={8} mt={10}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            bgcolor: "#D9E0FF",
            borderRadius: "40px",
            p: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Связаться с нами
            </Typography>
            <Typography variant="body2">support@linguastep.app</Typography>
            <Typography variant="body2">www.linguastep.app</Typography>
            <Typography variant="body2">Таллин, Keeltee 42, офис 7</Typography>
          </Box>

          <Stack direction="row" spacing={3} alignItems="center">
            <Link href="#" target="_blank" rel="noopener">
              <FacebookIcon fontSize="large" sx={{ color: "#3b5998" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
              <InstagramIcon fontSize="large" sx={{ color: "#d62976" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener">
              <TwitterIcon fontSize="large" sx={{ color: "#1da1f2" }} />
            </Link>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Footer;
