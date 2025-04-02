import React, { FunctionComponent } from 'react';
import styles from './Recommandation.module.css';

export type RecommandationType = {
  	className?: string;
}



const Recommandation:FunctionComponent<RecommandationType> = ({ className="" }) => {
  	return (
    		<div className={[styles.recommandation, className].join(' ')}>
      			<div className={styles.voiciQuelquesRecommandationsContainer}>
        				<p className={styles.voiciQuelquesRecommandations}>
          					<span className={styles.vrifiezLe}>Voici quelques recommandations pour vous aider à passer une meilleure nuit :</span>
        				</p>
        				<p className={styles.voiciQuelquesRecommandations}>
          					<span className={styles.vrifiezLe}>&nbsp;</span>
        				</p>
        				<ul className={styles.vrifiezLeBonTatDeVotre}>
          					<li className={styles.essayezDeRajusterVotreMas}>
            						<span className={styles.vrifiezLe}>Vérifiez le</span>
            						<span className={styles.span}>{` `}</span>
            						<span className={styles.span}>
              							<span className={styles.bonTatDe}>bon état de votre bulle</span>
            						</span>
            						<span className={styles.vrifiezLe}> et nettoyez-la si besoin.</span>
          					</li>
          					<li className={styles.essayezDeRajusterVotreMas}>
            						<span className={styles.vrifiezLe}>Essayez de</span>
            						<span className={styles.span}>{` `}</span>
            						<span className={styles.span}>
              							<span className={styles.bonTatDe}>réajuster votre masque</span>
            						</span>
            						<span className={styles.vrifiezLe}> du masque.</span>
          					</li>
          					<li className={styles.essayezDeRajusterVotreMas}>
            						<span className={styles.vrifiezLe}>Si vous avez une rhinite ou un rhume, le niveau de fuites élevé est peut-être lié.</span>
          					</li>
          					<li className={styles.essayezDeRajusterVotreMas}>
            						<span className={styles.vrifiezLe}>Si toutefois le niveau de fuites reste élevé au-delà de 10 jours, n’hésitez pas à contacter votre prestataire de santé.</span>
          					</li>
          					<li>
            						<span className={styles.vrifiezLe}>Si vous avez un humidificateur ou une mentonnière, pensez à les utiliser.</span>
          					</li>
        				</ul>
      			</div>
      			<div className={styles.recommandations}>Recommandations</div>
      			<img className={styles.recommandationChild} alt="" src="Group 713.svg" />
      			<img className={styles.recommandationItem} alt="" src="Group 731.svg" />
      			<div className={styles.recommandationInner}>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupChild} />
          					<div className={styles.okWrapper}>
            						<div className={styles.ok}>Ok</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Recommandation;
