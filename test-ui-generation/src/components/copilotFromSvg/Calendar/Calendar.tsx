import React, { FC, useState } from "react";
import styles from "./Calendar.module.css";

interface CalendarProps {
    onDateSelect?: (date: Date) => void;
    selectedDate?: Date;
    events?: CalendarEvent[];
}

interface CalendarEvent {
    date: Date;
    value: number;
    type: "leak" | "usage";
    severity?: "low" | "medium" | "high";
}

export const Calendar: FC<CalendarProps> = ({ onDateSelect, selectedDate = new Date(), events = [] }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Validate and normalize events
    const validEvents = Array.isArray(events) ? events : [];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(date);
    };

    const handlePreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const getDayColor = (events: CalendarEvent[]) => {
        if (!events.length) return "";

        const dayEvents = events.reduce(
            (acc, event) => {
                if (event.type === "leak") {
                    acc.leakValue = (acc.leakValue || 0) + event.value;
                } else if (event.type === "usage") {
                    acc.usageValue = (acc.usageValue || 0) + event.value;
                }
                return acc;
            },
            { leakValue: 0, usageValue: 0 }
        );

        // Determine severity based on values
        if (dayEvents.leakValue > 100) return styles.highAlert;
        if (dayEvents.leakValue > 50) return styles.mediumAlert;
        if (dayEvents.leakValue > 0) return styles.lowAlert;

        // Usage colors if no leaks
        if (dayEvents.usageValue > 1000) return styles.highUsage;
        if (dayEvents.usageValue > 500) return styles.mediumUsage;
        if (dayEvents.usageValue > 0) return styles.lowUsage;

        return "";
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days: React.ReactNode[] = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.emptyDay} />);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const dayEvents = validEvents.filter((event) => event?.date?.toDateString() === date.toDateString());

            days.push(
                <button
                    key={day}
                    className={`${styles.day}
                        ${isSelected ? styles.selected : ""}
                        ${getDayColor(dayEvents)}`}
                    onClick={() => onDateSelect?.(date)}
                >
                    <span className={styles.dayNumber}>{day}</span>
                    {dayEvents.length > 0 && (
                        <div className={styles.eventIndicator}>
                            {dayEvents.some((e) => e.type === "leak") && <span className={styles.leakIndicator} />}
                            {dayEvents.some((e) => e.type === "usage") && <span className={styles.usageIndicator} />}
                        </div>
                    )}
                </button>
            );
        }

        return days;
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={handlePreviousMonth} className={styles.navButton}>
                    <span className={styles.chevron}>←</span>
                </button>
                <h2 className={styles.monthYear}>{formatDate(currentMonth)}</h2>
                <button onClick={handleNextMonth} className={styles.navButton}>
                    <span className={styles.chevron}>→</span>
                </button>
            </div>
            <div className={styles.weekDays}>
                {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
                    <div key={day} className={styles.weekDay}>
                        {day}
                    </div>
                ))}
            </div>
            <div className={styles.days}>{renderCalendarDays()}</div>
        </div>
    );
};
