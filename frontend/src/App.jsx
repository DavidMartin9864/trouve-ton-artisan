import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header        from './components/Header';
import Footer        from './components/Footer';
import Home          from './pages/Home';
import ArtisanList   from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import LegalPage     from './pages/LegalPage';
import NotFound      from './pages/NotFound';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => (
  <BrowserRouter>
    <a href="#main-content" className="visually-hidden-focusable">Aller au contenu principal</a>
    <Header />
    <Routes>
      <Route path="/"                     element={<Home />} />
      <Route path="/artisans"             element={<ArtisanList />} />
      <Route path="/artisan/:id"          element={<ArtisanDetail />} />
      <Route path="/mentions-legales"     element={<LegalPage title="Mentions légales" />} />
      <Route path="/donnees-personnelles" element={<LegalPage title="Données personnelles" />} />
      <Route path="/accessibilite"        element={<LegalPage title="Accessibilité" />} />
      <Route path="/cookies"              element={<LegalPage title="Cookies" />} />
      <Route path="*"                     element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;