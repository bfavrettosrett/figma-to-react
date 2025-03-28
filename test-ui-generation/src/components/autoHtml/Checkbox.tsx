import React from "react";
import styles from "./Checkbox.module.css";
import checkIcon from "../../assets/checkIcon.svg";
export interface ICheckboxProps {
    property1?: "checked" | "unchecked";
    className?: string;
}

export const Checkbox = ({ property1 = "unchecked", className, ...props }: ICheckboxProps): React.JSX.Element => {
    const variantsClassName = styles["property-1-" + property1];

    return (
        <div className={styles.checkbox + " " + className + " " + variantsClassName}>
            <div className={styles.checkbox2}>
                <div className={styles.checkbox3}></div>
                {property1 === "checked" && (
                    <>
                        <img className={styles.check} src={checkIcon} />
                    </>
                )}
            </div>
            {property1 === "checked" && (
                <>
                    <div className={styles.checked}>Checked </div>
                </>
            )}
            {property1 === "unchecked" && (
                <>
                    <div className={styles.unchecked}>
                        Unchecked
                        <br />{" "}
                    </div>
                </>
            )}
        </div>
    );
};
export default Checkbox;
