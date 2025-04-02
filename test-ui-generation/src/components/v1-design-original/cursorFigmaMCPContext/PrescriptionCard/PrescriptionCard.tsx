import React, { useState } from "react";
import styles from "./PrescriptionCard.module.css";
import classNames from "classnames";

interface PrescriptionCardProps {
    title: string;
    subtitle: string;
    prestationNumber: string;
    technician: string;
    startDate: string;
    endDate: string;
    hasNotification?: boolean;
    defaultOpen?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
    onShare?: () => void;
    onPrint?: () => void;
    onDownload?: () => void;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
    title = "Prestations",
    subtitle,
    prestationNumber,
    technician,
    startDate,
    endDate,
    hasNotification = false,
    defaultOpen = true,
    onEdit,
    onDelete,
    onShare,
    onPrint,
    onDownload,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={classNames(styles.prestationCard, { [styles.closed]: !isOpen })}>
            <div className={styles.prestationHeader} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.headerContent}>
                    <h2 className={styles.prestationTitle}>
                        {title}
                        <img
                            src="/images/arrow.svg"
                            alt="Toggle"
                            className={classNames(styles.toggleIcon, { [styles.rotated]: !isOpen })}
                        />
                    </h2>
                    {hasNotification && <div className={styles.notificationDot} />}
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    <div className={styles.header}>
                        <div className={styles.headerInfo}>
                            <h3 className={styles.prestationNumber}>{prestationNumber}</h3>
                            <p className={styles.subtitle}>{subtitle}</p>
                            <p className={styles.technician}>{technician}</p>
                        </div>
                        <div className={styles.badge}>
                            <span className={styles.badgeText}>Pc</span>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.dates}>
                        <span className={styles.date}>{startDate}</span>
                        <img src="/images/arrow-right.svg" alt="to" className={styles.dateArrow} />
                        <span className={styles.date}>{endDate}</span>
                    </div>

                    <div className={styles.dots}>
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.actionButton} onClick={onEdit}>
                    <img src="/images/edit.svg" alt="Modifier" />
                </button>
                <button className={styles.actionButton} onClick={onDelete}>
                    <img src="/images/delete.svg" alt="Supprimer" />
                </button>
                <button className={styles.actionButton} onClick={onShare}>
                    <img src="/images/share.svg" alt="Partager" />
                </button>
                <button className={styles.actionButton} onClick={onPrint}>
                    <img src="/images/print.svg" alt="Imprimer" />
                </button>
                <button className={styles.actionButton} onClick={onDownload}>
                    <img src="/images/download.svg" alt="Télécharger" />
                </button>
            </div>
        </div>
    );
};

export default PrescriptionCard;
