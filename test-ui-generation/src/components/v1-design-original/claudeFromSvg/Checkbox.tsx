import React, { forwardRef } from "react";
import "./Checkbox.module.css";

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 12L2 8" stroke="#161E46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4L6 12L2 8" stroke="#161E46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VestalisCheckbox = forwardRef(({ label, secondaryLabel, className = "", ...props }, ref) => {
    return (
        <label className={`vestalis-checkbox-container ${className}`}>
            <input type="checkbox" className="vestalis-checkbox-input" ref={ref} {...props} />
            <div className="vestalis-checkbox-checkmark">
                <CheckIcon />
            </div>
            <div className="vestalis-checkbox-label-container">
                <span className="vestalis-checkbox-label">{label}</span>
                {secondaryLabel && <span className="vestalis-checkbox-secondary-label">{secondaryLabel}</span>}
            </div>
        </label>
    );
});

VestalisCheckbox.displayName = "VestalisCheckbox";

export default VestalisCheckbox;
