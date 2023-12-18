import { useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";


function Delete() {
    const { user, logout } = useContext(AuthContext);

    const [feedback, setFeedBack] = useState("");
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            let data = { id: user.idUser };
            console.log("data", data);
            await fetch(`http://localhost:8000/api/users/deleteUser/${user.idUser}`, {
                method: "DELETE",
            });
            setFeedBack("votre compte a bien été supprimé");
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className={styles.top}>
            <h3 className="mt3pc mb3pc tac">Vous êtes sur le point de supprimer votre compte</h3>
            {feedback && <p className={`${styles.feedback} tac`}>{feedback}</p>}
            <button onClick={() => { handleDelete(); logout(); }} className="btn btn-primary m0auto">
                Supprimer mon compte
            </button>
        </section>
    );
}

export default Delete;