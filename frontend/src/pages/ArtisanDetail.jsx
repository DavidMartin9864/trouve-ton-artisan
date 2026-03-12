import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArtisanById, sendContact } from '../services/api';
import StarRating from '../components/StarRating';

const ArtisanDetail = () => {
  const { id }   = useParams();
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm]       = useState({ nom:'', email:'', objet:'', message:'' });
  const [status, setStatus]   = useState(null);

  useEffect(() => {
    getArtisanById(id)
      .then(res => {
        setArtisan(res.data.data);
        document.title = `Trouve ton Artisan | ${res.data.data.nom}`;
      })
      .catch(() => navigate('/404'))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContact(id, form);
      setStatus('success');
      setForm({ nom:'', email:'', objet:'', message:'' });
    } catch { setStatus('error'); }
  };

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement…</span>
      </div>
    </div>
  );
  if (!artisan) return null;

  return (
    <main id="main-content" className="container py-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>← Retour</button>
      <div className="row g-5">
        <div className="col-md-5">
          <img src={artisan.photo || 'https://placehold.co/400x300?text=Artisan'} alt={artisan.nom}
            className="img-fluid rounded-3 shadow mb-3"
            style={{width:'100%', maxHeight:'300px', objectFit:'cover'}} />
          <h1 className="fw-bold">{artisan.nom}</h1>
          <StarRating note={parseFloat(artisan.note)} />
          <p className="mt-2">
            <span className="badge bg-primary">{artisan.specialite?.nom}</span>{' '}
            <span className="badge bg-secondary">{artisan.specialite?.categorie?.nom}</span>
          </p>
          <p>📍 {artisan.localisation}</p>
          {artisan.site_web && (
            <a href={artisan.site_web} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-primary">
              🌐 Visiter le site web
            </a>
          )}
          {artisan.a_propos && (
            <div className="mt-4">
              <h2 className="h5 fw-bold">À propos</h2>
              <p>{artisan.a_propos}</p>
            </div>
          )}
        </div>

        <div className="col-md-7">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="h5 fw-bold mb-3">Contacter {artisan.nom}</h2>
            {status === 'success' && <div className="alert alert-success">✅ Message envoyé ! Réponse sous 48h.</div>}
            {status === 'error'   && <div className="alert alert-danger">❌ Erreur lors de l'envoi.</div>}
            <form onSubmit={handleSubmit} noValidate>
              {[['nom','Votre nom','text'],['email','Votre email','email'],['objet','Objet','text']].map(([name,label,type]) => (
                <div className="mb-3" key={name}>
                  <label htmlFor={name} className="form-label fw-semibold">{label} *</label>
                  <input type={type} id={name} name={name} className="form-control"
                    value={form[name]} onChange={handleChange} required />
                </div>
              ))}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message *</label>
                <textarea id="message" name="message" className="form-control" rows={5}
                  value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ArtisanDetail;