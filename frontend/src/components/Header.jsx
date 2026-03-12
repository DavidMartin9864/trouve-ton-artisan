import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch]         = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(res => setCategories(res.data.data)).catch(console.error);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/artisans?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg container">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">🔨 Trouve ton Artisan</Link>
        <button className="navbar-toggler border-white" type="button"
          data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir le menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map(cat => (
              <li className="nav-item" key={cat.id}>
                <Link className="nav-link" to={`/artisans?categorie_id=${cat.id}`}>{cat.nom}</Link>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSearch} className="d-flex gap-2" role="search">
            <input type="search" className="search-input form-control"
              placeholder="Rechercher un artisan…"
              value={search} onChange={e => setSearch(e.target.value)}
              aria-label="Nom de l'artisan" />
            <button type="submit" className="btn btn-danger">Rechercher</button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;