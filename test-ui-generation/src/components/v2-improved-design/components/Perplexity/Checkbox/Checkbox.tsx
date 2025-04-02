import React, { useState } from "react";
import styles from "./checkbox.module.css";

const CheckboxComponent: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.container}>
            <div className={styles.checkboxWrapper} onClick={handleToggle}>
                <div className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}>
                    {isChecked && <span className={styles.checkmark}>✔</span>}
                </div>
                <span className={styles.label}>{isChecked ? "Checked" : "Unchecked"}</span>
            </div>
        </div>
    );
};

export default CheckboxComponent;
