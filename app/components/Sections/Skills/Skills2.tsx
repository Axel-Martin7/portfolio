import styles from './Skills2.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Skills2() {
  return (
    <section className={styles.skillsSectionContainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.formationCard}>
          <div className={styles.formationContentContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>My formation</h2>
            </div>
            <div className={styles.textsContainer}>
              <p className={styles.firstText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                exercitationem, animi ipsa illo, quidem quos veritatis nesciunt
                dolore excepturi dignissimos fuga tenetur aut quasi dolorem hic
                quibusdam repellendus vitae eum.
              </p>
              <p className={styles.secondText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                exercitationem, animi ipsa illo, quidem quos veritatis nesciunt
                dolore excepturi dignissimos fuga tenetur aut quasi dolorem hic
                quibusdam repellendus vitae eum.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.skillsBtn}>Learn More</button>
            </div>
          </div>
        </div>
        <div className={styles.skillsCard}>
          <div className={styles.skillsContentContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>My skills</h2>
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
      </div>
    </section>
  );
}
