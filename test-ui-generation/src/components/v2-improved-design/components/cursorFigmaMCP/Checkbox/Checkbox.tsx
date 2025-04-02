import React from "react";
import styles from "./checkbox.module.css";

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled = false }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
