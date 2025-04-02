import React, { FunctionComponent, useState, useCallback } from "react";
import Question from "./Question.tsx";
import PortalPopup from "./PortalPopup.tsx";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
    const [isQuestion9Open, setQuestion9Open] = useState(false);

    const openQuestion9 = useCallback(() => {
        setQuestion9Open(true);
    }, []);

    const closeQuestion9 = useCallback(() => {
        setQuestion9Open(false);
    }, []);

    return (
        <>
            <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.octobre}>Octobre</div>
                <div className={styles.lunParent}>
                    <div className={styles.lun}>Lun.</div>
                    <div className={styles.mar}>Mar.</div>
                    <div className={styles.mer}>Mer.</div>
                    <div className={styles.jeu}>Jeu.</div>
                    <div className={styles.ven}>Ven.</div>
                    <div className={styles.sam}>Sam.</div>
                    <div className={styles.dim}>Dim.</div>
                </div>
                <div className={styles.component151Parent} onClick={openQuestion9}>
                    <div className={styles.component151}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>5</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component162}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>12</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component169}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>19</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component176}>
                        <div className={styles.component176Child} />
                        <div className={styles.div}>26</div>
                    </div>
                    <div className={styles.component152}>
                        <div className={styles.component152Child} />
                        <div className={styles.div}>6</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component163}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>13</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component170}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>20</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component177}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>27</div>
                    </div>
                    <div className={styles.component153}>
                        <div className={styles.component152Child} />
                        <div className={styles.div}>7</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component164}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>14</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component171}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>21</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component178}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>28</div>
                    </div>
                    <div className={styles.component154}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>8</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component165}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>15</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component172}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>22</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component179}>
                        <div className={styles.component176Child} />
                        <div className={styles.div}>29</div>
                    </div>
                    <div className={styles.component155}>
                        <div className={styles.component155Child} />
                        <div className={styles.div}>9</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component166}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>16</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component173}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>23</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component180}>
                        <div className={styles.component176Child} />
                        <div className={styles.div}>30</div>
                    </div>
                    <div className={styles.component156}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>10</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component167}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>17</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component174}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>24</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component181}>
                        <div className={styles.component176Child} />
                        <div className={styles.div}>31</div>
                    </div>
                    <div className={styles.component157}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>11</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component168}>
                        <div className={styles.component169Child} />
                        <div className={styles.div}>18</div>
                        <div className={styles.component169Item} />
                    </div>
                    <div className={styles.component175}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>25</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component158}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>1</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component159}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>2</div>
                        <div className={styles.component162Item} />
                    </div>
                    <div className={styles.component160}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>3</div>
                        <div className={styles.component151Item} />
                    </div>
                    <div className={styles.component161}>
                        <div className={styles.component151Child} />
                        <div className={styles.div}>4</div>
                        <div className={styles.component151Item} />
                    </div>
                </div>
                <div className={styles.groupParent}>
                    <div className={styles.ellipseParent}>
                        <div className={styles.groupItem} />
                        <div className={styles.utilisation}>Utilisation</div>
                    </div>
                    <div className={styles.fuitesParent}>
                        <div className={styles.fuites}>Fuites</div>
                        <div className={styles.groupInner} />
                    </div>
                </div>
            </div>
            {isQuestion9Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeQuestion9}
                >
                    <Question onClose={closeQuestion9} />
                </PortalPopup>
            )}
        </>
    );
};

export default Group;
