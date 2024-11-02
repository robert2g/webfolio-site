import styles from "@/app/styles/icons/github.module.css";
import Link from "next/link";
import React from "react";

const GitHubLink = () => {
    return (
        <Link href="https://github.com/robert2g" className={styles.iconFrame}>
            <svg className={styles.svgIcon}
                 xmlns="http://www.w3.org/2000/svg"
                 version="1.1" viewBox="0 0 98 96"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>
                <path className={styles.githubIcon}
                      d="M48.9,0C21.8,0,0,22,0,49.2s14,40.2,33.4,46.7c2.4.5,3.3-1.1,3.3-2.4s0-5.1,0-9.1c-13.6,2.9-16.4-5.9-16.4-5.9-2.2-5.7-5.4-7.2-5.4-7.2-4.4-3,.3-3,.3-3,4.9.3,7.5,5.1,7.5,5.1,4.4,7.5,11.4,5.4,14.2,4.1.4-3.2,1.7-5.4,3.1-6.6-10.8-1.1-22.2-5.4-22.2-24.3s1.9-9.8,5-13.2c-.5-1.2-2.2-6.3.5-13,0,0,4.1-1.3,13.4,5.1,4-1.1,8.1-1.6,12.2-1.6,4.1,0,8.3.6,12.2,1.6,9.3-6.4,13.4-5.1,13.4-5.1,2.7,6.8,1,11.8.5,13,3.2,3.4,5,7.8,5,13.2,0,18.9-11.4,23.1-22.3,24.3,1.8,1.5,3.3,4.5,3.3,9.1,0,6.6,0,11.9,0,13.5s.9,2.9,3.3,2.4c19.4-6.5,33.4-24.9,33.4-46.7,0-27.2-21.8-49.2-48.8-49.2Z"/>
            </svg>
        </Link>
    )
}

export default GitHubLink;
