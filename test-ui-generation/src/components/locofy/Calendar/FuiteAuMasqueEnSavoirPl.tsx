import React, { FunctionComponent, useState, useCallback } from 'react';
import Recommandation from "./Recommandation.tsx";
import PortalPopup from "./PortalPopup.tsx";
import {useNavigate} from "react-router-dom";
import styles from './FuiteAuMasqueEnSavoirPl.module.css';

export type FuiteAuMasqueEnSavoirPlType = {
  	className?: string;
}



const FuiteAuMasqueEnSavoirPl:FunctionComponent<FuiteAuMasqueEnSavoirPlType> = ({ className="" }) => {
  	const [isRecommandationOpen, setRecommandationOpen] = useState(false);
  	const navigate = useNavigate();

  	const openRecommandation = useCallback(() => {
    		setRecommandationOpen(true);
  	}, []);

  	const closeRecommandation = useCallback(() => {
    		setRecommandationOpen(false);
  	}, []);


  	const onRecommandationTextClick = useCallback(() => {
    		navigate("/recommandation");
  	}, [navigate]);

  	return (<>
    		<div className={[styles.fuiteAuMasqueEnSavoirPl, className].join(' ')}>
      			<div className={styles.fuiteAuMasqueEnSavoirPlChild} />
      			<div className={styles.ceParamtreMesureContainer}>
        				<p className={styles.ceParamtreMesureLeNiveau}>
          					<span>{`Ce paramètre mesure le niveau des fuites d'air au masque. Il est lié à l’adaptation du masque au visage. La fuite est considérée comme normale si elle est `}</span>
          					<span className={styles.infrieure}>{`inférieure à `}</span>
        				</p>
        				<p className={styles.lmin}>24 L/min.</p>
      			</div>
      			<div className={styles.fuiteAuMasqueEnSavoirPlItem} />
      			<div className={styles.recommandationParent} onClick={openRecommandation}>
        				<div className={styles.recommandation} onClick={onRecommandationTextClick}>1 recommandation</div>
        				<img className={styles.groupChild} alt="" src="Group 699.svg" />
        				<img className={styles.groupItem} alt="" src="Vector 3.svg" />
      			</div>
      			<div className={styles.fuiteAuMasque}>Fuite au masque</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>25</div>
        				<div className={styles.lmin1}>L/min</div>
      			</div>
      			<div className={styles.jan2025}>3 jan. 2025</div>
      			<img className={styles.fuiteAuMasqueEnSavoirPlInner} alt="" src="Group 731.svg" />
      			<div className={styles.groupDiv}>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupInner} />
          					<div className={styles.okWrapper}>
            						<div className={styles.ok}>Ok</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.lineDiv} />
    		</div>
    		{isRecommandationOpen && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"





        				onOutsideClick={closeRecommandation}
        				>
        				<Recommandation onClose={closeRecommandation} />
      			</PortalPopup>
    		)}</>);
};

export default FuiteAuMasqueEnSavoirPl;
