import styles from './Skills2.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Skills2() {
  return (
    <section className={styles.skillsSectionContainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.presentationCard}></div>
        <div className={styles.skillsCard}>
          <div className={styles.skillsContentContainer}>
            {/* HTML item ---> */}
            <div className={styles.itemContainer}>
              <div className={styles.test}>
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={40}
                  height={40}
                  alt="Linkedin icon"
                />
              </div>
              <p className={styles.itemName}>html</p>
            </div>
            {/* CSS item ---> */}
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
            {/* NodeJs item ---> */}
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
            {/* React item ---> */}
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
            {/* NextJs item ---> */}
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
            {/* Typescript item ---> */}
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
            {/* SQL item ---> */}
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
            {/* PostgreSQL item ---> */}
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
            {/* GIT item ---> */}
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
            {/* Figma item ---> */}
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
  );
}
