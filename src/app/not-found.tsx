'use client'

import styles from "./styles/notfound.module.css";
import React, {useEffect, useState} from "react";

import Image from 'next/image'
import {ubuntuSans} from "@/app/fonts";

export default function NotFound() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <main className={styles.main}>
            <div className={`${styles.frame} page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}>
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
