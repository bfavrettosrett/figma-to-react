import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    checked: boolean;
    onChange: () => void;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, ...props }) => (
    <div className={styles.container} onClick={onChange} {...props}>
        <input type="checkbox" checked={checked} onChange={() => {}} className={styles.hiddenCheckbox} />
        <div className={`${styles.checkbox} ${checked ? styles.checked : ""}`}>
            <svg className={`${styles.checkIcon} ${checked ? styles.visible : ""}`} viewBox="0 0 24 24">
                <path d="M9.0002 14.1701L4.8302 10.0001L3.4102 11.4101L9.0002 17.0001L21.0002 5.0001L19.5902 3.5901L9.0002 14.1701Z" />
            </svg>
        </div>
        {label && <span className={styles.label}>{label}</span>}
    </div>
);

export default Checkbox;
