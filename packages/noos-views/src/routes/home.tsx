import { LightModeRounded } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  useColorScheme,
  useMediaQuery,
} from '@mui/material';
import { useCallback } from 'react';

export const Home = () => {
  const { mode, setMode } = useColorScheme();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const toggleMode = useCallback(() => {
    switch (mode) {
      case 'dark':
        setMode('light');
        break;
      case 'light':
        setMode('dark');
        break;
      case 'system':
        setMode(prefersDarkMode ? 'light' : 'dark');
        break;
      default:
        setMode('system');
        break;
    }
  }, [mode, prefersDarkMode]);

  return (
    <Stack direction="row" sx={{ height: '100%' }}>
      <Paper sx={{ width: '25rem', p: 2 }}>Test</Paper>
      <Box sx={{ p: 2 }} flex="auto">
        <Stack justifyContent="flex-end" direction="row">
          <IconButton onClick={toggleMode}>
            <LightModeRounded />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
};
