import { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface LanguageSelectProps {
  label: string;
  storageKey: string;
}

interface LanguageOption {
  label: string;
  code: string;
  emoji: string;
}

const LanguageSelect = ({ label, storageKey }: LanguageSelectProps) => {
  const [languages, setLanguages] = useState<LanguageOption[]>([]);
  const [selectedLang, setSelectedLang] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // или лучше вынести в конфиг?
    fetch("http://localhost:3001/languages")
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch((err) => console.error("Ошибка загрузки языков:", err));
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setSelectedLang(stored);
      return;
    }

    if (storageKey === "speakingLang") {
      const browserLang = navigator.language.slice(0, 2);
      const match = languages.find((lang) => lang.code === browserLang);
      if (match) {
        setSelectedLang(match.code);
        localStorage.setItem(storageKey, match.code);
      }
    }
  }, [storageKey, languages]);

  const handleSelect = (code: string) => {
    setSelectedLang(code);
    localStorage.setItem(storageKey, code);
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h6" mb={1}>
        {label}
      </Typography>
      <Paper
        elevation={1}
        sx={{
          p: 1.5,
          borderRadius: 4,
          backgroundColor: "#D9E0FF",
          maxHeight: 300,
          overflowY: "auto",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.5,
            px: 1,
            py: 0.5,
            borderRadius: 2,
            backgroundColor: "white",
          }}>
          <SearchIcon sx={{ mr: 1, color: "#000000" }} />
          <InputBase
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            sx={{
              fontSize: 14,
            }}
          />
        </Box>
        <List disablePadding>
          {filteredLanguages.map((lang) => (
            <ListItemButton
              key={lang.code}
              selected={selectedLang === lang.code}
              onClick={() => handleSelect(lang.code)}
              sx={{ borderRadius: 2, mb: 0.5 }}>
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center" gap={1}>
                    <span>{lang.emoji}</span>
                    <span>{lang.label}</span>
                  </Box>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default LanguageSelect;
