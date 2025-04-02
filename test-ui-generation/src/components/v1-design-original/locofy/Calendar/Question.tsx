import React, { FunctionComponent, useState, useCallback } from "react";
import DureDutilisationEnSavoir from "./DureDutilisationEnSavoir.tsx";
import PortalPopup from "./PortalPopup.tsx";
import FuiteAuMasqueEnSavoirPl from "./FuiteAuMasqueEnSavoirPl.tsx";
import styles from "./Question.module.css";

export type QuestionType = {
    className?: string;
};

const Question: FunctionComponent<QuestionType> = ({ className = "" }) => {
    const [isDureDutilisationEnSavoirOpen, setDureDutilisationEnSavoirOpen] = useState(false);
    const [isFuiteAuMasqueEnSavoirPlOpen, setFuiteAuMasqueEnSavoirPlOpen] = useState(false);

    const openDureDutilisationEnSavoir = useCallback(() => {
        setDureDutilisationEnSavoirOpen(true);
    }, []);

    const closeDureDutilisationEnSavoir = useCallback(() => {
        setDureDutilisationEnSavoirOpen(false);
    }, []);

    const openFuiteAuMasqueEnSavoirPl = useCallback(() => {
        setFuiteAuMasqueEnSavoirPlOpen(true);
    }, []);

    const closeFuiteAuMasqueEnSavoirPl = useCallback(() => {
        setFuiteAuMasqueEnSavoirPlOpen(false);
    }, []);

    return (
        <>
            <div className={[styles.question9, className].join(" ")}>
                <img className={styles.question9Child} alt="" src="Group 731.svg" />
                <div className={styles.question9Item} />
                <div className={styles.dureDutilisation}>Durée d’utilisation</div>
                <div className={styles.enSavoirPlus} onClick={openDureDutilisationEnSavoir}>
                    En savoir plus
                </div>
                <div className={styles.h09}>7h09</div>
                <div className={styles.question9Inner} />
                <div className={styles.enSavoirPlus1} onClick={openFuiteAuMasqueEnSavoirPl}>
                    En savoir plus
                </div>
                <div className={styles.fuiteAuMasque}>Fuite au masque</div>
                <div className={styles.parent}>
                    <div className={styles.div}>25</div>
                    <div className={styles.lmin}> L/min</div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.question9Child1} />
                <div className={styles.du3Janvier}>du 3 janvier 2025</div>
                <div className={styles.groupDiv}>
                    <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.okWrapper}>
                            <div className={styles.ok}>Ok</div>
                        </div>
                    </div>
                </div>
                <div className={styles.relev}>Relevé</div>
                <div className={styles.variationDeLaContainer}>
                    <p className={styles.variationDeLa}>Variation de la durée d'utilisation</p>
                    <p className={styles.frquenceRespiratoire16R}>
                        <span>
                            <span className={styles.parRapportLaVeille301}>
                                <span className={styles.parRapport}>{`Par rapport à la veille:  `}</span>
                                <b className={styles.minutes}>+ 30 minutes</b>
                            </span>
                        </span>
                    </p>
                    <p className={styles.tendanceSurTroisSemaines}>
                        <span>
                            <span className={styles.tendanceSurTroisSemaines1}>
                                <span className={styles.parRapport}>{`Tendance sur trois semaines :  `}</span>
                                <b className={styles.minutes}>- 15 minutes</b>
                            </span>
                        </span>
                    </p>
                </div>
                <div className={styles.frquenceRespiratoireFrquenContainer}>
                    <p className={styles.variationDeLa}>Fréquence respiratoire</p>
                    <p className={styles.frquenceRespiratoire16R}>
                        <span className={styles.parRapportLaVeille301}>
                            <span className={styles.frquenceRespiratoire1}>{`Fréquence respiratoire :  `}</span>
                            <span className={styles.respMinute}>16 Resp / minute</span>
                        </span>
                    </p>
                </div>
            </div>
            {isDureDutilisationEnSavoirOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeDureDutilisationEnSavoir}
                >
                    <DureDutilisationEnSavoir onClose={closeDureDutilisationEnSavoir} />
                </PortalPopup>
            )}
            {isFuiteAuMasqueEnSavoirPlOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeFuiteAuMasqueEnSavoirPl}
                >
                    <FuiteAuMasqueEnSavoirPl onClose={closeFuiteAuMasqueEnSavoirPl} />
                </PortalPopup>
            )}
        </>
    );
};

export default Question;
