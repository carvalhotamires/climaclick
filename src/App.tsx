import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

import Home from './pages/home';
import Sobre from './pages/Sobre';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;