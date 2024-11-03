'use client'

import styles from "./styles/page.module.css";
import weights from "./styles/fontweights.module.css"
import React, {useEffect, useState} from "react";
import {ubuntuSans, cutmark} from "@/app/fonts";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.frame} page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}>
          <div className={`${styles.container} ${weights.regularWeight} ${ubuntuSans.className}`}>
              <h1 className={`${cutmark.className} ${weights.boldWeight}`}>Software Developer</h1>
              <p>Welcome to the Home page of my site.</p>

              <p>end</p>
          </div>
      </div>
    </main>
  );
}
