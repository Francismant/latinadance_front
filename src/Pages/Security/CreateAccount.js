import React, { useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function CreateAccount() {
  const [feedback, setFeedBack] = useState("");
  const [feedbackGood, setFeedbackGood] = useState("");
  // const [changeFeedback, setChangeFeedback] = useState("");

  const yupSchema = yup.object({
    email: yup
      .string()
      .required("Le champ est obligatoire")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Votre email n'est pas valide"
      ),
  });

  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
    try {
      clearErrors();
      const response = await fetch(
        `http://localhost:8000/api/users/createAccount/${values.email}`
      );
      if (!response.ok) {
        throw new Error("Email inexistant");
      }
      setFeedbackGood("email envoyé");
    } catch (error) {
      setError("generic", { type: "generic", message: "Email déjà Existant" });
      // setChangeFeedback("Email déjà Existant");
      // setTimeout(() => { setChangeFeedback(""); }, 4000);
      // reset(defaultValues);
    }
  }

  return (
    <main>
      <section className={styles.top}>
        <h2 className="mt3pc">
          Notez ci-dessous votre adresse mail afin de recevoir un lien pour
          pouvoir créer votre compte
        </h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="df fc jcc aic mb20 gap2">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
            {errors?.email && (
              <p className={`${styles.feedback}`}>{errors.email.message}</p>
            )}
            {feedback && (
              <p className={`${styles.feedback} mb20`}>{feedback}</p>
            )}
            {feedbackGood && (
              <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
            )}
            {errors?.generic && (
              <p className={`${styles.feedback} mb20`}>
                {errors.generic.message}
              </p>
            )}
            {/* {changeFeedback && (
              <p className={`${styles.feedback} mb20`}>
                {changeFeedback}
              </p>
            )} */}
            <button className="btn btn-primary">Envoyer</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default CreateAccount;
