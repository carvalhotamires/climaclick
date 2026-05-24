import React from 'react';

import {
  Container,
  TextField,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Alert,
  Paper,
  InputAdornment,
  Grid
} from '@mui/material';


import {useCitySearch,useWeather} from '../hooks/useWeather';
import WeatherCard from '../components/common/WeatherCard';

import { weatherCodeLabel, weatherCodeIcon } from '../services/api'; 

const Home: React.FC = () => {

  const {
    query,
    setQuery,
    suggestions,
    isSearching,
    error,
  } = useCitySearch();

  const {
    weather,
    city,
    loadWeather,
    isLoading,
  } = useWeather();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, sm: 3 } }}>

      <Typography variant="h3"
        component="h1"
        sx={{ 
          textAlign: 'center', 
          mb: 4, 
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          wordBreak: 'break-word'
        }}
      >
        🌦️ Clima Click
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Digite o nome da cidade..."
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            sx={{
              '& .MuiInputBase-input': {
                color: 'var(--text-h)', 
              },
              
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                '& fieldset': {
                  borderColor: 'var(--border)', 
                },
                '&:hover fieldset': {
                  borderColor: 'var(--text)', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--accent)',
                  borderWidth: 2, 
                },
              },
              
              '& .MuiInputLabel-root': {
                color: 'var(--text)', 
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--accent)',
              },
            }}
            slotProps={{
              input: {
                endAdornment: isSearching && (
                  <InputAdornment position="end">
                    <CircularProgress size={20} sx={{ color: 'var(--accent)' }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          {isSearching && (
            <Typography sx={{ mt: 1 }}>Buscando cidades...</Typography>
          )}

          {error && (
            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
              Cidade não encontrada. Tente novamente!
          </Alert>
      )}

          {suggestions.length > 0 && (
            <Paper elevation={3} sx={{ mt: 1, maxHeight: 250, overflow: 'auto', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', }}>
              <List>
                {suggestions.map((cidade) => (
                  <ListItem key={cidade.id} disablePadding>
                    <ListItemButton onClick={() => loadWeather(cidade)}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'var(--accent-bg)',
                        }
                      }}>
                      <ListItemText 
                        disableTypography 
                        
                        primary={
                          <div style={{ color: 'var(--text-h)', fontSize: '1rem' }}>
                            {`${cidade.name}, ${cidade.admin1 || ''}`}
                          </div>
                        }
                        secondary={
                          <div style={{ color: 'var(--text)', fontSize: '0.875rem', marginTop: '4px' }}>
                            {cidade.country}
                          </div>
                        } 
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
              <CircularProgress />
              <Typography sx={{ mt: 2 }}>Carregando clima...</Typography>
            </Box>
          ) : (
            weather && city && (
              <Box sx={{ mt: { xs: 2, md: 2 }, width: '100%' }}>
                <WeatherCard
                  city={city.name}
                  temperature={Math.round(weather.current.temperature_2m)}
                  condition={`${weatherCodeIcon(weather.current.weather_code, !!weather.current.is_day)} ${weatherCodeLabel(weather.current.weather_code)}`}
                />
              </Box>
            )
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;