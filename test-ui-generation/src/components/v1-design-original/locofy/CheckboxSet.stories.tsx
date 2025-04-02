import type { Meta, StoryObj } from "@storybook/react";

import CheckboxSet from "./CheckboxSet";

const meta = {
    component: CheckboxSet,
    // parameters: {
    //     layout: 'centered',
    //   },
} satisfies Meta<typeof CheckboxSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // checked: true,
        // onChange: () => {},
    },
};
