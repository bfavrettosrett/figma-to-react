import type { Meta, StoryObj } from "@storybook/react";
import Property1Checked from "./Checkbox";
import React from "react";

const meta: Meta<typeof Property1Checked> = {
    // title: "Components/Property1Checked",
    component: Property1Checked,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
      },
    argTypes: {
        checked: {
            control: "boolean",
            description: "Controls the checked state of the component",
        },
        disabled: {
            control: "boolean",
            description: "Controls whether the component is disabled",
        },
        onChange: {
            description: "Callback function triggered when the checked state changes",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Property1Checked>;

export const Default: Story = {
    args: {
        checked: false,
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
    },
};

export const CheckedDisabled: Story = {
    args: {
        checked: true,
        disabled: true,
    },
};

export const Interactive: Story = {
    args: {
        checked: false,
        disabled: false,
    },
    render: (args) => {
        const [checked, setChecked] = React.useState(false);
        return <Property1Checked {...args} checked={checked} onChange={(newChecked) => setChecked(newChecked)} />;
    },
};

export const Group: Story = {
    render: () => {
        const [checkedItems, setCheckedItems] = React.useState({
            item1: false,
            item2: false,
            item3: true,
        });

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Property1Checked
                    checked={checkedItems.item1}
                    onChange={(checked) => setCheckedItems((prev) => ({ ...prev, item1: checked }))}
                />
                <Property1Checked
                    checked={checkedItems.item2}
                    onChange={(checked) => setCheckedItems((prev) => ({ ...prev, item2: checked }))}
                />
                <Property1Checked
                    checked={checkedItems.item3}
                    onChange={(checked) => setCheckedItems((prev) => ({ ...prev, item3: checked }))}
                />
            </div>
        );
    },
};
