import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
    title: "Components/CursorFigmaMCP/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
        onChange: (checked) => console.log("Checkbox changed:", checked),
        label: "Default Checkbox",
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        onChange: (checked) => console.log("Checkbox changed:", checked),
        label: "Checked Checkbox",
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        onChange: (checked) => console.log("Checkbox changed:", checked),
        label: "Disabled Checkbox",
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        checked: true,
        onChange: (checked) => console.log("Checkbox changed:", checked),
        label: "Disabled Checked Checkbox",
        disabled: true,
    },
};
