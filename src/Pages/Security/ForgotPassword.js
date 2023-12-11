import React, { useState } from 'react';
import styles from "../Forms/Register/Register.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function ForgotPassword() {
    const [feedback, setFeedBack] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");

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
                `http://localhost:8000/api/users/resetPassword/${values.email}`
            );
            if (!response.ok) {
                throw new Error("Email inexistant");
            }
            setFeedbackGood("email envoyé");
        } catch (error) {
            setError("generic", { type: "generic", message: "Email inexistant" });
        }
    }

    return (
        <section className={styles.top}>
            <div className={styles.backgroundTop}></div>
            <div className='flex-fill df fc jcc aic center'>
                <h2 className='mt3pc'>Notez ci-dessous votre adresse mail afin de recevoir un lien pour modifier votre mot de passe</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="df fc mb20">
                        <label htmlFor="email" className="mb3pc">
                            Email
                        </label>
                        <input type="email" id="email" {...register("email")} />
                        {errors?.email && (
                            <p className={`${styles.feedback}`}>{errors.email.message}</p>
                        )}
                    </div>
                    {feedback && <p className={`${styles.feedback} mb20`}>{feedback}</p>}
                    {feedbackGood && (
                        <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
                    )}
                    {errors?.generic && (
                        <p className={`${styles.feedback}`}>{errors.generic.message}</p>
                    )}
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ForgotPassword;