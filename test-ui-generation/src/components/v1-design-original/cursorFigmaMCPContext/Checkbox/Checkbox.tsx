import React, { useCallback, KeyboardEvent } from "react";
import styles from "./Checkbox.module.css";
import { CheckIcon } from "./CheckIcon";

interface CheckboxProps {
    checked?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    name?: string;
    id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked = false, label, onChange, disabled = false, name, id }) => {
    const handleClick = useCallback(() => {
        if (!disabled && onChange) {
            onChange(!checked);
        }
    }, [checked, disabled, onChange]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                handleClick();
            }
        },
        [handleClick]
    );

    const checkboxClasses = [styles.checkboxInput, checked ? styles.checked : "", disabled ? styles.disabled : ""]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={styles.checkboxContainer}>
            <div
                className={checkboxClasses}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                role="checkbox"
                aria-checked={checked}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                id={id}
                data-name={name}
            >
                {checked && <CheckIcon className={styles.checkIcon} />}
            </div>
            {label && (
                <label className={styles.label} onClick={!disabled ? handleClick : undefined} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};
