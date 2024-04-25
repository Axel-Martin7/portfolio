import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
// import linkedin from '../../public/icons/linkedin.svg';
import linkedin from '@/public/icons/linkedin.svg';
import github from '@/public/icons/github.svg';
import mail from '@/public/icons/mail.svg';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('page-contact');

  return (
    <main>
      <div className={styles.contactPage}>
        <div className={styles.sectionsContainer}>
          <section className={styles.presentationSection}>
            <div className={styles.textsContainer}>
              <p>{t('description-part1')}</p>
              <p>
                {t('description-part2-line1')} <br></br>
                {t('description-part2-line2')}
              </p>
              <p>
                {t('description-part3-line1')} <br></br>
                {t('description-part3-line2')}
              </p>
            </div>
          </section>

          <section className={styles.cardsSection}>
            <div className={styles.contactCard}>
              <div className={styles.cardFrame}>
                <div className={styles.cardContentContainer}>
                  <div className={styles.profilInfos}>
                    <p className={styles.name}>
                      <span className={styles.firstname}>Axel</span>
                      <span className={styles.lastname}>Martin</span>
                    </p>
                    <p className={styles.role}>Web developer</p>
                  </div>
                  <div className={styles.socialLinksContainer}>
                    <a
                      className={styles.socialLink}
                      href="mailto:axel.martin@outlook.com"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={mail}
                        width={30}
                        height={30}
                        alt="pp"
                      />
                      axel.martin@outlook.com
                    </a>
                    <a
                      className={styles.socialLink}
                      href="mailto:axel.martin@outlook.com"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={linkedin}
                        width={30}
                        height={30}
                        alt="pp"
                      />
                      linkedin.com/in/axel-martin7
                    </a>
                    <a
                      className={styles.socialLink}
                      href="mailto:axel.martin@outlook.com"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={github}
                        width={30}
                        height={30}
                        alt="pp"
                      />
                      github.com/Axel-Martin7
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.backCard}></div>
          </section>
        </div>
      </div>
    </main>
    // <main>
    //   <div className={styles.contactPage}>
    //     <div className={styles.sectionsContainer}>
    //       <section className={styles.presentationSection}>
    //         <div className={styles.textsContainer}>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
    //             vitae commodi, voluptatum dolorum officia voluptates libero
    //             deleniti fugit nisi debitis dolores natus totam esse porro, vel
    //             modi, cumque temporibus veniam! Lorem ipsum dolor sit amet
    //             consectetur adipisicing elit. Adipisci doloremque voluptates
    //             harum error asperiores ullam fuga soluta, voluptatum quo,
    //             provident fugiat accusamus, dicta assumenda necessitatibus unde
    //             recusandae aliquam amet itaque. Lorem ipsum dolor sit amet
    //             consectetur, adipisicing elit. Blanditiis placeat dicta et
    //             dolorem velit quam repellendus ratione repellat sunt. Incidunt
    //             unde quae molestiae quos corporis quam aliquid ut animi
    //             corrupti.
    //           </p>
    //         </div>
    //       </section>

    //       <section className={styles.cardsSection}>
    //         <div className={styles.contactCard}>
    //           <div className={styles.contactCardFrame}>
    //             <div className={styles.cardContentContainer}>
    //               <div className={styles.profilInfos}>
    //                 <p className={styles.name}>
    //                   <span className={styles.firstname}>Axel</span>
    //                   <span className={styles.lastname}>Martin</span>
    //                 </p>
    //                 <p className={styles.role}>Web developper</p>
    //               </div>
    //               <div className={styles.socialLinksContainer}>
    //                 <a
    //                   className={styles.socialLink}
    //                   href="mailto:axel.martin@outlook.com"
    //                 >
    //                   <Image
    //                     className={styles.socialIcon}
    //                     src={mail}
    //                     width={30}
    //                     height={30}
    //                     alt="pp"
    //                   />
    //                   axel.martin@outlook.com
    //                 </a>
    //                 <a
    //                   className={styles.socialLink}
    //                   href="mailto:axel.martin@outlook.com"
    //                 >
    //                   <Image
    //                     className={styles.socialIcon}
    //                     src={linkedin}
    //                     width={30}
    //                     height={30}
    //                     alt="pp"
    //                   />
    //                   linkedin.com/in/axel-martin7
    //                 </a>
    //                 <a
    //                   className={styles.socialLink}
    //                   href="mailto:axel.martin@outlook.com"
    //                 >
    //                   <Image
    //                     className={styles.socialIcon}
    //                     src={github}
    //                     width={30}
    //                     height={30}
    //                     alt="pp"
    //                   />
    //                   github.com/Axel-Martin7
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* <div className={styles.contactCardContentContainer}>
    //             <div className={styles.profilInfos}>
    //               <p>Axel Martin</p>
    //               <p>Developper web</p>
    //             </div>

    //             <div className={styles.separator}></div>

    //             <div className={styles.socialLinksContainer}>
    //               <a
    //                 className={styles.socialLink}
    //                 href="mailto:axel.martin@outlook.com"
    //               >
    //                 <Image
    //                   className={styles.socialIcon}
    //                   src={linkedin}
    //                   width={50}
    //                   height={50}
    //                   alt="pp"
    //                 />
    //                 axel.martin@outlook.com
    //               </a>
    //               <a
    //                 className={styles.socialLink}
    //                 href="mailto:axel.martin@outlook.com"
    //               >
    //                 <Image
    //                   className={styles.socialIcon}
    //                   src={linkedin}
    //                   width={50}
    //                   height={50}
    //                   alt="pp"
    //                 />
    //                 axel.martin@outeeeelook.com
    //               </a>
    //               <a
    //                 className={styles.socialLink}
    //                 href="mailto:axel.martin@outlook.com"
    //               >
    //                 <Image
    //                   className={styles.socialIcon}
    //                   src={linkedin}
    //                   width={50}
    //                   height={50}
    //                   alt="pp"
    //                 />
    //                 axel.martin@efefefefefefoutlook.com
    //               </a>
    //             </div>
    //           </div> */}
    //         </div>

    //         <div className={styles.backCard}>
    //           <div className={styles.logoContainer}>
    //             <div className={styles.logoTextContainer}>
    //               <p className={styles.signature}>A . M</p>
    //               <p className={styles.name}>Axel Martin</p>
    //               <p className={styles.job}>Web developper</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className={styles.backCard2}>
    //           <div className={styles.logoContainer}>
    //             <div className={styles.logoTextContainer}>
    //               <p className={styles.signature}>A . M</p>
    //               <p className={styles.name}>Axel Martin</p>
    //               <p className={styles.job}>Web developper</p>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </main>
  );
}
