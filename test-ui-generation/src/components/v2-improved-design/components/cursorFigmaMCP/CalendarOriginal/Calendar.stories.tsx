import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";

const meta = {
    title: "Components/CalendarOriginal",
    component: Calendar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateDays = () => {
    const days = [];
    // Jours du mois précédent
    for (let i = 30; i <= 31; i++) {
        days.push({ date: i, isCurrentMonth: false, isToday: false });
    }
    // Jours du mois courant
    for (let i = 1; i <= 31; i++) {
        days.push({
            date: i,
            isCurrentMonth: true,
            isToday: i === 15,
            hasUtilisation: i % 3 === 0,
            hasFuite: i % 7 === 0,
        });
    }
    // Jours du mois suivant
    for (let i = 1; i <= 4; i++) {
        days.push({ date: i, isCurrentMonth: false, isToday: false });
    }
    return days;
};

export const Default: Story = {
    args: {
        month: "Octobre",
        year: 2023,
        days: generateDays(),
        onDayClick: (date) => console.log("Clicked date:", date),
    },
};

export const WithoutInteractions: Story = {
    args: {
        month: "Octobre",
        year: 2023,
        days: generateDays(),
    },
};
