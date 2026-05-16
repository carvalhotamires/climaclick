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
            spacing={2}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Chip label="React" />
            <Chip label="TypeScript" />
            <Chip label="Material UI" />
            <Chip label="React Router DOM" />
            <Chip label="Context API" />
            <Chip label="Open-Meteo API" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}