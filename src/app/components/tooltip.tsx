/* Generates a tooltip for the element that is wrapped. */

import React from 'react';
import styles from '@/app/styles/components/tooltip.module.css'
import {ubuntuSans} from "@/app/fonts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Tooltip = ({ children, text }) => {
    return (
        <div className={styles.tooltipContainer}>
            {children}
            <span className={`${ubuntuSans.className} ${styles.tooltip}`}>{text}</span>
        </div>
    );
};

export default Tooltip;