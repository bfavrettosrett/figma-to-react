import type { Meta, StoryObj } from "@storybook/react";

import CalendarTracker from "./CalendarTracker.tsx";

const meta = {
    component: CalendarTracker,
} satisfies Meta<typeof CalendarTracker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        month: "Octobre",
        days: [
            { day: 1, used: true },
            { day: 2, used: false },
            { day: 3, used: true },
            { day: 4, used: false },
        ],
    },
};
