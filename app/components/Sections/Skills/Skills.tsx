import { useTranslations } from 'next-intl';
import styles from './Skills.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Skills() {
  const t = useTranslations('SkillsComponent');

  return (
    <section className={styles.skillsSectionContainer}>
      <div className={styles.sectionHeaderContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Skills & Formation</h2>
          <div className={styles.titleSeparator}></div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.skillsCard}>
          <div className={styles.skillsContentContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('skillsTitle')}</h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.skillsGridContainer}>
              {/* HTML --> */}
              <div className={styles.itemContainer}>
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={40}
                  height={40}
                  alt={t('htmlIconAlt')}
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
                  alt={t('cssIconAlt')}
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
                  alt={t('javascriptIconAlt')}
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
                  alt={t('reactIconAlt')}
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
                  alt={t('nextIconAlt')}
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
                  alt={t('nodeIconAlt')}
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
                  alt={t('typescriptIconAlt')}
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
                  alt={t('sqlIconAlt')}
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
                  alt={t('postgresqlIconAlt')}
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
                  alt={t('gitIconAlt')}
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
                  alt={t('agileIconAlt')}
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
                  alt={t('figmaIconAlt')}
                />
                <p className={styles.itemName}>Figma</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formationCard}>
          <div className={styles.formationContentContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('formationTitle')}</h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.textsContainer}>
              <p className={styles.firstText}>
                {t('formationDescriptionPart1')}
              </p>
              <p className={styles.secondText}>
                {t('formationDescriptionPart2')}
              </p>
            </div>
            <Link className={styles.buttonContainer} href="/skills">
              <button className={styles.skillsBtn}>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
