import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Box,
} from "@mui/material";

export default function Sobre() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        mt: 4,
      }}
    >
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          p: 2,
          backgroundColor: 'var(--code-bg)',
          color: 'var(--text-h)',
          border: '1px solid var(--border)',
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 3,
            }}
          >
            📘 Sobre o Projeto
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            O Clima Click é um dashboard
            de previsão do tempo
            desenvolvido com React,
            TypeScript e Material UI.

            O sistema permite buscar
            cidades, visualizar clima em
            tempo real e salvar cidades
            favoritas.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
            }}
          >
            🚀 Tecnologias Utilizadas
          </Typography>

          <Stack
            direction="row"
            sx={{ 
              flexWrap: "wrap", 
              justifyContent: "center",
              gap: 2
            }}
          >
            <Chip label="React"
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
            <Chip label="TypeScript" 
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
            <Chip label="Material UI" 
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
            <Chip label="React Router DOM" 
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
            <Chip label="Context API" 
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
            <Chip label="Open-Meteo API" 
              sx={{ 
                backgroundColor: 'var(--accent-bg)', 
                color: 'var(--text-h)', 
                border: '1px solid var(--accent-border)' 
              }} />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}