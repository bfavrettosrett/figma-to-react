import React, { FunctionComponent } from 'react';
import styles from './CheckboxSet.module.css';


const CheckboxSet:FunctionComponent = () => {
  	return (
    		<div className={styles.checkbox}>
      			<div className={styles.property1unchecked}>
        				<img className={styles.checkboxIcon} alt="" src="checkbox.svg" />
        				<div className={styles.unchecked}>
          					<p className={styles.unchecked1}>Unchecked</p>
        				</div>
      			</div>
      			<div className={styles.property1checked}>
        				<img className={styles.checkboxIcon} alt="" src="checkbox.svg" />
        				<div className={styles.unchecked}>Checked</div>
      			</div>
    		</div>);
};

export default CheckboxSet;
