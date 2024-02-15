import styles from './Skills.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Skills() {
  return (
    <section className={styles.skillsSectionContainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.presentationCard}>
          <div className={styles.presentationContentContainer}>
            <h2 className={styles.skillsTitle}>My skills</h2>
          </div>
        </div>

        <div className={styles.skillsCard}>
          <div className={styles.skillsContentContainer}>
            {/* HTML item ---> */}
            <div className={styles.itemContainer}>
              <Image
                className={styles.itemIcon}
                src={linkedin}
                width={40}
                height={40}
                alt="Linkedin icon"
              />
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
      {/* <div className={styles.cardsContainer}>
        <div className={styles.presentationCardContainer}>
          <h2 className={styles.title}>My skills</h2>
          <div className={styles.textsContainer}>
            <p className={styles.leftText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod dolores provident officia eius laboriosam esse sapiente
              fugit, nesciunt iure, at possimus. Necessitatibus itaque
              reiciendis consequuntur odit eaque voluptatem ut! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Suscipit quod dolores
              provident officia eius laboriosam esse sapiente fugit, nesciunt
              iure, at possimus. Necessitatibus itaque reiciendis consequuntur
              odit eaque voluptatem ut!
            </p>
            <p className={styles.rightText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              quisquam fuga hic consectetur libero, porro eum ipsum culpa quos
              perferendis incidunt molestias architecto. Odit, nisi optio labore
              sapiente rerum ducimus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit quod dolores provident officia eius
              laboriosam esse sapiente fugit, nesciunt iure, at possimus.
              Necessitatibus itaque reiciendis consequuntur odit eaque
              voluptatem ut!
            </p>
          </div>
        </div>

        <div className={styles.skillsCardContainer}>
          <Image
            className={styles.linkedin}
            src={linkedin}
            width={40}
            height={40}
            alt="Linkedin icon"
          />
        </div>
      </div> */}
    </section>
  );
}
