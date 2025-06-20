import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";

const StatsSection = () => {
  return (
    <Box py={8}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 4,
        }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 8,
            backgroundColor: "#F5F5F5",
            textAlign: "center",
            minWidth: 120,
            maxWidth: 140,
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}>
          <Stack direction="row" justifyContent="center" spacing={0.5} mb={1}>
            <Avatar sx={{ bgcolor: "#F1B31C", width: 20, height: 20 }} />
            <Avatar sx={{ bgcolor: "#ED2939", width: 20, height: 20 }} />
            <Avatar sx={{ bgcolor: "#7E94F9", width: 20, height: 20 }} />
          </Stack>
          <Typography variant="h6">10k+</Typography>
          <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
            Отзывы пользователей
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            borderRadius: 8,
            backgroundColor: "#F5F5F5",
            textAlign: "center",
            minWidth: 180,
            maxWidth: 220,
            height: 140,
            flex: "0 0 auto",
          }}>
          <Avatar sx={{ bgcolor: "#F1B31C", mx: "auto", mb: 1 }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
            Количество зарегистрированных пользователей
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            100M+
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            borderRadius: 8,
            backgroundColor: "#F5F5F5",
            textAlign: "center",
            minWidth: 180,
            maxWidth: 220,
            height: 140,
            flex: "0 0 auto",
          }}>
          <Avatar sx={{ bgcolor: "#7E94F9", mx: "auto", mb: 1 }}>
            {" "}
            <EditIcon />
          </Avatar>
          <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
            Количество зарегистрированных студентов
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            100k+
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            borderRadius: 8,
            backgroundColor: "#F5F5F5",
            textAlign: "center",
            minWidth: 140,
            maxWidth: 180,
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}>
          <Stack direction="row" justifyContent="center" spacing={0.3} mb={1}>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                fontSize="small"
                sx={{
                  color: "transparent",
                  stroke: "#000000",
                  strokeWidth: 0.7,
                }}
              />
            ))}
          </Stack>
          <Typography variant="h6" fontWeight={700}>
            4.5
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "normal" }}>
            Наш рейтинг
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsSection;
