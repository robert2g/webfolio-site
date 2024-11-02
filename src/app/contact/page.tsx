'use client'

import styles from "../styles/page.module.css";
import React, {useEffect, useState} from "react";
import {ubuntuSans} from "@/app/fonts";

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
            <main className={styles.main}>
                <div className={`${styles.frame} page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}>
                    <div className={`${styles.container} ${styles.regularWeight} ${ubuntuSans.className}`}>
                        <p>This is the contact page. <br/> Not sure if this is necessary.</p>

                    </div>
                </div>
            </main>
    );
}