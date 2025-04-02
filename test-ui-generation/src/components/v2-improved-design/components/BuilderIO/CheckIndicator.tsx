"use client";

import * as React from "react";
import styles from "./CheckIndicator.module.css";

interface CheckIndicatorProps {
    /**
     * The image URL to display
     */
    imageUrl?: string;
    /**
     * The text to display next to the image
     */
    text?: string;
    /**
     * Optional className for additional styling
     */
    className?: string;
}

export const CheckIndicator: React.FC<CheckIndicatorProps> = ({
    imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe",
    text = "Checked",
    className = "",
}) => {
    return (
        <div role="status" className={`${styles.checkIndicator} ${className}`.trim()} aria-label={`Status: ${text}`}>
            <img src={imageUrl} alt="" className={styles.statusIcon} aria-hidden="true" />
            <p className={styles.statusText}>{text}</p>
        </div>
    );
};

export default CheckIndicator;
