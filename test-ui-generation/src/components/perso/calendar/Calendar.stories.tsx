import type { Meta, StoryObj } from "@storybook/react";

import Calendar from "./index.tsx";

const meta = {
    component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        displayMonth: 10,
        displayYear: 2024,
        onDayPress(day) {
            console.log(day)
        },
    },
};
