import { Link } from 'react-router-dom';

const NotFound = () => {
  document.title = 'Trouve ton Artisan | Page non trouvée';
  return (
    <main id="main-content" className="not-found">
      <div>
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p className="text-muted">La page que vous avez demandée n'existe pas.</p>
        <Link to="/" className="btn btn-primary btn-lg mt-3">Retour à l'accueil</Link>
      </div>
    </main>
  );
};
export default NotFound;