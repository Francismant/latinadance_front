import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createUser } from "../../../apis/users";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [feedBackGood, setFeedBackGood] = useState("");

  const yupSchema = yup.object({
    name: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "Le champ doit contenir au minimum 2 caractères")
      .max(12),
    // email: yup
    //   .string()
    //   .required("Le champ est obligatoire")
    //   .matches(
    //     /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //     "Votre email n'est pas valide"
    //   ),
    password: yup
      .string()
      .required("Le champ est obligatoire")
      .min(5, "Mot de passe trop court")
      .max(10, "Mot de passe trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password", "")],
        "Les mots de passe ne correspondent pas"
      ),
    acceptedTerms: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les conditions générales"),
  });

  const defaultValues = {
    name: "",
    password: "",
    confirmPassword: "",
    // email: "",
    acceptedTerms: false,
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
    mode: "onChange",
  });

  async function submit(values) {
    console.log(values);
    try {
      clearErrors();
      const { name, password } = values;
      const email = new URLSearchParams(window.location.search).get("email");
      console.log("email", email);
      await createUser({ email, userValues: { name, password } });
      setFeedBackGood("Inscription réussie, vous allez être redirigé");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError("generic", { type: "generic", message: "Email déja existant" });
    }
  }

  return (
    <section className={styles.top}>
      <div className={styles.backgroundTop}></div>
      <div className="flex-fill df fc jcc aic mb3pc">
        <h2 className="mt3pc ">Inscription</h2>
        <form className="df fc jcc aic" onSubmit={handleSubmit(submit)}>
          <div className="df fc mb10">
            <label htmlFor="name" className="mb10">
              nom
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors?.name && (
              <p className={`${styles.feedback}`}>{errors.name.message}</p>
            )}
          </div>
          {/* <div className="df fc mb10">
            <label htmlFor="email" className="mb10">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
            {errors?.email && (
              <p className={`${styles.feedback}`}>{errors.email.message}</p>
            )}
          </div> */}
          <div className="df fc mb10">
            <label htmlFor="password" className="mb10">
              Password
            </label>
            <input type="password" id="password" {...register("password")} />
            {errors?.password && (
              <p className={`${styles.feedback}`}>{errors.password.message}</p>
            )}
          </div>
          <div className="df fc mb10">
            <label htmlFor="confirmPassword" className="mb10">
              Confirmation Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword && (
              <p className={`${styles.feedback}`}>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <div className={`df aic mt20 ${styles.checkbox}`}>
              <label className={styles.labelCheckbox} htmlFor="acceptedTerms">
                Accepter les{" "}
                <Link to="/Conditions" target="_blank">
                  <span className="fweight6">conditions générales</span>
                </Link>
              </label>
              <input
                className={styles.inputCheckbox}
                type="checkbox"
                id="acceptedTerms"
                {...register("acceptedTerms")}
              />
            </div>
            {errors?.acceptedTerms && (
              <p className={`${styles.feedback}`}>
                Vous devez accepter les conditions générales
              </p>
            )}
          </div>
          {feedBackGood && (
            <p className={`${styles.feedbackGood}`}>{feedBackGood}</p>
          )}
          {errors?.generic && (
            <p className={`${styles.feedback}`}>{errors.generic.message}</p>
          )}
          <button
            className={`btn btn-primary mt3pc mb3pc ${styles.button}`}
            disabled={isSubmitting}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
