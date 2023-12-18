import { useState, useEffect } from "react";
import Carousel from "../../assets/components/Carousels/Carousel";
import styles from "./Home.module.scss";
import {
  tableauImageCarousel,
  tableauImageCarouselParticulier,
} from "../../data/Data";
import CarouselParticulier from "../../assets/components/Carousels/CarouselParticulier";
import { salsaData, bachataData, kizombaData } from "../../data/Data";
import StylesDance from "../../assets/components/StylesDance";
// import CookieConsent from "react-cookie-consent";
import { getInfosCours } from "../../apis/infos";

function Home() {
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
      {/* <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent> */}
      <section className={styles.topHome}>
        <div className={`df fc jcsb ${styles.backgroundTop}`}>
          <h1 className={styles.headerTitle}>COURS DE SALSA BACHATA KIZOMBA</h1>
        </div>
      </section>
      {infos.length > 0 && (
        <div className="warning">
          {" "}
          <h3 className="feedbackWarning center tac mb3pc">{infos[0].text}</h3>
        </div>
      )}
      <main className="center df fc gap5">
        <section>
          <h2 className="mb3pc">Les Soirées SBK</h2>
          <div className={`df jcc aic fw gap2`}>
            <Carousel data={tableauImageCarousel} />
            <p className="fsize1_25 size3">
              Les soirées Salsa sont généralement accompagnées de Bachata et de
              Kizomba, créant ainsi ce que l'on appelle les soirées SBK. C'est
              pourquoi nous avons pris la décision naturelle de vous proposer
              ces trois danses. En 2020, les cours Kizomba et Bachata ont été
              introduits pour offrir aux élèves, même ceux qui sont débutants,
              la possibilité de maîtriser rapidement ces trois styles de danse,
              afin qu'ils puissent profiter pleinement des soirées SBK.
            </p>
          </div>
        </section>
        <section>
          <h2 id="cours-collectifs" className="mb0">
            Les cours collectifs
          </h2>
        </section>
        <StylesDance {...salsaData} />
        <StylesDance {...bachataData} reverse />
        <StylesDance {...kizombaData} />
        <section>
          <h2 id="cours-particuliers">Les cours particuliers</h2>
          <div className="fsize1_25 tac gap2 mb3pc">
            <p>
              Votre emploi du temps ne vous permet pas la régularité d’un cours
              collectif hebdomadaire ?
            </p>
            <p>
              Vous préférez apprendre les bases avant de vous lancer en cours
              collectif ?
            </p>
            <p>Vous savez déjà danser mais votre conjoint est débutant ?</p>
          </div>
          <div className="fsize1_25 tac gap2 mb3pc">
            <p>
              Quel que soit votre niveau nos professeurs, vous donneront, avec
              leur pédagogie des cours adaptés à votre niveau et qui vous
              permettront de progresser très rapidement.
            </p>
            <p>
              Les cours individuels peuvent se faire au domicile dans une une
              limite 20km autour de Lille.
            </p>
          </div>
          <p className="fsize1_25 tac gap2 mb3pc">
            Voici ce que nous vous proposons au travers de nos cours :
          </p>
          <div className="fsize1_25 tac gap2 mb3pc">
            <p>Travail des pas de base</p>
            <p>Enchainements</p>
            <p>Guidage</p>
            <p>Coordination</p>
            <p>Musicalité</p>
            <p>Ouverture de bal (mariage)</p>
          </div>
          <div>
            <CarouselParticulier
              dataCarousel={tableauImageCarouselParticulier}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
