"use client";

import React from "react";
import styles from "./Checkbox.module.css";

interface Property1CheckedProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

function Property1Checked({ checked = false, onChange, disabled = false }: Property1CheckedProps) {
    const handleClick = () => {
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!disabled && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onChange?.(!checked);
        }
    };

    return (
        <button
            className={styles.property1Checked}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="checkbox"
            aria-checked={checked}
            aria-disabled={disabled}
            disabled={disabled}
            type="button"
        >
            <img
                src={
                    checked
                        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/70bb4cd102aef0171bfc03a5cfb6c8d54b352d9b?placeholderIfAbsent=true&apiKey=f7dec418b0084b50aa4d419a1b6402fe"
                        : "URL_2"
                }
                className={styles.img}
                alt=""
                aria-hidden="true"
            />
            <span className={styles.statusText}>{checked ? "Checked" : "Unchecked"}</span>
        </button>
    );
}

export default Property1Checked;
