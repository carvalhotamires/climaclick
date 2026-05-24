import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { useFavorites } from "../../context/FavoritesContext";

type Props = {
  city: string;
  temperature: number;
  condition: string;
};

export default function WeatherCard({
  city,
  temperature,
  condition,
}: Props) {
  const { addFavorite } =
    useFavorites();

  function handleFavorite() {
    addFavorite({
      name: city,
      temperature,
      condition,
    });
  }

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        mt: 2,
        backgroundColor: 'var(--code-bg)',
        color: 'var(--text-h)',
        border: '1px solid var(--border)',
      }}
    >
      <CardContent>
        <Typography variant="h5">
          {city}
        </Typography>

        <Typography variant="h3">
          {temperature}°C
        </Typography>

        <Typography>
          {condition}
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleFavorite}
        >
          ⭐ Favoritar
        </Button>
      </CardContent>
    </Card>
  );
}