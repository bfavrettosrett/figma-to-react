import type { Meta, StoryObj } from "@storybook/react";

import Group from "./Group";

const meta = {
    component: Group,
    parameters: {
        layout: 'centered',
      },
} satisfies Meta<typeof Group>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // checked: true,
        // onChange: () => {},
    },
};
