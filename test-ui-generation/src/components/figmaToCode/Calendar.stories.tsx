import type { Meta, StoryObj } from "@storybook/react";

import Calendar from "./Calendar";

const meta = {
    component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // checked: true,
        // onChange: () => {},
    },
};
