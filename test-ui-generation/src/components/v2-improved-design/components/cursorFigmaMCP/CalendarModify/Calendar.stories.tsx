import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";

const meta = {
    title: "Components/CalendarModify",
    component: Calendar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        month: "Octobre",
        selectedDate: 15,
        indicators: [
            { date: 1, type: "utilisation", color: "#7FAD57" },
            { date: 2, type: "utilisation", color: "#7FAD57" },
            { date: 3, type: "utilisation", color: "#7FAD57" },
            { date: 8, type: "fuite", color: "#D36A00" },
            { date: 9, type: "fuite", color: "#D36A00" },
            { date: 10, type: "fuite", color: "#D36A00" },
        ],
    },
};

export const WithDateSelection: Story = {
    args: {
        month: "Octobre",
        selectedDate: 5,
        indicators: [
            { date: 5, type: "utilisation", color: "#7FAD57" },
            { date: 12, type: "fuite", color: "#D36A00" },
        ],
        onDateSelect: (date) => {
            console.log(`Selected date: ${date}`);
        },
    },
};

export const WithDifferentMonth: Story = {
    args: {
        month: "Novembre",
        selectedDate: 10,
    },
};
