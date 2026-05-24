import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { useFavorites } from "../context/FavoritesContext";

export default function Favoritos() {
  const {
    favorites,
    removeFavorite,
  } = useFavorites();

  return (
    <div>
      <h1>⭐ Cidades Favoritas</h1>

      <Stack spacing={2}>
        {favorites.map((city) => (
          <Card
            key={city.name}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: 'var(--code-bg)',
              color: 'var(--text-h)',
              border: '1px solid var(--border)',
            }}
          >
            <CardContent>
              <Typography variant="h5">
                {city.name}
              </Typography>

              <Typography variant="h3">
                {city.temperature}°C
              </Typography>

              <Typography>
                {city.condition}
              </Typography>

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 2 }}
                onClick={() =>
                  removeFavorite(city.name)
                }
              >
                Remover
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}