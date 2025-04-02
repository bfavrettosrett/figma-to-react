import React from "react";
import styles from "./checkbox.module.css";

export default function Checkbox({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                {label}
            </label>
        </div>
    );
}
