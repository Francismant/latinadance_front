import React from 'react';
import styles from "./CarteTarif.module.scss"

function CarteTarifCouple({ tarifsCouple }) {
  return (
    <div className="df jcsa fw">
      {tarifsCouple.map((item, idx) => (
        <div className={styles.card}>
          <div key={idx} className={`df fc jcc aic gap1 fw ${styles.bg}`}>
            <p>{item.title}</p>
            <div className={styles.line}></div>
            <p>{item.tarif}</p>
            <p>{item.info}</p>
            <p>{item.adh}</p>
          </div>
          <div className={styles.blob}></div>
        </div>
      ))}
    </div>

  );
}
export default CarteTarifCouple;

