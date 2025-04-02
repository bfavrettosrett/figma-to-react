import React from "react";
import Day, { CalendarDay } from "./day";

export default function Days({ day, handleDayClick }: { day: Date; handleDayClick: (day: CalendarDay) => void }) {
    const firstDisplaybleDayForCalendarMonth = new Date(day.getFullYear(), day.getMonth());
    let weekOfFirstDisplayableDay = firstDisplaybleDayForCalendarMonth.getDay();
    let currentDays: CalendarDay[] = [];

    const defineCurrentDays = () => {
        let dayToDisplay = firstDisplaybleDayForCalendarMonth;

        for (let dayNumber = 1; dayNumber <= 42; dayNumber++) {
            if (dayNumber === 1 && weekOfFirstDisplayableDay === 0) {
                dayToDisplay.setDate(dayToDisplay.getDate() - 6); // If first day of month is sunday we need one extra week
            } else if (dayNumber === 1) {
                dayToDisplay.setDate(dayToDisplay.getDate() + (dayNumber - weekOfFirstDisplayableDay));
            } else {
                dayToDisplay.setDate(dayToDisplay.getDate() + 1);
            }

            let calendarDay: CalendarDay = {
                currentMonth: dayToDisplay.getMonth() === day.getMonth(),
                date: new Date(dayToDisplay),
                month: dayToDisplay.getMonth() + 1,
                number: dayToDisplay.getDate(),
                selected: dayToDisplay.toDateString() === day.toDateString(),
                year: dayToDisplay.getFullYear(),
            };

            currentDays.push(calendarDay);
        }
    };

    const removeUnneededChunk = (chunkedMonth: CalendarDay[][]) => {
        return chunkedMonth.filter((week) => {
            return !week
                .map((day) => day.currentMonth)
                .every((dayIsInCurrentMonth) => {
                    return dayIsInCurrentMonth === false;
                });
        });
    };

    const chunkArray = (array: any[], size: number) => {
        const chunkCount = Math.ceil(array.length / size);
        return [...Array(chunkCount)].map(() => {
            return array.splice(0, size);
        });
    };

    const handleDayPress = (day: CalendarDay) => {
        handleDayClick(day);
    };

    defineCurrentDays();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                // rowGap: 6,
            }}
        >
            {removeUnneededChunk(chunkArray(currentDays, 7)).map((week, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-evenly",
                        }}
                    >
                        {week.map((day: CalendarDay) => {
                            return (
                                <Day
                                    key={day.date.getTime()}
                                    day={day}
                                    onDayClick={(day: CalendarDay) => handleDayPress(day)}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
