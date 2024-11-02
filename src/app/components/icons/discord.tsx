import styles from "@/app/styles/icons/discord.module.css";
import Link from "next/link";
import React from "react";

const DiscordLink = () => {
    return (
        <Link href="mailto:jrgg1924@proton.me" className={styles.iconFrame}>
            <svg className={styles.svgIcon}
                 xmlns="http://www.w3.org/2000/svg"
                 version="1.1" viewBox="0 0 98 96"
                 style={{backgroundColor: 'transparent', fill: 'currentColor'}}>
                <path className={styles.discordIcon}
                      d="M83.02,17.08c-6.44-2.95-13.24-5.04-20.22-6.22-.96,1.71-1.82,3.47-2.59,5.26-7.44-1.12-15-1.12-22.44,0-.77-1.8-1.63-3.56-2.59-5.26-6.99,1.19-13.79,3.29-20.23,6.24C2.15,36.03-1.32,54.49.42,72.69H.42c7.49,5.54,15.88,9.75,24.8,12.45,2.01-2.7,3.78-5.56,5.31-8.56-2.9-1.08-5.7-2.42-8.36-3.99.7-.51,1.39-1.03,2.05-1.54,15.7,7.38,33.88,7.38,49.58,0,.67.55,1.36,1.07,2.05,1.54-2.67,1.58-5.47,2.91-8.38,4,1.52,3,3.3,5.86,5.31,8.56,8.92-2.69,17.32-6.9,24.81-12.44h0c2.03-21.1-3.48-39.4-14.57-55.61ZM32.72,61.5c-4.83,0-8.83-4.39-8.83-9.78s3.85-9.82,8.81-9.82,8.92,4.42,8.83,9.82c-.08,5.4-3.89,9.78-8.82,9.78ZM65.28,61.5c-4.84,0-8.82-4.39-8.82-9.78s3.85-9.82,8.82-9.82,8.9,4.42,8.81,9.82c-.08,5.4-3.88,9.78-8.81,9.78Z"/>
            </svg>
        </Link>
    )
}

export default DiscordLink;

