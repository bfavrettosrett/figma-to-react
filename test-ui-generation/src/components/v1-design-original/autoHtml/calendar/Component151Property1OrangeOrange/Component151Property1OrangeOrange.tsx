import styles from "./Component151Property1OrangeOrange.module.css";

export interface IComponent151Property1OrangeOrangeProps {
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

export const Component151Property1OrangeOrange = ({
  property1 = "vert-vert",
  text = "1",
  className,
  ...props
}: IComponent151Property1OrangeOrangeProps): JSX.Element => {
  const variantsClassName = styles["property-1-" + property1];

  return (
    <div
      className={
        styles.component151Property1OrangeOrange +
        " " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className={styles.ellipse24}></div>
      <div className={styles.one}>{text} </div>
      <div className={styles.rectangle204}></div>
    </div>
  );
};
