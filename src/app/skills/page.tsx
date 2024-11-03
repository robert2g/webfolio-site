'use client'

import styles from "../styles/page.module.css";
import weights from "@/app/styles/fontweights.module.css"
import skillStyles from "./skills.module.css";
import React, {useEffect, useState} from "react";
import {cutmark, ubuntuSans} from "@/app/fonts";
import Image from 'next/image'
import splustier from '../../../public/tiers/s-plus-icon.svg'
import stier from '../../../public/tiers/s-icon.svg'
import atier from '../../../public/tiers/a-icon.svg'
import btier from '../../../public/tiers/b-icon.svg'
import ctier from '../../../public/tiers/c-icon.svg'
import dtier from '../../../public/tiers/d-icon.svg'

export default function SkillsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <main className={styles.main}>
            <div className={`${styles.frame} page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}>
                <div className={`${styles.container} ${weights.regularWeight} ${ubuntuSans.className}`}>

                    <h1 className={`${cutmark.className} ${weights.boldWeight}`}>Skills</h1>

                    <p>This is the skills page.</p>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={splustier} alt={"S+"}/>
                        <h3 className={`${skillStyles.textSPlus} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                                Mastered
                        </h3>
                    </div>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={stier} alt={"S"}/>
                        <h3 className={`${skillStyles.textS} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                            Advanced
                        </h3>
                    </div>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={atier} alt={"A"}/>
                        <h3 className={`${skillStyles.textA} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                            Proficient
                        </h3>
                    </div>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={btier} alt={"B"}/>
                        <h3 className={`${skillStyles.textB} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                            Competent
                        </h3>
                    </div>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={ctier} alt={"C"}/>
                        <h3 className={`${skillStyles.textC} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                            Familiar
                        </h3>
                    </div>

                    <div className={skillStyles.rankContainer}>
                        <Image className={skillStyles.tierWrapper} src={dtier} alt={"D"}/>
                        <h3 className={`${skillStyles.textD} ${skillStyles.tierTitle} 
                            ${weights.regularWeight} ${cutmark.className}`}>
                            Novice
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    );
}
