import { useEffect, useState } from 'react';
import { getArtisansDuMois } from '../services/api';
import ArtisanCard from '../components/ArtisanCard';

const steps = [
  { num: 1, text: "Choisir la catégorie d'artisanat dans le menu." },
  { num: 2, text: 'Choisir un artisan.' },
  { num: 3, text: 'Le contacter via le formulaire de contact.' },
  { num: 4, text: 'Une réponse sera apportée sous 48h.' },
];

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    document.title = 'Trouve ton Artisan | Accueil';
    getArtisansDuMois().then(res => setArtisans(res.data.data)).catch(console.error);
  }, []);

  return (
    <main id="main-content">
      <section className="hero">
        <div className="container">
          <h1>Trouve ton Artisan</h1>
          <p>Découvrez les meilleurs artisans de la région Auvergne-Rhône-Alpes</p>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Comment trouver mon artisan ?</h2>
          <div className="row justify-content-center">
            {steps.map(step => (
              <div className="col-sm-6 col-lg-3" key={step.num}>
                <div className="step-card">
                  <div className="step-number">{step.num}</div>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Les artisans du mois</h2>
          <div className="row g-4">
            {artisans.map(a => (
              <div className="col-sm-6 col-lg-4" key={a.id}>
                <ArtisanCard artisan={a} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;