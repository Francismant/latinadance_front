import React, { useState } from 'react';
import './Carte.scss';
import bachata from "../../images/profBachata.png"
import styles from "./Carte.module.scss"

function Carte1() {
    const [retourne, setRetourne] = useState(false);

    const retournerCarte = () => {
        setRetourne(!retourne);
    };

    return (
        <div className="carte-container">
            <div className={`carte ${retourne ? 'retournee' : ''}`} onClick={retournerCarte}>
                <div className="face face-avant">
                    <section className={`df fc jcc aic gap1 ${styles.border}`}>
                        <h3>BACHATA</h3>
                        <img src={bachata} alt="deux professeurs de danse" />
                        <p className={styles.fontFamilyCardName}>Lamine & Jasmine</p>
                        <p className="fsize1_25 tac">Cliquez sur la carte pour en savoir plus sur ces professeurs!</p>
                    </section>
                </div>
                <div className="face face-arriere">
                    <section className={styles.border}>
                        <p className={`fsize1_25 tac ${styles.sizeTextProf}`}>Lamine et Jasmine, débutants en bachata en France en 2012, ont perfectionné leur art en République dominicaine en 2016. Ils sont désormais instructeurs de renom, partageant leur amour pour cette danse à travers l'Europe, créant une connexion magnétique sur la piste de danse.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Carte1;