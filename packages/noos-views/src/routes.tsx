import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './routes/home';

export const RoutedNoos = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
