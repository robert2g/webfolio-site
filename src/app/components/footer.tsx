import styles from "../styles/components/footer.module.css";
import weights from "../styles/fontweights.module.css"
import React from 'react';
import Image from 'next/image'
import {ubuntuSans} from "@/app/fonts";
import GithubLink from './icons/github';
import Tooltip from './tooltip'
import EmailLink from "@/app/components/icons/email";
import DiscordLink from "@/app/components/icons/discord";
import OnlineLink from "@/app/components/icons/gameicon";

const Footer = () => {
  return (
      <footer className={`${styles.footer} ${weights.lightWeight} ${ubuntuSans.className}`}>
          <div className={styles.footerContainer}>
              <div className={styles.logoContainer}>
                  <Image src="/roblogo.svg" alt="Logo" width={32} height={28}
                         style={{backgroundColor: 'transparent'}}/>
              </div>

              <div className={styles.linkContainer}>
                  <Tooltip text="My GitHub">
                      <GithubLink/>
                  </Tooltip>

                  <Tooltip text="Contact Me">
                      <EmailLink/>
                  </Tooltip>

                  <Tooltip text="Discord Username: raldanava">
                      <DiscordLink/>
                  </Tooltip>

                  <Tooltip text="Online-Facing Site">
                      <OnlineLink/>
                  </Tooltip>
              </div>

          </div>

          <div className={styles.lineSeparator}></div>

          <div className={styles.bottomContainer}>
              <p className={styles.copyrightMessage}>© Robert Gracia 2024. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default Footer;