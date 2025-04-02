import React from "react";
import styles from "./Calendar.module.css";
import classNames from "classnames";

interface CalendarProps {
    month?: string;
    onDateSelect?: (date: number) => void;
    selectedDate?: number;
    indicators?: {
        date: number;
        type: "utilisation" | "fuite";
        color: string;
    }[];
}

const Calendar: React.FC<CalendarProps> = ({ month = "Octobre", onDateSelect, selectedDate, indicators = [] }) => {
    const weekDays = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];
    const disabledDays = [26, 27, 28, 29, 30, 31];

    const renderDays = () => {
        const days = Array.from({ length: 31 }, (_, i) => i + 1);

        return days.map((day) => {
            const indicator = indicators.find((ind) => ind.date === day);
            const dayClasses = classNames(styles.day, {
                [styles.selected]: selectedDate === day,
                [styles.utilisation]: indicator?.type === "utilisation",
                [styles.fuite]: indicator?.type === "fuite",
            });

            return (
                <div key={day} className={styles.dayContainer}>
                    <button
                        className={dayClasses}
                        onClick={() => onDateSelect?.(day)}
                        disabled={disabledDays.includes(day)}
                    >
                        {day}
                    </button>
                    {indicator && <div className={styles.indicator} style={{ borderColor: indicator.color }} />}
                </div>
            );
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.monthTitle}>{month}</h2>
            <div className={styles.weekDaysGrid}>
                {weekDays.map((day) => (
                    <span key={day} className={styles.weekDay}>
                        {day}
                    </span>
                ))}
            </div>
            <div className={styles.daysGrid}>{renderDays()}</div>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.legendDot} style={{ backgroundColor: "#7FAD57" }} />
                    <span className={styles.legendText}>Utilisation</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendBox} style={{ borderColor: "#7FAD57" }} />
                    <span className={styles.legendText}>Fuites</span>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
