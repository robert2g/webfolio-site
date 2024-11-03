'use client'

import styles from "../styles/components/header.module.css";
import weights from "../styles/fontweights.module.css"
import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {ubuntuSans} from "@/app/fonts";

const Header = () => {
    const pathname = usePathname()

    return (
        <header className={`${styles.header} ${weights.regularWeight} ${ubuntuSans.className}`}>
            <nav className={styles.container}>

                <Link href="/" className={styles.logoContainer}>
                    <div className={styles.robImageWrapper}>
                        <svg className={styles.svgIcon}
                             xmlns="http://www.w3.org/2000/svg"
                             version="1.1" viewBox="0 0 98 96"
                             style={{backgroundColor: 'transparent', fill: 'currentColor'}}>
                            <path className={styles.robImage}
                                  d="M88.83,11.17l-7.12,7.12c-.63.63-1.71.18-1.71-.71V2c0-1.1-.9-2-2-2h-6.34c-1.06,0-2.08.42-2.83,1.17l-7.66,7.66c-.75.75-1.17,1.77-1.17,2.83v6.34c0,1.1-.9,2-2,2h-16c-1.1,0-2-.9-2-2v-6.34c0-1.06-.42-2.08-1.17-2.83l-7.66-7.66c-.75-.75-1.77-1.17-2.83-1.17h-6.34c-1.1,0-2,.9-2,2v15.59c0,.89-1.08,1.34-1.71.71l-7.12-7.12c-.75-.75-1.77-1.17-2.83-1.17H1.97c-1.09,0-1.97.88-1.97,1.97v16.37c0,1.06.42,2.08,1.17,2.83l7.66,7.66c.75.75,1.17,1.77,1.17,2.83v6.34c0,1.1-.9,2-2,2H2c-1.1,0-2,.9-2,2v6.34c0,1.06.42,2.08,1.17,2.83l17.66,17.66c.75.75,1.77,1.17,2.83,1.17h6.69c1.06,0,2.08.42,2.83,1.17l7.66,7.66c.75.75,1.77,1.17,2.83,1.17h16.69c1.06,0,2.08-.42,2.83-1.17l7.66-7.66c.75-.75,1.77-1.17,2.83-1.17h6.69c1.06,0,2.08-.42,2.83-1.17l17.66-17.66c.75-.75,1.17-1.77,1.17-2.83v-6.34c0-1.1-.9-2-2-2h-6c-1.1,0-2-.9-2-2v-6.34c0-1.06.42-2.08,1.17-2.83l7.66-7.66c.75-.75,1.17-1.77,1.17-2.83V11.97c0-1.09-.88-1.97-1.97-1.97h-6.37c-1.06,0-2.08.42-2.83,1.17ZM40,58c0,1.1-.9,2-2,2h-6c-1.1,0-2-.9-2-2v-16c0-1.1.9-2,2-2h6c1.1,0,2,.9,2,2v16ZM70,58c0,1.1-.9,2-2,2h-6c-1.1,0-2-.9-2-2v-16c0-1.1.9-2,2-2h6c1.1,0,2,.9,2,2v16Z"/>
                        </svg>
                    </div>

                    <div className={styles.robWordmark}>
                        <Image src="/wordmark.svg" alt="Logo" width={124} height={25}
                               style={{backgroundColor: 'transparent'}}/>
                    </div>
                </Link>

                <div className={styles.navButtons}>
                    <Link href="/about"
                          className={`${styles.headerLink} ${pathname === '/about' ? styles.headerLinkActive : ''}`}>
                        About
                    </Link>

                    <Link href="/projects"
                          className={`${styles.headerLink} ${pathname === '/projects' ? styles.headerLinkActive : ''}`}>
                        Projects
                    </Link>

                    <Link href="/skills"
                          className={`${styles.headerLink} ${pathname === '/skills' ? styles.headerLinkActive : ''}`}>
                        Skills
                    </Link>

                    <Link href="/blog"
                          className={`${styles.headerLink} ${pathname === '/blog' ? styles.headerLinkActive : ''}`}>
                        Blog
                    </Link>

                    <Link href="/contact"
                          className={`${styles.headerLink} ${pathname === '/contact' ? styles.headerLinkActive : ''}`}>
                        Contact
                    </Link>

                    <Link href="/resume"
                          className={`${styles.headerLink} ${pathname === '/resume' ? styles.headerLinkActive : ''}`}>
                        Resume
                    </Link>

                </div>

            </nav>
        </header>
    );
};

export default Header;