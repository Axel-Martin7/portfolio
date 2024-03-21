import styles from './page.module.scss';
import Image from 'next/image';

export default function VictoryZone() {
  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}>
            <Image
              src="/images/projects/victoryzone/desktophome2.png"
              alt="Image du projet VictoryZone"
              fill
            />
          </div>
          <div className={styles.projectInformationsContainer}>
            <div className={styles.titlesContainer}>
              <h1 className={styles.projectName}>Victory Zone</h1>
              <div className={styles.subTitleContainer}>
                <div className={styles.separator}></div>
                <h2 className={styles.subTitle}>Projet fin d&apos;études</h2>
                <div className={styles.separator}></div>
              </div>
            </div>
            <div className={styles.projectSkills}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>NextJs</p>
              <p className={styles.skills}>TypeScript</p>
              <p className={styles.skills}>Git</p>
              <p className={styles.skills}>Agile</p>
            </div>
            <div className={styles.projectDescription}>
              <p>
                À l’ère du numérique en perpétuelle évolution, de nouvelles
                opportunités professionnelles se dessinent, ouvrant la voie à
                des carrières passionnantes et innovantes. <br></br>Une
                entreprise fictive spécialisée dans le recrutement et la
                reconversion professionnelle dans le domaine du numérique s’est
                lancée dans le projet de créer et gérer sa propre équipe
                e-sports professionnelle en offrant aux passionnés du gaming
                compétitif une chance unique de transformer leur passion en une
                carrière lucrative et enrichissante. <br></br>En réponse à ce
                besoin, nous avons mis en place une application pour représenter
                cette équipe e-sport : la VictoryZone !
              </p>
              <p>
                Cette application vise à promouvoir l&apos;équipe en offrant une
                présentation complète et attractive. <br></br> Les visiteurs
                peuvent suivre de près les activités de l&apos;équipe à travers
                des actualités régulières sous forme d&apos;articles, de
                présentation détaillées des membres, des résultats de match et
                d&apos;événements à venir. <br></br>De plus, les nouveaux
                talents passionnés d&apos;e-sport ont la possibilité de postuler
                pour rejoindre l&apos;équipe via un formulaire de recrutement.{' '}
                <br></br> Un espace administrateur est disponible pour gérer les
                données du site, comme l&apos;ajout, la modification ou la
                suppression du contenu du site. <br></br>En combinant ces
                objectifs, l&apos;application aspire à renforcer la visibilité
                et la compétitivité de l&apos;équipe tout en contribuant au
                développement et à l&apos;essor de la scène e-sport en
                accueillant et en formant de nouveaux talents prometteurs.
              </p>
              <p>
                Cette application a été réalisée dans le cadre de projet de fin
                d’études de ma formation chez O’Clock en vue du passage du Titre
                Professionnel. <br></br> Le sujet nous a été donné et nous
                avions une deadline d’ 1 mois pour réaliser le MVP complet de
                cette application. <br></br>Nous étions répartis dans un groupe
                de 5 développeurs : 3 back-end et 2 front-end dont je faisais
                partie. <br></br>
                J’avais les rôles de Lead developper front-end et référent
                front-end. <br></br>Nous nous sommes inspirés du cadre de
                développement SCRUM, basé sur les principes agiles pour mener à
                bien notre projet. <br></br>Le développement devait être
                structuré sous forme de sprints d’une durée d’une semaine chacun
                :
              </p>
              <div className={styles.sprintsLists}>
                <ul>
                  <span>
                    Sprint 0: réalisation du cahier des charges et mise en place
                    du projet :
                  </span>
                  <li>
                    Identification des fonctionnalités à intégrer pour obtenir
                    un MVP fiable, ainsi que ses évolutions potentielles
                  </li>
                  <li>
                    Liste des technologies à utiliser pour les repos front-end
                    et back-end
                  </li>
                  <li>Création des User Stories</li>
                  <li>Établissement de l’arborescence du projet</li>
                  <li>Création du MCD et d’un dictionnaire des données</li>
                  <li>
                    Identification des routes à mettre en place coté front-end
                    et back-end
                  </li>
                  <li>
                    Création des Wireframes pour toutes les pages du projet
                  </li>
                </ul>
                <ul>
                  <span>Sprint 1: Début du développement :</span>
                  <li>Mise en place des repos</li>
                  <li>Répartitions en deux équipes</li>
                  <li>Début de la mise en place du projet</li>
                  <li>
                    Implémentation des fonctionnalités définie pour le MVP
                  </li>
                </ul>
                <ul>
                  <span>Sprint 2: Suite du développement :</span>
                  <li>Amélioration des fonctionnalités existantes</li>
                  <li>Ajout de nouvelles fonctionnalités</li>
                  <li>Correction des bugs</li>
                </ul>
                <ul>
                  <span>Sprint 3: Finalisation :</span>
                  <li>Plus d’ajout de nouvelles fonctionnalités</li>
                  <li>Finalisation des fonctionnalités existantes</li>
                  <li>Vérification du bon fonctionnement de tout le système</li>
                  <li>Travail sur le style et le design</li>
                  <li>Préparation à la présentation finale</li>
                </ul>
              </div>
              {/* <div className={styles.sprintTexts}>
                <p>
                  Nous avions une deadline d’1 mois pour réaliser le MVP complet
                  de cette application. Nous étions répartis dans un groupe de 5
                  développeurs : 3 dev back-end et 2 dev front-end dont je
                  faisais partie. J’avais le rôle de Lead dev front-end et
                  référent front-end. Nous nous sommes inspirés du cadre de
                  développement Scrum, basé sur les principes agiles pour mener
                  à bien notre projet. Le développement devait être structuré
                  sous forme de sprints d’une durée d’une semaine chacun :
                </p>
                <ul>
                  <span>
                    Sprint 0: réalisation du cahier des charges et mise en place
                    du projet :
                  </span>
                  <li>
                    Identification des fonctionnalités à intégrer pour obtenir
                    un MVP fiable, ainsi que ses évolutions potentielles
                  </li>
                  <li>
                    Liste des technologies à utiliser pour les repos front-end
                    et back-end
                  </li>
                  <li>Création des User Stories</li>
                  <li>Établissement de l’arborescence du projet</li>
                  <li>Création du MCD et d’un dictionnaire des données</li>
                  <li>
                    Identification des routes à mettre en place coté front-end
                    et back-end
                  </li>
                  <li>
                    Création des Wireframes pour toutes les pages du projet
                  </li>
                </ul>
                <ul>
                  <span>Sprint 1: Début du développement :</span>
                  <li>Mise en place des repos</li>
                  <li>Répartitions en deux équipes</li>
                  <li>Début de la mise en place du projet</li>
                  <li>
                    Implémentation des fonctionnalités définie pour le MVP
                  </li>
                </ul>
                <ul>
                  <span>Sprint 2: Suite du développement :</span>
                  <li>Amélioration des fonctionnalités existantes</li>
                  <li>Ajout de nouvelles fonctionnalités</li>
                  <li>Correction des bugs</li>
                </ul>
                <ul>
                  <span>Sprint 3: Finalisation :</span>
                  <li>Plus d’ajout de nouvelles fonctionnalités</li>
                  <li>Finalisation des fonctionnalités existantes</li>
                  <li>Vérification du bon fonctionnement de tout le système</li>
                  <li>Travail sur le style et le design</li>
                  <li>Préparation à la présentation finale</li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome1.png"
                alt="Image section présentation du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome2.png"
                alt="Image section team du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome3.png"
                alt="Image section calendrier du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome4.png"
                alt="Image section articles du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopform.png"
                alt="Image page formulaire de recrutement du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopadmin.png"
                alt="Image page administrateur du project VictoryZone version desktop"
                fill
              />
            </div>
          </div>
          <div className={styles.mobileImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome1.png"
                alt="Image section présentation du project VictoryZone version mobile"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome2.png"
                alt="Image section team du project VictoryZone version mobile"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome3.png"
                alt="Image section calendrier du project VictoryZone version mobile"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome4.png"
                alt="Image section articles du project VictoryZone version desktop"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome5.png"
                alt="Image footer du project VictoryZone version mobile"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobileadmin.png"
                alt="Image page administrateur du project VictoryZone version mobile"
                fill
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
