import styles from "./Planning.module.scss"

function Planning() {
    return (
        <div className={`df fc jcc aic ${styles.planningSize}`}>
            <h3 className={`${styles.day}`}>MARDI</h3>
            <h3 className={`${styles.salle}`}>SALLE 1</h3>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">19h30</p>
                <p className="fsize1_25">Salsa (niveau 1)</p>
            </div>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">20h30</p>
                <p className="fsize1_25">Salsa (niveau 2)</p>
            </div>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">21h30</p>
                <p className="fsize1_25">Salsa (niveau 3)</p>
            </div>
            <h3 className={`${styles.salle}`}>SALLE 2</h3>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">19h30</p>
                <p className="fsize1_25">Bachata (niveau 1)</p>
            </div>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">20h30</p>
                <p className="fsize1_25">Bachata (niveau 2)</p>
            </div>
            <div className={`df jcsa ${styles.border}`}>
                <p className="fsize1_25">21h30</p>
                <p className="fsize1_25">Bachata (niveau 3)</p>
            </div>
        </div>
    )
}

export default Planning