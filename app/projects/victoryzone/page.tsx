import styles from './page.module.scss';
import linkedin from '../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function VictoryZone() {
  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}></div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis velit iste vitae illum! Et, neque perspiciatis!
                Tenetur, cum. In enim laudantium eum dolor modi, impedit
                consequatur ad asperiores culpa praesentium? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Dolorem magnam quia aut?
                Autem laborum dolore, facilis consequuntur optio consequatur
                quia cum asperiores, vero reiciendis repellat recusandae?
                Exercitationem hic itaque natus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus, eveniet magnam aliquid iure totam aut quaerat minima
                officiis aperiam, quisquam maiores? Non facere animi impedit
                excepturi quisquam optio commodi voluptatibus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quia dolore qui itaque
                necessitatibus! Odio quas repudiandae dolorum perspiciatis
                adipisci maxime at. Quam ex rerum deleniti reiciendis voluptatem
                dolores quaerat voluptatum.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome1.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome2.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome3.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome4.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopform.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopadmin.png"
                alt="Photo de profil"
                fill
              />
            </div>
          </div>
          <div className={styles.mobileImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome1.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome2.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome3.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome4.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome5.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobileadmin.png"
                alt="Photo de profil"
                fill
              />
            </div>
          </div>
        </section>

        {/* <section className={styles.imagesSection}>
          <div className={styles.desktopContainer}></div>
          <div className={styles.mobileContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome1.png"
                alt="Photo de profil"
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome2.png"
                alt="Photo de profil"
                fill
              />
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
