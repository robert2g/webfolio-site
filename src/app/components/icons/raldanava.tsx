import styles from "@/app/styles/icons/github.module.css";
import Link from "next/link";
import React from "react";

const RaldanavaLink = () => {
    return (
        <Link href="https://github.com/raldanava" className={styles.iconFrame}>
            <svg className={styles.svgIcon}
                 xmlns="http://www.w3.org/2000/svg"
                 version="1.1" viewBox="0 0 98 96"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>
                <path className={styles.githubIcon}
                      d="M90,20v10h-10V0h-10v10h-10v10h-20v-10h-10V0h-10v30h-10v-10H0v30h10v10H0v10h20v10h10v10h40v-10h10v-10h20v-10h-10v-10h10v-30h-10ZM70,50v10h-10v-20h10v10ZM30,50v-10h10v20h-10v-10Z"/>
            </svg>
        </Link>
    )
}

export default RaldanavaLink;

