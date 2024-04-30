import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import Image from 'next/image';

import html from '@/public/icons/html5.svg';
import css from '@/public/icons/css3.svg';
import javascript from '@/public/icons/javascript.svg';
import react from '@/public/icons/react.svg';
import nextjs from '@/public/icons/nextjs.svg';
import nodejs from '@/public/icons/nodejs.svg';
import typescript from '@/public/icons/typescript.svg';
import sql from '@/public/icons/sql.svg';
import postgresql from '@/public/icons/postgresql.svg';
import git from '@/public/icons/git.svg';
import agile from '@/public/icons/agile.svg';
import figma from '@/public/icons/figma.svg';

export default function Skills() {
  const t = useTranslations('page-skills');
  return (
    <main>
      <div className={styles.skillsPageContainer}>
        <section className={styles.skillsSection}>
          <div className={styles.skillsCard}>
            <div className={styles.skillsContentContainer}>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>{t('skills-title')}</h2>
              </div>
              <div className={styles.skillsGridContainer}>
                {/* HTML --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={html}
                    width={40}
                    height={40}
                    alt={t('skills-html-alt')}
                  />
                  <p className={styles.itemName}>Html</p>
                </div>
                {/* CSS --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={css}
                    width={40}
                    height={40}
                    alt={t('skills-css-alt')}
                  />
                  <p className={styles.itemName}>Css</p>
                </div>
                {/* JavaScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={javascript}
                    width={40}
                    height={40}
                    alt={t('skills-js-alt')}
                  />
                  <p className={styles.itemName}>JavaScript</p>
                </div>
                {/* React --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={react}
                    width={40}
                    height={40}
                    alt={t('skills-react-alt')}
                  />
                  <p className={styles.itemName}>React</p>
                </div>
                {/* NextJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={nextjs}
                    width={40}
                    height={40}
                    alt={t('skills-next-alt')}
                  />
                  <p className={styles.itemName}>NextJs</p>
                </div>
                {/* NodeJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={nodejs}
                    width={40}
                    height={40}
                    alt={t('skills-node-alt')}
                  />
                  <p className={styles.itemName}>NodeJs</p>
                </div>
                {/* TypeScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={typescript}
                    width={40}
                    height={40}
                    alt={t('skills-typescript-alt')}
                  />
                  <p className={styles.itemName}>Typescript</p>
                </div>
                {/* SQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={sql}
                    width={40}
                    height={40}
                    alt={t('skills-sql-alt')}
                  />
                  <p className={styles.itemName}>SQL</p>
                </div>
                {/* PostgreSQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={postgresql}
                    width={40}
                    height={40}
                    alt={t('skills-pg-alt')}
                  />
                  <p className={styles.itemName}>PostgreSQL</p>
                </div>
                {/* GIT --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={git}
                    width={40}
                    height={40}
                    alt={t('skills-git-alt')}
                  />
                  <p className={styles.itemName}>GIT</p>
                </div>
                {/* Agile --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={agile}
                    width={40}
                    height={40}
                    alt={t('skills-agile-alt')}
                  />
                  <p className={styles.itemName}>Agile</p>
                </div>
                {/* Figma --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={figma}
                    width={40}
                    height={40}
                    alt={t('skills-figma-alt')}
                  />
                  <p className={styles.itemName}>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formationSection}>
          <div className={styles.formationContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('formation-title')}</h2>
            </div>

            <div className={styles.presentationContainer}>
              <div className={styles.presentationContentContainer}>
                <p>{t('formation-part1-line1')}</p>
                <p>
                  {t('formation-part2-line1')} <br></br>
                  {t('formation-part2-line2')} <br></br>
                  {t('formation-part2-line3')}
                </p>
                <p>{t('formation-part3-line1')}</p>
                <ul className={styles.list}>
                  <li>{t('formation-li-line1')}</li>
                  <li>{t('formation-li-line2')}</li>
                  <li>{t('formation-li-line3')}</li>
                  <li>{t('formation-li-line4')}</li>
                  <li>{t('formation-li-line5')}</li>
                  <li>{t('formation-li-line6')}</li>
                </ul>
                <p>
                  {t('formation-part4-line1')} <br></br>
                  {t('formation-part4-line2')}
                  <br></br> {t('formation-part4-line3')} <br></br>
                  {t('formation-part4-line4')} <br></br>
                  {t('formation-part4-line5')}
                </p>
                <p>{t('formation-part5-line1')}</p>
              </div>
            </div>

            <div className={styles.socleContainer}>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>Le Socle</h3>
                <div className={styles.titleSeparator}></div>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  {t('socle-part1-line1')}
                  <br></br>
                  {t('socle-part1-line2')} <br></br>
                  {t('socle-part1-line3')} <br></br>
                  {t('socle-part1-line4')}
                </p>
                <div className={styles.moduleLists}>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li1-title')}</h4>
                    <li>{t('socle-li1-line1')}</li>
                    <li>HTML & CSS</li>
                    <li>{t('socle-li1-line3')}</li>
                    <li>{t('socle-li1-line4')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module: Interactions :</h4>
                    <li>{t('socle-li2-line1')}</li>
                    <li>{t('socle-li2-line2')}</li>
                    <li>{t('socle-li2-line3')}</li>
                    <li>{t('socle-li2-line4')}</li>
                    <li>{t('socle-li2-line5')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li3-title')}</h4>
                    <li>Node.js</li>
                    <li>{t('socle-li3-line2')}</li>
                    <li>{t('socle-li3-line3')}</li>
                    <li>{t('socle-li3-line4')}</li>
                    <li>GET & POST</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li4-title')}</h4>
                    <li>{t('socle-li4-line1')}</li>
                    <li>{t('socle-li4-line2')}</li>
                    <li>Cookies & Sessions</li>
                    <li>{t('socle-li4-line4')}</li>
                    <li>{t('socle-li4-line5')}</li>
                    <li>{t('socle-li4-line6')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li5-title')}</h4>
                    <li>{t('socle-li5-line1')}</li>
                    <li>{t('socle-li5-line2')}</li>
                    <li>ORM</li>
                    <li>{t('socle-li5-line4')}</li>
                    <li>{t('socle-li5-line5')}</li>
                    <li>Promises, async/await</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module: API :</h4>
                    <li>Workflow front+back</li>
                    <li>AJAX + fetch</li>
                    <li>{t('socle-li6-line3')}</li>
                    <li>{t('socle-li6-line4')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li7-title')}</h4>
                    <li>Workflow front+back</li>
                    <li>AJAX + fetch</li>
                    <li>{t('socle-li7-line3')}</li>
                    <li>{t('socle-li7-line4')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('socle-li8-title')}</h4>
                    <li>{t('socle-li8-line1')}</li>
                    <li>{t('socle-li8-line2')}</li>
                    <li>{t('socle-li8-line3')}</li>
                    <li>{t('socle-li8-line4')}</li>
                    <li>{t('socle-li8-line5')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.specialisationContainer}>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>{t('specialization-title')}</h3>
                <div className={styles.titleSeparator}></div>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  {t('specialization-part1-line1')}
                  <br></br>
                  {t('specialization-part1-line2')}
                  <br></br>
                  {t('specialization-part1-line3')}
                  <br></br>
                  {t('specialization-part1-line4')}
                </p>
                <div className={styles.moduleLists}>
                  <ul>
                    <h4 className={styles.listTitle}>
                      {t('specialization-li1-title')}
                    </h4>
                    <li>{t('specialization-li1-line1')}</li>
                    <li>{t('specialization-li1-line2')}</li>
                    <li>{t('specialization-li1-line3')}</li>
                    <li>SASS</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>
                      {t('specialization-li2-title')}
                    </h4>
                    <li>{t('specialization-li2-line1')}</li>
                    <li>{t('specialization-li2-line2')}</li>
                    <li>{t('specialization-li2-line3')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module: React :</h4>
                    <li>Installation</li>
                    <li>{t('specialization-li3-line2')}</li>
                    <li>{t('specialization-li3-line3')}</li>
                    <li>Hooks</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module: React avancé :</h4>
                    <li>Redux & React-Redux</li>
                    <li>Router</li>
                    <li>TypeScript</li>
                    <li>NextJs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.apotheoseContainer}>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>Apothéose</h3>
                <div className={styles.titleSeparator}></div>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  {t('apotheose-part1-line1')} <br></br>
                  {t('apotheose-part1-line2')} <br></br>
                  {t('apotheose-part1-line3')} <br></br>
                  {t('apotheose-part1-line4')}
                </p>
                <p>
                  {t('apotheose-part2-line1')} <br></br>
                  {t('apotheose-part2-line2')}
                </p>
                <p>
                  {t('apotheose-part3-line1')} <br></br>
                  {t('apotheose-part3-line2')}
                </p>
                <div className={styles.moduleLists}>
                  <ul className={styles.list}>
                    <h4 className={styles.listTitle}>
                      {t('apotheose-li1-title')}
                    </h4>
                    <li>{t('apotheose-li1-line1')}</li>
                    <li>{t('apotheose-li1-line2')}</li>
                    <li>{t('apotheose-li1-line3')}</li>
                    <li>{t('apotheose-li1-line4')}</li>
                    <li>{t('apotheose-li1-line5')}</li>
                    <li>{t('apotheose-li1-line6')}</li>
                    <li>{t('apotheose-li1-line7')}</li>
                    <li>{t('apotheose-li1-line8')}</li>
                  </ul>
                  <ul className={styles.list}>
                    <h4 className={styles.listTitle}>
                      {t('apotheose-li2-title')}
                    </h4>
                    <li>{t('apotheose-li2-line1')}</li>
                    <li>{t('apotheose-li2-line2')}</li>
                    <li>{t('apotheose-li2-line3')}</li>
                    <li>{t('apotheose-li2-line4')}</li>
                  </ul>
                  <ul className={styles.list}>
                    <h4 className={styles.listTitle}>
                      {t('apotheose-li3-title')}
                    </h4>
                    <li>{t('apotheose-li3-line1')}</li>
                    <li>{t('apotheose-li3-line2')}</li>
                    <li>{t('apotheose-li3-line3')}</li>
                  </ul>
                  <ul className={styles.list}>
                    <h4 className={styles.listTitle}>
                      {t('apotheose-li4-title')}
                    </h4>
                    <li>{t('apotheose-li4-line1')}</li>
                    <li>{t('apotheose-li4-line2')}</li>
                    <li>{t('apotheose-li4-line3')}</li>
                    <li>{t('apotheose-li4-line4')}</li>
                    <li>{t('apotheose-li4-line5')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.titreProContainer}>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}> {t('tpro-title')}</h3>
                <div className={styles.titleSeparator}></div>
              </div>
              <div className={styles.contentContainer}>
                <p>
                  {t('tpro-part1-line1')} <br></br>
                  {t('tpro-part1-line2')}
                </p>
                <p>
                  {t('tpro-part2-line1')} <br></br>
                  {t('tpro-part2-line2')} <br></br>
                  {t('tpro-part2-line3')}
                </p>
                <div className={styles.moduleLists}>
                  <ul>
                    <h4 className={styles.listTitle}>{t('tpro-li1-title')}</h4>
                    <li>{t('tpro-li1-line1')}</li>
                    <li>{t('tpro-li1-line2')}</li>
                    <li>{t('tpro-li1-line3')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>{t('tpro-li2-title')}</h4>
                    <li>{t('tpro-li2-line1')}</li>
                    <li>{t('tpro-li2-line2')}</li>
                    <li>{t('tpro-li2-line3')}</li>
                  </ul>
                </div>
                <div className={styles.moduleLists}>
                  <p>{t('tpro-part3-line1')}</p>
                  <ul>
                    <li>{t('tpro-li3-line1')}</li>
                    <li>{t('tpro-li3-line2')}</li>
                    <li> {t('tpro-li3-line3')}</li>
                    <li>{t('tpro-li3-line4')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.secondSpecialisationContainer}>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>{t('2ndspecialisation-title')}</h3>
                <div className={styles.titleSeparator}></div>
              </div>
              <div className={styles.contentContainer}>
                <p>{t('2ndspecialisation-part1-line1')}</p>
                <div className={styles.moduleLists}>
                  <ul>
                    <h4 className={styles.listTitle}>Module : SQL :</h4>
                    <li>{t('2ndspecialisation-li1-line1')}</li>
                    <li>{t('2ndspecialisation-li1-line2')}</li>
                    <li>{t('2ndspecialisation-li1-line3')}</li>
                    <li>{t('2ndspecialisation-li1-line4')}</li>
                    <li>{t('2ndspecialisation-li1-line5')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module : API DATA :</h4>
                    <li>{t('2ndspecialisation-li2-line1')}</li>
                    <li>{t('2ndspecialisation-li2-line2')}</li>
                    <li>{t('2ndspecialisation-li2-line3')}</li>
                    <li>{t('2ndspecialisation-li2-line4')} </li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module : NoSql :</h4>
                    <li>{t('2ndspecialisation-li3-line1')}</li>
                    <li>Redis, MongoDB</li>
                    <li>GraphQL</li>
                    <li>{t('2ndspecialisation-li3-line4')}</li>
                  </ul>
                  <ul>
                    <h4 className={styles.listTitle}>Module : DataScience :</h4>
                    <li>{t('2ndspecialisation-li4-line1')}</li>
                    <li>Machine Learning</li>
                    <li>{t('2ndspecialisation-li4-line3')}</li>
                    <li>Big DATA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
