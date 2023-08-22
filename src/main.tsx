import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FontStyles } from './assets/fonts/fonts';
import styles from './app.module.css';
import ptBr from './assets/img/ptBr.png';
import en from './assets/img/en.png';
import es from './assets/img/es.png';
import fr from './assets/img/fr.png';
import it from './assets/img/it.png';
import i18n from './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <FontStyles />
    <div className={styles.buttonContainer}>
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('ptBr')}><img src={ptBr} alt="Português" /></button>
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('en')}><img src={en} alt="English" /></button>
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('es')}><img src={es} alt="Espanhõl" /></button>
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('fr')}><img src={fr} alt="Français" /></button>
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('it')}><img src={it} alt="Italiano" /></button>
    </div>
    <App />
  </BrowserRouter>
);
