import React, { useState } from 'react';
import './Carte.scss';
import kizomba from "../../images/profKizomba.png"
import styles from "./Carte.module.scss"

function Carte2() {
    const [retourne, setRetourne] = useState(false);

    const retournerCarte = () => {
        setRetourne(!retourne);
    };

    return (
        <div className="carte-container">
            <div className={`carte ${retourne ? 'retournee' : ''}`} onClick={retournerCarte}>
                <div className="face face-avant">
                    <section className={`df fc jcc aic gap1 ${styles.border}`}>
                        <h3>KIZOMBA</h3>
                        <img src={kizomba} alt="deux professeurs de danse" />
                        <p className={styles.fontFamilyCardName}>Korke & Judith</p>
                        <p className="fsize1_25 tac">Cliquez sur la carte pour en savoir plus sur ces professeurs!</p>
                    </section>
                </div>
                <div className="face face-arriere">
                    <section className={styles.border}>
                        <p className={`fsize1_25 tac ${styles.sizeTextProf}`}>Judith est une danseuse passionnée qui a débuté en 2011 en France, explorant divers styles de danse. Après avoir perfectionné ses compétences à Lisbonne, elle est retournée en France en 2017 pour enseigner la kizomba et le semba, puis en 2022, elle a formé un partenariat avec Korke, partageant une passion commune pour la danse.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Carte2;