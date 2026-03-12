import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArtisans } from '../services/api';
import ArtisanCard from '../components/ArtisanCard';

const ArtisanList = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [searchParams]          = useSearchParams();

  useEffect(() => {
    document.title = 'Trouve ton Artisan | Liste des artisans';
    setLoading(true);
    const params = {};
    if (searchParams.get('search'))        params.search        = searchParams.get('search');
    if (searchParams.get('categorie_id'))  params.categorie_id  = searchParams.get('categorie_id');
    if (searchParams.get('specialite_id')) params.specialite_id = searchParams.get('specialite_id');

    getArtisans(params)
      .then(res => setArtisans(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <main id="main-content" className="container py-5">
      <h1 className="fw-bold mb-4">
        {searchParams.get('search') ? `Résultats pour "${searchParams.get('search')}"` : 'Nos artisans'}
      </h1>
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement…</span>
          </div>
        </div>
      ) : artisans.length === 0 ? (
        <p className="text-muted">Aucun artisan trouvé.</p>
      ) : (
        <div className="row g-4">
          {artisans.map(a => (
            <div className="col-sm-6 col-lg-4" key={a.id}>
              <ArtisanCard artisan={a} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
export default ArtisanList;