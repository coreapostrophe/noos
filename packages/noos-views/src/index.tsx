import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { RoutedNoos } from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NoosTheme from './shared/theme';

const Noos = () => {
  return (
    <ThemeProvider theme={NoosTheme}>
      <CssBaseline />
      <RoutedNoos />
    </ThemeProvider>
  );
};

export default Noos;
