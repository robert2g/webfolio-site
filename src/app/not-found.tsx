import styles from "./styles/notfound.module.css";
import React from "react";

import Image from 'next/image'
import {ubuntuSans} from "@/app/fonts";

export default function NotFound() {
    return (
        <main className={styles.main}>
            <div className={styles.frame}>
                <div className={styles.container}>
                    <div className={`${styles.messageHolder} ${styles.lightWeight} ${ubuntuSans.className}`}>
                        <Image src="/404.svg" alt="Logo" width={260} height={130}
                               style={{backgroundColor: 'transparent'}}/>
                        <p className={styles.messageText}>This page could not be found...</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
