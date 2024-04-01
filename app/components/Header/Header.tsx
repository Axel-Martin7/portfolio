'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour changer l'état du menu;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Bascule l'état
  };

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.signatureContainer} href={'/'}>
        <p className={styles.signature}>AM</p>
      </Link>

      <button className={styles.menuContainer} onClick={toggleMenu}>
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
      </button>

      <button className={styles.languagesContainer}>
        <p className={styles.language}>FR</p>
      </button>
    </header>
  );
}

// 'use client';

// import { useState } from 'react';
// import styles from './Header.module.scss';
// import Link from 'next/link';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout de l'etat

//   // Fonction pour changer l'état
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // bascule l'état
//   };
//   return (
//     <header className={styles.header}>
//       <Link className={styles.signatureContainer} href={'/'}>
//         <p className={styles.signature}>AM</p>
//       </Link>

//       <button className={styles.menuContainer}>
//         <div className={styles.burgerLinesContainer} onClick={toggleMenu}>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line1Open : ''}`}
//           ></div>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line2Open : ''}`}
//           ></div>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line3Open : ''}`}
//           ></div>
//         </div>
//       </button>

//       <button className={styles.languageContainer}>
//         <p className={styles.languageBtn}>FR</p>
//       </button>
//     </header>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import styles from './Header.module.scss';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Etat pour gérer l'ouverture du menu burger. Imtilialisation de l'etat isMenuOpen à false pour indiquer que le menu burger n'est pas ouvert initialement.

//   // Fonction pour basculer l'etat du menu. Elle inverse la valeur de isMenuOpen en true lors d'un clic. Permet de suivre si le menu est ouvert ou fermé
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <section className={styles.headerContainer}>
//       <div className={styles.signatureContainer}>
//         <a className={styles.signature} href="/">
//           AM
//         </a>
//         {/* <p className={styles.signature2}>AM</p> */}
//       </div>
//       <div className={styles.menuContainer} onClick={toggleMenu}>
//         <div className={styles.burgerLinesContainer}>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line1Open : ''}`}
//           ></div>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line2Open : ''}`}
//           ></div>
//           <div
//             className={`${styles.line} ${isMenuOpen ? styles.line3Open : ''}`}
//           ></div>
//         </div>
//       </div>
//       {/* Menu déroulant qui s'affiche en fonction de l'état isMenuOpen */}
//       <div
//         className={`${styles.dropdownMenu} ${
//           isMenuOpen ? styles.dropdownMenuOpen : ''
//         }`}
//       >
//         <div className={styles.navLinksContainer}>
//           <div className={styles.navItemContainer}>
//             <a href="/">Home</a>
//           </div>
//           <div className={styles.navItemContainer}>
//             <a href="/about">About</a>
//           </div>
//           <div className={styles.navItemContainer}>
//             <a href="/skills">Skills</a>
//           </div>
//           <div className={styles.navItemContainer}>
//             <a href="/projects">Projects</a>
//           </div>
//           <div className={styles.navItemContainer}>
//             <a href="/contact">Contact</a>
//           </div>
//         </div>
//       </div>

//       <div className={styles.optionLanguageContainer}>
//         <div className={styles.buttonLanguageContainer}>
//           <p className={styles.language}>FR</p>
//         </div>
//       </div>
//     </section>
//   );
// }
