import { useState, useEffect } from "react";
import styles from "./Infos.module.scss";
// import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos, tarifsCouple, tarifsSolo } from "../../data/Data";
import CarteSalsa from "../../assets/components/Cards/CarteSalsa";
import CarteBachata from "../../assets/components/Cards/CarteBachata";
import CarteKizomba from "../../assets/components/Cards/CarteKizomba";
import Salles from "../../assets/components/Salles/Salles";
import Planning from "../../assets/components/Plannings/Planning";
import Planning2 from "../../assets/components/Plannings/Planning2";
import Planning3 from "../../assets/components/Plannings/Planning3";
import Planning4 from "../../assets/components/Plannings/Planning4";
import CarteTarifCouple from "../../assets/components/Cards/CarteTarifCouple";
import CarteTarifSolo from "../../assets/components/Cards/CarteTarifSolo";
// import { useContext } from "react";
// import { AuthContext } from "../../context";
import { getInfosCours } from "../../apis/infos";
import { NavLink } from "react-router-dom";

function Infos() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const infosData = await getInfosCours();
      setInfos(infosData);
    }

    fetchData();
  }, []);

  return (
    <>
      <section className={styles.topInfos}>
        <div className={`df fc jcsb ${styles.backgroundTopInfos}`}>
          <h1 className="pt3pc ml20">INFOS SUR L'ECOLE DE DANSE</h1>
          {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
        </div>
      </section>
      {infos.length > 0 && (
        <div className="warning">
          {" "}
          <h3 className="feedbackWarning center tac mb3pc">{infos[0].text}</h3>
        </div>
      )}
      <h2 className="mb3pc">Les professeurs</h2>
      <main className="center df fc gap2">
        <section className="df gap1 fw">
          <CarteSalsa />
          <CarteBachata />
          <CarteKizomba />
        </section>
        <section className="mb3pc">
          <h2 id="salles-lieu" className="mb0">
            Les Salles de Cours
          </h2>
          <h2>Le lieu</h2>
          <p className="mb3pc tac pl3pc pr3pc">
            Notre école située dans le vieux Lille au 16 rue Paul Ramadier est
            composée de trois grandes salles climatisées avec parquet et
            Miroirs. La salle est facile d’accès et un parking est à votre
            disposition.{" "}
          </p>
          <div className="df fc gap2">
            <Salles />
          </div>
        </section>
        <section className="mb3pc">
          <h2 id="planning">Les Plannings</h2>
          <div className="df fc gap2 fw">
            <div className="df jcsa fw gap1">
              <Planning />
              <Planning2 />
            </div>
            <div className="df jcsa fw gap1">
              <Planning3 />
              <Planning4 />
            </div>
          </div>
          <h3 className="fsize1_5 tac fweight4 mt3pc">
            Vendredi et Samedi soirée SBK de 22h30 à 02h00*
          </h3>
        </section>
        <section className="mb3pc">
          <h2 id="tarifs">Les tarifs**</h2>
          <div className="df fc gap2">
            <CarteTarifCouple tarifsCouple={tarifsCouple} />
            <CarteTarifSolo tarifsSolo={tarifsSolo} />
          </div>
          <div className={styles.noteCards}>
            <p>
              *Soirées SBK au tarif de 10€ en CB ou espèce(initiation gratuite
              et boissons softs à volonté) et 5€ pour les élèves.
            </p>
            <p>
              ** Le paiement s’effectue en un seul règlement par chèque à
              l’ordre de « Lille Latine Dance. »{" "}
            </p>
            <p>
              Vous pouvez cumuler l’adhésion et le montant des cours sur un seul
              chèque.
            </p>
            <p>
              Aucun remboursement ne pourra être effectué excepté suite à
              décision gouvernementale en cas de force majeure.
            </p>
            <p>Le certificat médical est obligatoire pour l’inscription.</p>
          </div>
          <h3 className="fsize1_5 tac fweight5">
            Concernant le tarif des cours particuliers, merci de nous contacter
            directement par téléphone ou via notre adresse mail que vous
            retrouverez dans l’onglet Contact du site ou en cliquant{" "}
            <span>
              <NavLink className={styles.forgotPassword} to="/contact">
                ici
              </NavLink>
            </span>{" "}
            .
          </h3>
        </section>
      </main>
    </>
  );
}

export default Infos;
