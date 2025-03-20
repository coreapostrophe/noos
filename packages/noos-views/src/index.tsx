import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { RoutedNoos } from './routes';
import { FC, useEffect } from 'react';
import { FunctionsMap, FunctionsProvider } from './config/functions';
import { useAtom } from 'jotai';
import { Save, saveAtom } from './models/save';

export interface NoosProps {
  functions: FunctionsMap;
  save: Save;
}

const Noos: FC<NoosProps> = ({ functions, save }) => {
  const [, setAtom] = useAtom(saveAtom);

  useEffect(() => {
    setAtom(save);
  }, [save]);

  return (
    <FunctionsProvider value={functions}>
      <RoutedNoos />
    </FunctionsProvider>
  );
};

export default Noos;
