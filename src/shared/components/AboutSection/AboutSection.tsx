import { Box, Grid, Paper, Typography } from "@mui/material";

const features = [
  {
    emoji: "👥",
    title: "Мы — за живое обучение",
    description:
      "Ты не просто кликаешь по карточкам, а учишься говорить, слышать и думать на языке.",
  },
  {
    emoji: "📖",
    title: "Никакой зубрёжки",
    description:
      "Все слова ты усвоишь в контексте, через диалоги и ситуации из жизни.",
  },
  {
    emoji: "⭐",
    title: "Ты — в центре внимания",
    description: "ИИ-тренер отслеживает твой прогресс и подбирает лучший путь.",
  },
  {
    emoji: "📚",
    title: "Учёба не напрягает",
    description:
      "Наш подход: 5 минут — 1 урок. Удобно в метро, в пробке, на кофе-брейке.",
  },
];

const AboutSection = () => {
  return (
    <Box id="about-section" py={8}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          boxShadow: "none",
          border: "none",
        }}>
        <Grid container wrap="nowrap">
          {" "}
          <Grid
            sx={{
              minWidth: { xs: "100%", md: 300 },
              maxWidth: { md: 350 },
              pr: { md: 4 },
              flexShrink: 0,
            }}>
            <Typography variant="h4" fontWeight={600} mb={3}>
              О нас
            </Typography>
            <Typography variant="body1">
              Мы — команда лингвистов, разработчиков и дизайнеров,
              объединившихся ради простой идеи: дать каждому человеку
              инструмент, чтобы свободно говорить на иностранном языке.
            </Typography>
          </Grid>
          <Grid
            sx={{
              width: "100%",
              minWidth: 0,
              overflowX: "auto",
              flexGrow: 1,
            }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                pb: 2,
                scrollSnapType: "x mandatory",
                "& > *": { scrollSnapAlign: "start" },
              }}>
              {features.map((item, idx) => (
                <Paper
                  key={idx}
                  sx={{
                    minWidth: 250,
                    maxWidth: 300,
                    p: 3,
                    borderRadius: 4,
                    textAlign: "center",
                    background: "#D9E0FF",
                    flex: "0 0 auto",
                  }}>
                  <Typography fontSize={40} mb={2}>
                    {item.emoji}
                  </Typography>
                  <Typography fontWeight={600} mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutSection;
