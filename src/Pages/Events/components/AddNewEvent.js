import styles from "./Event.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewEvent() {
  const [feedBackGood, setfeedBackGood] = useState("");
  const navigate = useNavigate();

  const defaultValues = {
    date: "",
    title: "",
    duration: "",
    price: "",
    poster: null,
  };

  const MAX_FILE_SIZE = 5000000;
  const eventSchema = yup.object({
    date: yup.string().required("Ce champ doit être renseigné"),
    title: yup.string().required("Ce champ doit être renseigné"),
    duration: yup.string().required("Ce champ doit être renseigné"),
    price: yup.string().required("Ce champ doit être renseigné"),
    poster: yup
      .mixed()
      .nullable(false, "Vous devez télécharger une image")
      .required("Vous devez télécharger une image")
      .test("is-valid-type", "Ce doit être un format d'image", (value) => {
        if (!value) return false;
        if (value[0] && value[0].name) {
          return (
            ["jpg", "png", "jpeg", "avif", "webp"].indexOf(
              value[0].name.toLowerCase().split(".").pop()
            ) > -1
          );
        }
        return false;
      })
      .test(
        "is-valid-size",
        "Max allowed size is 5MO",
        (value) =>
          value && value[0] && value[0].size && value[0].size <= MAX_FILE_SIZE
      ),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    clearErrors,
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(eventSchema),
  });

  const convertBlobTobase64 = (blob) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function submit(values) {
    console.log(values);
    try {
      let newPoster = values.poster[0];
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(newPoster);
      fileReader.onload = async () => {
        const buffer = fileReader.result;
        const blob = new Blob([buffer], { type: newPoster.type });
        const base64 = await convertBlobTobase64(blob);
        values.poster = base64;
        console.log("valuesbase", values);
        clearErrors();
        const response = await fetch(`http://localhost:8000/api/events/addEvent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          const newEvent = await response.json();
          console.log(newEvent);
          setfeedBackGood("L'événement a été créé avec succès!");
          setTimeout(() => {
            navigate("/events")
          }, 3000)
        }
      };
    } catch (error) {
      console.error(error);
    }
    reset(defaultValues);
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`df fc card p20 ${styles.form}`}
    >
      <div className="df fc mb20 jcc aic">
        <label htmlFor="date">date de l'évènement</label>
        <input {...register("date")} type="text" id="date" />
        {errors.date && <p className="form-error">{errors.date.message}</p>}
      </div>
      <div className="df fc mb20 jcc aic">
        <label htmlFor="title">titre de l'évènement</label>
        <input {...register("title")} type="text" id="title" />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="df fc mb20 jcc aic">
        <label htmlFor="duration">durée de l'évènement</label>
        <input {...register("duration")} type="text" id="duration" />
        {errors.duration && <p className="form-error">{errors.duration.message}</p>}
      </div>
      <div className="df fc mb20 jcc aic">
        <label htmlFor="price">prix de l'évènement</label>
        <input {...register("price")} type="text" id="price" />
        {errors.price && <p className="form-error">{errors.price.message}</p>}
      </div>
      <div className="df fc mb20 jcc aic">
        <label htmlFor="poster">Poster</label>
        <input {...register("poster")} type="file" id="poster" className={styles.inputImg} />
        {errors.poster && <p className="form-error">{errors.poster.message}</p>}
      </div>
      <div className="df fc jcc aic">
        {feedBackGood && <p className={`${styles.feedbackGood} mb20`}>{feedBackGood}</p>}
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}
