'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Etat pour gérer l'ouverture du menu burger. Imtilialisation de l'etat isMenuOpen à false pour indiquer que le menu burger n'est pas ouvert initialement.

  // Fonction pour basculer l'etat du menu. Elle inverse la valeur de isMenuOpen en true lors d'un clic. Permet de suivre si le menu est ouvert ou fermé
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.headerContainer}>
      <div className={styles.signatureContainer}></div>
      <div className={styles.menuContainer} onClick={toggleMenu}>
        <div className={styles.burgerLinesContainer}>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line1Open : ''}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line2Open : ''}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line3Open : ''}`}
          ></div>
        </div>
      </div>
      {/* Menu déroulant qui s'affiche en fonction de l'état isMenuOpen */}
      <div
        className={`${styles.dropdownMenu} ${
          isMenuOpen ? styles.dropdownMenuOpen : ''
        }`}
      >
        <p> Coucou</p>
      </div>

      <div className={styles.optionLanguageContainer}>
        <div className={styles.buttonLanguageContainer}>
          <p className={styles.language}>FR</p>
        </div>
      </div>
    </section>
  );
}

// import styles from './Header.module.scss';

// const Header = () => {
//   return (
//     <header className={styles.headerContainer}>
//       <div className={styles.signatureContainer}>
//         <p className={styles.signature}>AM</p>
//         <p className={styles.portfolio}>portfolio</p>
//       </div>
//       <div className={styles.menuContainer}>
//         <div className={styles.burgerLinesContainer}>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//         </div>
//       </div>
//       <div className={styles.optionLanguageContainer}>
//         <div className={styles.languageButtonContainer}>
//           <p className={styles.language}>FR</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
