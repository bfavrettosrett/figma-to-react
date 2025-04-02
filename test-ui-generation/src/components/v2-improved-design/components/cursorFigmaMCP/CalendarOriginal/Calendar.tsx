import React from "react";
import styles from "./calendar.module.css";

type DayType = {
    date: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    hasUtilisation?: boolean;
    hasFuite?: boolean;
};

export interface CalendarProps {
    month: string;
    year: number;
    days: DayType[];
    onDayClick?: (date: number) => void;
}

const WEEKDAYS = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];

export const Calendar: React.FC<CalendarProps> = ({ month, year, days, onDayClick }) => {
    return (
        <div className={styles.calendar} role="region" aria-label="Calendrier">
            <div className={styles.header}>
                <h2 className={styles.monthYear}>{month}</h2>
            </div>

            <div className={styles.weekdays}>
                {WEEKDAYS.map((day) => (
                    <div key={day} className={styles.weekday}>
                        {day}
                    </div>
                ))}
            </div>

            <div className={styles.days} role="grid">
                {days.map((day, index) => (
                    <button
                        key={`${day.date}-${index}`}
                        className={`${styles.day} ${!day.isCurrentMonth ? styles.otherMonth : ""}
                            ${day.isToday ? styles.today : ""}`}
                        onClick={() => onDayClick?.(day.date)}
                        disabled={!day.isCurrentMonth}
                        aria-label={`${day.date} ${month} ${year}`}
                        type="button"
                    >
                        <span className={styles.dayNumber}>{day.date}</span>
                        {day.hasUtilisation && <div className={styles.utilisationIndicator} aria-hidden="true" />}
                        {day.hasFuite && <div className={styles.fuiteIndicator} aria-hidden="true" />}
                    </button>
                ))}
            </div>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.utilisationDot} aria-hidden="true" />
                    <span>Utilisation</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.fuiteRect} aria-hidden="true" />
                    <span>Fuites</span>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
