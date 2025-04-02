import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
    title: "Components/Perplexity/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
    args: {
        // checked: false,
        // onChange: (checked) => console.log("Checkbox changed:", checked),
        // label: "Default Checkbox",
    },
};
