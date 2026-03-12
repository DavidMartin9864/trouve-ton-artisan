import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <p className="footer-title">Région Auvergne-Rhône-Alpes</p>
          <address>
            101 cours Charlemagne<br />CS 20033<br />69269 LYON CEDEX 02<br />France<br />
            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
          </address>
        </div>
        <div className="col-md-4 mb-4">
          <p className="footer-title">Informations légales</p>
          <ul className="list-unstyled">
            {[['mentions-legales','Mentions légales'],['donnees-personnelles','Données personnelles'],
              ['accessibilite','Accessibilité'],['cookies','Cookies']].map(([slug, label]) => (
              <li key={slug}><Link to={`/${slug}`}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <p className="footer-title">Trouve ton Artisan</p>
          <p>La plateforme officielle des artisans de la région Auvergne-Rhône-Alpes.</p>
        </div>
      </div>
      <hr style={{borderColor:'#444'}} />
      <p className="text-center mb-0">© {new Date().getFullYear()} Région Auvergne-Rhône-Alpes</p>
    </div>
  </footer>
);
export default Footer;