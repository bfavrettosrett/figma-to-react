import PropTypes from "prop-types";
import React from "react";
import check from "./check.svg";
import classes from "./checkbox.module.css";

interface Props {
    property1: "checked" | "unchecked";
    className: any;
}

export const Checkbox = ({ property1, className }: Props): React.JSX.Element => {
    return (
        <div className={`${classes.checkbox} ${className}`}>
            <div className={classes["checkbox-wrapper"]}>
                <div className={classes.div}>
                    {property1 === "checked" && <img className={classes.check} alt="Check" src={check} />}
                </div>
            </div>

            <div className={`${classes.unchecked} ${classes[property1]}`}>
                {property1 === "unchecked" && <>Unchecked</>}

                {property1 === "checked" && <>Checked</>}
            </div>
        </div>
    );
};

Checkbox.propTypes = {
    property1: PropTypes.oneOf(["checked", "unchecked"]),
};
