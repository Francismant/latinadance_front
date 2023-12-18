import salle1 from "../../images/Salle1.png"
import salle2 from "../../images/Salle2.png"
import salle3 from "../../images/Salle3.png"
import MapComponent from "../MapComponent";
import styles from "./Salles.module.scss"

function Salles() {
  return (
    <>
      <div className="df jcsa fw gap2">
        <div className={styles.containerSalle}>
          <img className={styles.boxSalle} src={salle1} alt="salle de danse avec parquet et mirroir" />
        </div>
        <div className={styles.containerSalle}>
          <img className={styles.boxSalle} src={salle2} alt="salle de danse avec parquet et mirroir" />
        </div>
      </div>
      <div className="df jcsa fw">
        <div className={styles.containerSalle}>
          <img className={styles.boxSalle} src={salle3} alt="salle de danse avec parquet et mirroir" />
        </div>
        <MapComponent/>
      </div>
    </>
  )
}

export default Salles