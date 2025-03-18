import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { RoutedNoos } from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NoosTheme from './config/theme';
import { FC } from 'react';
import { FunctionsMap, FunctionsProvider } from './config/functions';

export interface NoosProps {
  functions: FunctionsMap;
}

const Noos: FC<NoosProps> = ({ functions }) => {
  return (
    <ThemeProvider theme={NoosTheme}>
      <FunctionsProvider value={functions}>
        <CssBaseline />
        <RoutedNoos />
      </FunctionsProvider>
    </ThemeProvider>
  );
};

export default Noos;
