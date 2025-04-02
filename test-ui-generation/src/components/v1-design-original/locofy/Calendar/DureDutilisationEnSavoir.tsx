import React, { FunctionComponent } from "react";
import styles from "./DureDutilisationEnSavoir.module.css";

export type DureDutilisationEnSavoirType = {
    className?: string;
};

const DureDutilisationEnSavoir: FunctionComponent<DureDutilisationEnSavoirType> = ({ className = "" }) => {
    return (
        <div className={[styles.dureDutilisationEnSavoir, className].join(" ")}>
            <div className={styles.dureDutilisationEnSavoirChild} />
            <div className={styles.jan2025}>3 jan. 2025</div>
            <div className={styles.ceParamtreMesureContainer}>
                <span>{`Ce paramètre mesure la durée d'utilisation de la ventilation entre le `}</span>
                <span className={styles.jeudi2Janvier}> jeudi 2 janvier 12h et le vendredi 3 janvier 12h.</span>
            </div>
            <div className={styles.dureDutilisation}>Durée d’utilisation</div>
            <div className={styles.h09}>7h09</div>
            <div className={styles.dureDutilisationEnSavoirItem} />
            <img className={styles.dureDutilisationEnSavoirInner} alt="" src="Group 731.svg" />
            <div className={styles.groupDiv}>
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.okWrapper}>
                        <div className={styles.ok}>Ok</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DureDutilisationEnSavoir;
