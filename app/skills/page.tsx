import styles from './page.module.scss';
import linkedin from '../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Skills() {
  return (
    <main>
      <div className={styles.skillsContainer}>
        <section className={styles.skillsCardContainer}>
          <div className={styles.skillsCard}>
            <div className={styles.skillsContentContainer}>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>My Skills</h2>
              </div>
              <div className={styles.skillsGridContainer}>
                {/* HTML --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Html</p>
                </div>
                {/* CSS --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Css</p>
                </div>
                {/* JavaScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>JavaScript</p>
                </div>
                {/* React --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>React</p>
                </div>
                {/* NextJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>NextJs</p>
                </div>
                {/* NodeJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>NodeJs</p>
                </div>

                {/* TypeScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Typescript</p>
                </div>
                {/* SQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>SQL</p>
                </div>
                {/* PostgreSQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>PostgreSQL</p>
                </div>
                {/* GIT --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>GIT</p>
                </div>
                {/* Agile --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Agile</p>
                </div>
                {/* Figma --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formationContainer}>
          <div className={styles.formationPresentationContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>My formation</h2>
            </div>
            <div className={styles.formationPresentationContentContainer}>
              <p>
                J’ai choisi de faire ma reconversion professionnelle à l’école
                O’Clock en suivant la formation Développer Web Fullstack
                JavaScript.
              </p>
              <p>
                Cette formation intensive, d’une durée de 6 mois, proposée sur
                le format téléprésentiel prépare au Titre Professionnel
                Développeur Web et Web Mobile. <br></br>Il s’agit d’un diplôme
                de niveau 5 (nomenclature Europe) correspondant au niveau III et
                inscrit au Répertoire National de la Certification
                Professionnelle (RNCP). <br></br>Le titre Professionnel est une
                certification professionnelle délivrée au nom de l’Etat par le
                ministère chargé de l’emploi.
              </p>
              <p>
                L’objectif de cette formation est de fournir des compétences clé
                aux apprenants, leur permettant d’être directement employables à
                la fin du cursus. Comme par exemple :
              </p>
              <ul className={styles.list}>
                <li>Intégrer des pages web en HTML et CSS</li>
                <li>Développer des fonctionnalités front-end en JavaScript</li>
                <li>Concevoir des interfaces utilisateur</li>
                <li>Concevoir, implémenter et utiliser des bases de données</li>
                <li>
                  Développer une application serveur avec Node.js et Express
                </li>
                <li>
                  Travailler en groupe sur un projet dans des conditions
                  professionnelles.
                </li>
              </ul>
              <p>
                La formation a lieu tous les jours ouvrés de 9 h à 17 h. Après
                les cours, nous devions réaliser au minimum deux heures de
                travaux dirigés sous forme de challenge, mini-projet,
                d’exercices, de tutoriels, de sessions de corrections de bug, de
                veille professionnel, de lecture de documentation techniques etc
                … <br></br>Ces travaux dirigés permettent d’approfondir les
                sujets vus en cours durant la journée, de découvrir de nouvelles
                notions (pédagogie inversée) et d’apprendre à collaborer sur des
                projets en équipe. <br></br> L’évaluation des compétences est
                assurée durant la totalité de la formation grâce à un contrôle
                continu des travaux dirigés, d’évaluations en cours de
                formation, d’entretiens individuels et de conseils de classe
                interne entre chaque saison. Puis lors du contrôle final qui est
                la session de validation du Titre Professionnel.
              </p>
              <p>
                La formation est structurée en 4 phases distinctes : d’abord, le
                socle, suivit par un mois de spécialisation. Ensuite, vient le
                projet d’apothéose et enfin, le dernier mois est consacré à la
                préparation de la soutenance finale
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
