import type { Meta, StoryObj } from "@storybook/react";

import InputDesign from "./InputDesign.tsx";

const meta = {
    component: InputDesign,
} satisfies Meta<typeof InputDesign>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // checked: true,
        // onChange: () => {},
    },
};
