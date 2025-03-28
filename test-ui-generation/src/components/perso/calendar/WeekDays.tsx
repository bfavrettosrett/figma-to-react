import React, { useEffect, useState } from "react";

export default function WeekDays() {
    const [weekDayNames, setweekDayNames] = useState<string[] | null>(null);
    const color = "#102C79";
    const getWeekDays = () => {
        const baseDate = new Date(2025, 0, 6); // 06/01/2025 was a Monday
        // console.log(baseDate);
        let weekDays: any[] = [];
        for (let index = 0; index < 7; index++) {
            weekDays.push(baseDate.toLocaleDateString(undefined, { weekday: "short" }));
            baseDate.setDate(baseDate.getDate() + 1);
        }
        return weekDays;
    };
    useEffect(() => {
        setweekDayNames(getWeekDays());
    }, []);

    const capitalize = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                margin: "12px 0px",
                // rowGap: 6,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                }}
            >
                {weekDayNames &&
                    weekDayNames.map((dayName) => (
                        <p
                            key={dayName}
                            style={{
                                display: "flex",
                                textAlign: "center",
                                // width: "100%",
                                fontWeight: 400,
                                fontSize: 12,
                                color,
                            }}
                        >
                            {capitalize(dayName)}
                        </p>
                    ))}
            </div>
        </div>
    );
}
