import React, { useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createNewPassword } from "../../apis/users";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [feedBackGood, setFeedBackGood] = useState("");
  const navigate = useNavigate();

  const yupSchema = yup.object({
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
  });

  const defaultValues = {
    password: "",
    confirmPassword: "",
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
      const { password } = values;
      const email = new URLSearchParams(window.location.search).get("email");
      console.log("email", email);
      await createNewPassword({ email, password });
      setFeedBackGood("Mot de passe modifié, vous allez être redirigé");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError("generic", { type: "generic", message: error.message });
    }
  }

  return (
    <main className="sizePage">
      <section className={styles.top}>
        <div className={styles.backgroundTop}></div>
        <h2 className="mt3pc">Réinitialisation du mot de passe</h2>
        <form className="df fc jcc aic" onSubmit={handleSubmit(submit)}>
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
          {feedBackGood && (
            <p className={`${styles.feedbackGood}`}>{feedBackGood}</p>
          )}
          {errors?.generic && (
            <p className={`${styles.feedback}`}>{errors.generic.message}</p>
          )}
          <button
            className={`btn btn-primary mt3pc mb3pc ${styles.buttonChangePassword}`}
            disabled={isSubmitting}
          >
            Enregistrer
          </button>
        </form>
      </section>
    </main>
  );
}

export default ResetPassword;
