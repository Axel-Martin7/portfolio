import styles from './page.module.scss';
import Image from 'next/image';

export default function Okanban() {
  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}>
            <Image
              src="/images/projects/okanban/okanbandesktop.png"
              alt="Aperçu du projet oKanban"
              fill
            />
          </div>
          <div className={styles.projectInformationsContainer}>
            <div className={styles.titlesContainer}>
              <h1 className={styles.projectName}>O&apos;Kanban</h1>
              <div className={styles.subTitleContainer}>
                <div className={styles.separator}></div>
                <h2 className={styles.subTitle}>Application fullstack</h2>
                <div className={styles.separator}></div>
              </div>
            </div>
            <div className={styles.projectSkills}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Css</p>
              <p className={styles.skills}>JavaScript</p>
              <p className={styles.skills}>Node.js</p>
              <p className={styles.skills}>Express</p>
              <p className={styles.skills}>PostgreSQL</p>
              <p className={styles.skills}>Sequelize</p>
            </div>
            <div className={styles.projectDescription}>
              <p>
                OKANBAN est une application de gestion de projet en ligne qui
                utilise un système de tableau Kanban basé sur le même principe
                que Trello. <br></br>Son fonctionnement repose sur des tableaux
                composés de listes, et chaque liste contient des cartes qui
                représentent des taches ou des éléments à traiter. <br></br> Les
                utilisateurs créent des tableaux pour leurs différents projets
                ou domaine d’activité, puis ils ajoutent des listes
                correspondant aux différentes étapes ou catégories de ces
                projets. <br></br> Ensuite, ils créent des cartes à l’intérieur
                de chaque liste pour représenter des taches, des idées ou des
                objectifs spécifiques. <br></br> Les cartes peuvent être
                déplacées facilement d’une liste à l’autre, ce qui permet de
                suivre leur progression à travers les différentes étapes du
                projet.
              </p>
              <p>
                J’ai développé cette application lors de ma formation chez
                O’Clock. <br></br>J ’ai utilisé Node.js et Express pour la
                création du serveur et la gestion des routes. La base de données
                est mise en place avec postgreSQL, et Sequelize est utilisé
                comme ORM pour faciliter les opérations de base de données.
                <br></br>Lors de la conception de la base de données, j’ai
                réalisé les users-stores, MCD, MLD et dictionnaire des données.
                <br></br>L’application suit une architecture MCV
                (Modèle-Vue-Controleur). Les modèles sont définis pour
                représenter les entités principales de l’application telles que
                les listes, les cartes et les tags avec des associations
                configurées pour gérer les relations entre elles.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <Image
              src="/images/projects/okanban/okanbandesktop.png"
              alt="Aperçu du projet oKanban en version desktop"
              fill
            />
          </div>
          <div className={styles.mobileImageContainer}>
            <Image
              src="/images/projects/okanban/okanbanmobile.png"
              alt="Aperçu du projet oKanban en version mobile"
              fill
            />
          </div>
        </section>
      </div>
    </main>
  );
}
