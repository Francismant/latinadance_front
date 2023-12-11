import React, { useState } from 'react';
import './Carte.scss';
import salsa from "../../images/profSalsa.png"
import styles from "./Carte.module.scss"

function Carte() {
    const [retourne, setRetourne] = useState(false);

    const retournerCarte = () => {
        setRetourne(!retourne);
    };

    return (
        <div className="carte-container">
            <div className={`carte ${retourne ? 'retournee' : ''}`} onClick={retournerCarte}>
                <div className="face face-avant">
                    <section className={`df fc jcc aic gap1 ${styles.border}`}>
                        <h3> SALSA</h3>
                        <img src={salsa} alt="deux professeurs de danse" />
                        <p className={styles.fontFamilyCardName}>Andréa & Sylvia</p>
                        <p className="fsize1_25 tac">Cliquez sur la carte pour en savoir plus sur ces professeurs!</p>
                    </section>
                </div>
                <div className="face face-arriere">
                    <section className={styles.border}>
                        <p className={`fsize1_25 tac ${styles.sizeTextProf}`}>Andréa a débuté sa passion pour la salsa en France en 2010, se perfectionnant ensuite à La Havane en 2015, devenant une enseignante de renom. En 2021, elle a créé un duo passionné avec Sylvia, formant une connexion inoubliable sur la piste de danse et partageant leur amour pour la salsa à travers l'Europe.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Carte;