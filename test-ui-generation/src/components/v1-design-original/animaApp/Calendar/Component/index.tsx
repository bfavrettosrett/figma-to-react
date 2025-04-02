import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css";

interface Props {
    property1:
        | "gris-vert"
        | "orange-gris"
        | "orange-vert"
        | "vert-vert"
        | "vert-gris"
        | "blanc"
        | "gris-gris"
        | "aujourdhui"
        | "gris-orange"
        | "vert-orange"
        | "gris"
        | "orange-orange";
    text: string;
}

export const Component = ({ property1, text = "1" }: Props): React.JSX.Element => {
    return (
        <div className={styles.component}>
            <div className={styles["overlap-group"]}>
                {(property1 === "gris-gris" ||
                    property1 === "gris-orange" ||
                    property1 === "gris-vert" ||
                    property1 === "orange-gris" ||
                    property1 === "orange-orange" ||
                    property1 === "orange-vert" ||
                    property1 === "vert-gris" ||
                    property1 === "vert-orange" ||
                    property1 === "vert-vert") && <div className={`${styles.ellipse} ${styles[property1]}`} />}

                <div className={`${styles.element} ${styles[`property-1-${property1}`]}`}>{text}</div>

                {(property1 === "gris-gris" ||
                    property1 === "gris-orange" ||
                    property1 === "gris-vert" ||
                    property1 === "orange-gris" ||
                    property1 === "orange-orange" ||
                    property1 === "orange-vert" ||
                    property1 === "vert-gris" ||
                    property1 === "vert-orange" ||
                    property1 === "vert-vert") && (
                    <div className={`${styles.rectangle} ${styles[`property-1-0-${property1}`]}`} />
                )}
            </div>
        </div>
    );
};

Component.propTypes = {
    property1: PropTypes.oneOf([
        "gris-vert",
        "orange-gris",
        "orange-vert",
        "vert-vert",
        "vert-gris",
        "blanc",
        "gris-gris",
        "aujourdhui",
        "gris-orange",
        "vert-orange",
        "gris",
        "orange-orange",
    ]),
    text: PropTypes.string,
};
