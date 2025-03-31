import React from "react"
import styles from "./Component151Property1Blanc.module.css";

export interface IComponent151Property1BlancProps {
  property1?:
    | "vert-vert"
    | "vert-orange"
    | "orange-orange"
    | "orange-vert"
    | "gris-vert"
    | "vert-gris"
    | "gris"
    | "blanc"
    | "gris-gris"
    | "orange-gris"
    | "gris-orange"
    | "aujourdhui";
  text?: string;
  className?: string;
}

export const Component151Property1Blanc = ({
  property1 = "vert-vert",
  text = "1",
  className,
  ...props
}: IComponent151Property1BlancProps): JSX.Element => {
  const variantsClassName = styles["property-1-" + property1];

  return (
    <div
      className={
        styles.component151Property1Blanc +
        " " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className={styles.ellipse24}></div>
      <div className={styles.one}>{text} </div>
    </div>
  );
};
