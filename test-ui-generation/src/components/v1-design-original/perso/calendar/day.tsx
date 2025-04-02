import React, { useState } from "react";

export interface CalendarDay {
    currentMonth: boolean;
    date: Date;
    month: number;
    number: number;
    selected: boolean;
    year: number;
}

export type Report = {
    valid: boolean;
    usageCompliant: boolean;
    leakCompliant: boolean;
};

export default function Day({ day, onDayClick }: { day: CalendarDay; onDayClick: (day: CalendarDay) => void }) {
    const formatedDate = `2025-10-22`;
    const [report, setReport] = useState<Report | null>(null);

    const grey = "#CDCDCD";
    const gray100 = "#E4E4E4";
    const gray200 = "#939393";
    const gray900 = "#373737";
    const green = "#91BA6E";
    const orange = "#D36A00";
    const neutral = "#FFFFFF";

    const handleDayPressed = (report: Report | null) => {
        if (report && report.valid) {
            onDayClick(day);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    minHeight: 36,
                    minWidth: 36,
                    borderRadius: 999,
                    margin: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: !report ? gray100 : !report.valid ? grey : report.usageCompliant ? green : orange,
                    opacity: day.currentMonth ? 1 : 0.125,
                }}
            >
                <p
                    style={{
                        display: "flex",
                        fontWeight: 600,
                        fontSize: 11,
                        color: !report ? gray200 : !report.valid ? gray900 : neutral,
                    }}
                >
                    {day.number}
                </p>
            </div>
            {report && day.currentMonth && (
                <div
                    style={{
                        position: "absolute",
                        height: 15,
                        width: 15,
                        borderWidth: 2,
                        borderRadius: 4,
                        right: 0,
                        bottom: 0,
                        borderColor: neutral,
                        backgroundColor: !report
                            ? gray200
                            : !report.valid
                            ? grey
                            : report.leakCompliant
                            ? green
                            : orange,
                    }}
                />
            )}
        </div>
    );
}
