import React from "react";
import styles from "./Calendar.module.css";
import { CalendarDay, DayType } from "./CalendarDay.tsx";

interface CalendarProps {
    month: string;
}

interface DayData {
    day: number;
    type: DayType;
}

export const Calendar: React.FC<CalendarProps> = ({ month }) => {
    const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];

    // Exemple de données pour le mois d'octobre
    const days: DayData[] = [
        { day: 1, type: "leak" },
        { day: 2, type: "leak" },
        { day: 3, type: "usage" },
        { day: 4, type: "usage" },
        { day: 5, type: "usage" },
        { day: 6, type: "usage" },
        { day: 7, type: "usage" },
        { day: 8, type: "usage" },
        { day: 9, type: "normal" },
        { day: 10, type: "leak" },
        { day: 11, type: "leak" },
        { day: 12, type: "leak" },
        { day: 13, type: "leak" },
        { day: 14, type: "usage" },
        { day: 15, type: "usage" },
        { day: 16, type: "leak" },
        { day: 17, type: "normal" },
        { day: 18, type: "normal" },
        { day: 19, type: "normal" },
        { day: 20, type: "normal" },
        { day: 21, type: "normal" },
        { day: 22, type: "normal" },
        { day: 23, type: "normal" },
        { day: 24, type: "leak" },
        { day: 25, type: "leak" },
        { day: 26, type: "disabled" },
        { day: 27, type: "normal" },
        { day: 28, type: "normal" },
        { day: 29, type: "disabled" },
        { day: 30, type: "disabled" },
        { day: 31, type: "disabled" },
    ];

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <h2 className={styles.month}>{month}</h2>
            </div>
            <div className={styles.weekDays}>
                {weekDays.map((day, index) => (
                    <div key={index} className={styles.weekDay}>
                        {day}
                    </div>
                ))}
            </div>
            <div className={styles.days}>
                {days.map((dayData) => (
                    <CalendarDay key={dayData.day} day={dayData.day} type={dayData.type} />
                ))}
            </div>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.legendDot} />
                    <span>Utilisation</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendBox} />
                    <span>Fuites</span>
                </div>
            </div>
        </div>
    );
};
