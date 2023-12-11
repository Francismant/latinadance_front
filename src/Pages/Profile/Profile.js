import { useEffect, useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";
import AddNewEvent from "../Events/components/AddNewEvent";
import ChangeInfos from "./components/ChangeInfos";

function Profile() {
  const { user } = useContext(AuthContext);
  const [allTheDances, setAllTheDances] = useState([]);
  const [voteDance, setVoteDance] = useState([]);
  const [feedback, setFeedBack] = useState("");
  const [feedbackGood, setFeedBackGood] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("user", user);

  const navigate = useNavigate();

  useEffect(() => {
    async function getDances() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/dances/getDances"
        );
        if (response.ok) {
          const dances = await response.json();
          setAllTheDances(dances);
          console.log("dances", dances);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getDances();
  }, []);

  useEffect(() => {
    async function CountOfDances() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/dances/totalVote"
        );
        if (response.ok) {
          const dancingVote = await response.json();
          setVoteDance(dancingVote);
          console.log("vote", dancingVote);
        }
      } catch (error) {
        console.error(error);
      }
    }
    CountOfDances();
  }, []);

  const defaultValues = {
    dances: [],
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resetValues,
    mode: "onChange",
    // resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log("premierevalue", values);
    try {
      setFeedBack("");
      let data = { values, id: user.idUser };
      console.log("values_vote", data);
      const response = await fetch("http://localhost:8000/api/profile/vote", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const voteUser = await response.json();
        setFeedBackGood(voteUser.messageGood);
        // setIsSubmitted(true);
        // Désactivez le bouton après la soumission
        // reset();  // Ne réinitialisez pas avec des valeurs par défaut non définies
        reset(defaultValues);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function getDanceName(idDance) {
    switch (idDance) {
      case 1:
        return "Salsa";
      case 2:
        return "Bachata";
      case 3:
        return "Kizomba";
      default:
        return "Inconnu";
    }
  }

  async function resetVotes() {
    try {
      const response = await fetch(
        "http://localhost:8000/api/profile/resetVotes",
        {
          method: "PATCH",
        }
      );
      if (response.ok) {
        const resetResponse = await response.json();
        setVoteDance(null);
        setFeedBackGood(resetResponse.message);
        setTimeout(() => { setFeedBackGood(""); }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className={styles.top}>
      <div className={styles.backgroundTop}></div>
      <h3 className="tac pt3pc mb3pc">Bienvenue sur votre profil</h3>
      {user && user.admin === 1 && (
        <>
          <section className="flex-fill df fc jcc aic mb3pc mt3pc gap1">
            <p>Résultats des votes pour le mois en cours</p>
            <ul>
              {voteDance && voteDance.length > 0 ? (
                voteDance.map((dancingVote) => (
                  <li key={dancingVote.idDance}>
                    Danse: {getDanceName(dancingVote.idDance)}, Nombre de votes:{" "}
                    {dancingVote.CountOfDances}
                  </li>
                ))
              ) : (
                <li>Aucun vote</li>
              )}
            </ul>
            {feedbackGood && (
              <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
            )}
            <button onClick={resetVotes} className="btn btn-primary">
              Réinitialiser les votes
            </button>
          </section>
          <div className="df  fc aic">
            <h2 className="mb20 mt3pc">Ajouter un évènement</h2>
            <AddNewEvent />
          </div>
          <ChangeInfos />
        </>
      )}
      {user && user.admin === 0 && (
        <section>
          <h4 className="tac">
            Quelle danse souhaiteriez vous voir mise en avant lors de nos
            prochains stages ?
          </h4>
          <p className="tac fsize08">
            (Les votes ne sont plus comptabilisés après le 20 du mois en cours)
          </p>
          <div className="flex-fill df jcc aic mb3pc mt3pc">
            <form onSubmit={handleSubmit(submit)}>
              <div className="df fc mb10">
                <label className="mb10 df jcc aic gap1">
                  <span className="flex-fill">Dances</span>
                </label>
                <ul>
                  <li className="mb10">
                    <select className="mr10" {...register(`dances`)}>
                      <option value="" disabled>
                        Faites votre choix
                      </option>
                      {allTheDances.map((dance) => (
                        <option key={dance.idDance} value={dance.idDance}>
                          {dance.nameDance}
                        </option>
                      ))}
                    </select>
                  </li>
                </ul>
              </div>
              {/* {feedback && <p className={`${styles.feedback} mb20`}>{feedback}</p>} */}
              {feedbackGood && (
                <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
              )}
              <button className="btn btn-primary" disabled={isSubmitted}>
                Envoyer
              </button>
            </form>
          </div>
          {/* <p className="tac">
            {user.idDance !== null ? (
              `Vous avez déjà voté pour la ${getDanceName(user.idDance)}`
            ) : (
              "Aucun vote n'est pris en compte"
            )}
          </p> */}
          <h4 className="tac mb3pc">
            Cliquez{" "}
            <span>
              <NavLink className={styles.forgotPassword} to="/forgotPassword">
                ici
              </NavLink>
            </span>{" "}
            si vous souhaitez modifier votre mot de passe
          </h4>
          <h4 className="tac mb3pc">
            Cliquez{" "}
            <span>
              <NavLink className={styles.forgotPassword} to="/Delete">
                ici
              </NavLink>
            </span>{" "}
            si vous souhaitez supprimer votre compte
          </h4>
        </section>
      )}
    </main>
  );
}

export default Profile;
