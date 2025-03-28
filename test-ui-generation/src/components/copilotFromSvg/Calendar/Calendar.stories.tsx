import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";

const meta = {
    component: Calendar,
    parameters: {
        componentSubtitle: "A calendar component showing leaks and usage data",
    },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

const today = new Date();
const futureDate = new Date();
futureDate.setDate(today.getDate() + 5);

export const Default: Story = {
    args: {
        selectedDate: today,
        events: [
            {
                date: new Date(today.getFullYear(), today.getMonth(), 15),
                value: 120,
                type: "leak",
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), 20),
                value: 750,
                type: "usage",
            },
        ],
        onDateSelect: (date: Date) => console.log("Date selected:", date),
    },
};

export const WithMultipleEvents: Story = {
    args: {
        selectedDate: today,
        events: [
            {
                date: new Date(today.getFullYear(), today.getMonth(), 15),
                value: 120,
                type: "leak",
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), 15),
                value: 500,
                type: "usage",
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), 20),
                value: 50,
                type: "leak",
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), 25),
                value: 1200,
                type: "usage",
            },
        ],
        onDateSelect: (date: Date) => console.log("Date selected:", date),
    },
};

export const Empty: Story = {
    args: {
        selectedDate: today,
        events: [],
        onDateSelect: (date: Date) => console.log("Date selected:", date),
    },
};
