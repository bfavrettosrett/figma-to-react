import React, { useState } from "react";
import Days from "./days";
import WeekDays from "./WeekDays";
import { CalendarDay } from "./day";

export default function Calendar({
    displayMonth = new Date().getMonth() + 1,
    displayYear = new Date().getFullYear(),
    onDayPress,
}: {
    displayMonth?: number;
    displayYear?: number;
    onDayPress: (day: CalendarDay) => void;
}) {
    const [firstDayOfCurrentMonth] = useState(new Date(displayYear, displayMonth - 1));
    const monthName = firstDayOfCurrentMonth.toLocaleString("default", { month: "long" });
    const backgroundColor = "#FFFFFF";
    const color = "#102C79";
    const green = "#91BA6E";
    const neutral = "#FFFFFF";

    const handleDayClick = (day: CalendarDay) => {
        onDayPress(day);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto 8px",
                width: "100%",
                height: "100%",
                maxWidth: "362px",
                maxHeight: "393px",
                alignItems: "center",
                padding: "12px 12px 33px 12px",
                borderRadius: 18,
                backgroundColor,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    // height: "50px",
                    // marginBottom: 16,
                    padding: "12px 0px 12px",
                }}
            >
                <span style={{ color, fontSize: 21, lineHeight: "38px", fontWeight: 700 }}>Octobre</span>
            </div>
            <WeekDays />
            <Days day={firstDayOfCurrentMonth} handleDayClick={(day) => handleDayClick(day)} />
            <div style={{ width: "100%", padding: "0px 12px", marginTop: 25 }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "65%",
                        maxWidth: 220,
                        columnGap: 15,
                        // borderWidth: 1,
                        // justifyContent: "space-around",
                        // alignContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-around",
                            // width: "50%",
                        }}
                    >
                        <svg height={24} width={24} style={{ borderWidth: 1 }}>
                            <circle cx="12" cy="12" r="12" fill={green} />
                        </svg>
                        <p style={{ marginLeft: 5, fontWeight: 600 }}>Usage</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-around",
                            // width: "50%",
                        }}
                    >
                        <div
                            style={{
                                borderColor: neutral,
                                backgroundColor: green,
                                height: 15,
                                width: 15,
                                borderWidth: 2,
                                borderRadius: 4,
                            }}
                        />
                        <p
                            style={{
                                marginLeft: 5,
                                fontWeight: 600,
                            }}
                        >
                            Fuites
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
