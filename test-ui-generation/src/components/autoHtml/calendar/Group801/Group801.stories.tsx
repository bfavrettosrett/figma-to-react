import type { Meta, StoryObj } from "@storybook/react";

import { Group801 } from "./Group801";

const meta = {
    component: Group801,
    parameters: {
        layout: 'centered',
      },
} satisfies Meta<typeof Group801>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // checked: true,
        // onChange: () => {},
    },
};
