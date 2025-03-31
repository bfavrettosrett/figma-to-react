import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";

const meta = {
    component: Calendar,
    parameters: {
        layout: 'centered',
      },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        month: "Octobre",
        // checked: true,
        // onChange: () => {},
    },
};
