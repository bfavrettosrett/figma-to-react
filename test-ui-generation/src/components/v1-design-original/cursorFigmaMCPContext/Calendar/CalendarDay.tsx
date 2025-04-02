import React from "react";
import styles from "./CalendarDay.module.css";

export type DayType = "normal" | "usage" | "leak" | "disabled";

interface CalendarDayProps {
    day: number;
    type: DayType;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ day, type }) => {
    const getTypeClass = () => {
        switch (type) {
            case "usage":
                return styles.usage;
            case "leak":
                return styles.leak;
            case "disabled":
                return styles.disabled;
            default:
                return styles.normal;
        }
    };

    return (
        <div className={`${styles.day} ${getTypeClass()}`}>
            <div className={styles.circle}>
                <span className={styles.number}>{day}</span>
            </div>
        </div>
    );
};
