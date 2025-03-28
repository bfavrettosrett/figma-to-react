import type { Meta, StoryObj } from "@storybook/react";

import PrescriptionCard from "./PrescriptionCard";

const meta = {
    component: PrescriptionCard,
} satisfies Meta<typeof PrescriptionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Prescription Card",
        subtitle: "Prescription Card",
        technician: "Prescription Card",
        startDate: "Prescription Card",
        endDate: "Prescription Card",
        hasNotification: true,
    },
};
