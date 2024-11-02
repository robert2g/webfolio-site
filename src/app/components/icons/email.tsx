import styles from "@/app/styles/icons/email.module.css";
import Link from "next/link";
import React from "react";

const EmailLink = () => {
    return (
        <Link href="mailto:jrgg1924@proton.me" className={styles.iconFrame}>
            <svg className={styles.svgIcon}
                 xmlns="http://www.w3.org/2000/svg"
                 version="1.1" viewBox="0 0 98 96"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>
                <path className={styles.emailIcon}
                      d="M49,49.27l49-24.43v-7.46c0-3.38-2.74-6.13-6.12-6.13H6.13c-3.38,0-6.13,2.74-6.13,6.13v7.46l49,24.43Z"/>
                <path className={styles.emailIcon}
                      d="M49,57.82L0,33.39v45.23c0,3.38,2.74,6.12,6.13,6.12h85.75c3.38,0,6.12-2.74,6.12-6.12v-45.23l-49,24.43Z"/>
            </svg>
        </Link>
    )
}

export default EmailLink;

