import Image from 'next/image';
import styles from './Skills.module.scss';
import { poppins } from '@/styles/fonts';

export default function Skills() {
  return (
    <section className={styles.skillsSectionContainer}>
      <div className={styles.leftCardContainer}>
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.textContainer}>
          <p className={styles.leftText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            atque asperiores eveniet sint sapiente et quam nesciunt eum ipsa
            mollitia quas nisi eos? Id optio, consequatur fuga atque nisi rerum.
          </p>
          <p className={styles.rightText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            atque asperiores eveniet sint sapiente et quam nesciunt eum ipsa
            mollitia quas nisi eos? Id optio, consequatur fuga atque nisi rerum.
          </p>
        </div>
      </div>
      <div className={styles.rightCardContainer}>
        <div className={styles.skillsContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            tempora voluptates aliquam debitis corrupti minima repudiandae.
            Blanditiis illum, velit, porro nesciunt magnam natus cupiditate, non
            fuga accusamus voluptas recusandae. Eligendi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illum est rem aliquid aperiam
            mollitia, ratione, eum sunt nam sit quas ipsam quam dignissimos
            neque reiciendis fugiat fuga praesentium tempora eaque.
          </p>
        </div>
      </div>
    </section>
  );
}
