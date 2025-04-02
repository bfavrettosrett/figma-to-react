import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CheckIndicator from "./CheckIndicator";

const meta: Meta<typeof CheckIndicator> = {
    title: "Components/BuilderIO/CheckIndicator",
    component: CheckIndicator,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        imageUrl: {
            control: "text",
            description: "The URL of the image to display",
        },
        text: {
            control: "text",
            description: "The text to display",
        },
        className: {
            control: "text",
            description: "Additional CSS classes to apply to the component",
        },
    },
};

export default meta;
type Story = StoryObj<typeof CheckIndicator>;

export const Default: Story = {
    args: {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe",
        text: "Checked",
        className: "",
    },
};

export const Checked: Story = {
    args: {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe",
        text: "Checked",
        className: "",
    },
};

export const Disabled: Story = {
    args: {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe",
        text: "Checked",
        className: "",
    },
};

export const CheckedDisabled: Story = {
    args: {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe",
        text: "Checked",
        className: "",
    },
};
