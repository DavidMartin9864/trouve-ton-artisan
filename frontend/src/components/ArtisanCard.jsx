import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const ArtisanCard = ({ artisan }) => {
  const navigate = useNavigate();
  return (
    <div
      className="artisan-card card"
      onClick={() => navigate(`/artisan/${artisan.id}`)}
      role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/artisan/${artisan.id}`)}
      aria-label={`Voir la fiche de ${artisan.nom}`}
    >
      <img
        src={artisan.photo || 'https://placehold.co/400x180?text=Artisan'}
        alt={artisan.nom}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title h6 fw-bold">{artisan.nom}</h3>
        <p className="mb-1"><span className="badge-specialite">{artisan.specialite?.nom}</span></p>
        <StarRating note={parseFloat(artisan.note)} />
        <p className="text-muted mt-2 mb-0"><small>📍 {artisan.localisation}</small></p>
      </div>
    </div>
  );
};
export default ArtisanCard;