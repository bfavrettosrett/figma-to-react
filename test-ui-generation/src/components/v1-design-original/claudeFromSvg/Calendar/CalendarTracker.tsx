import React from "react";
import styles from "./CalendarTracker.module.css";

interface CalendarTrackerProps {
    month: string;
    days: Array<{
        day: number;
        used: boolean;
        leak?: boolean;
    }>;
}

const CalendarTracker: React.FC<CalendarTrackerProps> = ({ month = "Octobre", days }) => {
    const weekdays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];

    return (
        <div className={styles.calendarContainer}>
            <h2 className={styles.monthTitle}>{month}</h2>

            <div className={styles.weekdaysHeader}>
                {weekdays.map((day) => (
                    <div key={day} className={styles.weekday}>
                        {day}
                    </div>
                ))}
            </div>

            <div className={styles.daysGrid}>
                {days.map(({ day, used, leak }) => (
                    <div
                        key={day}
                        className={`
              ${styles.dayCell}
              ${used ? styles.used : ""}
              ${leak ? styles.leak : ""}
            `}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.used}`}></div>
                    <span>Utilisation</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.leak}`}></div>
                    <span>Fuites</span>
                </div>
            </div>
        </div>
    );
};

export default CalendarTracker;
