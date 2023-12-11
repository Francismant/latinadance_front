import { AuthContext } from "../../../context";
import styles from "./Event.module.scss";
import React, { useContext } from 'react';

function Event({ event, deleteEvent }) {
  const { user } = useContext(AuthContext);
  console.log("userEvent", user);
  const { idEvent, date_hour, title, duration, price, image } = event;


  async function handleDelete(e) {
    e.stopPropagation();
    try {
      const response = await fetch(`http://localhost:8000/api/events/deleteEvent/${idEvent}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("reponseDelete", response);
        deleteEvent(idEvent);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={`${styles.eventContainer} df fc jcc gap1`}>
        {user && user.admin ===1 && <i className="fas fa-xmark" onClick={handleDelete}></i>}
        <div
          className={`${styles.title} df fc jcsa aic tac px5`}
        >
          <h3 className="mb10">{date_hour}</h3>
          <h3 className="mb10">{title}</h3>
          <h3 className="mb10">{duration}</h3>
          <h3 className="mb10">{price}</h3>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img src={image} alt="oneEvent" />
        </div>
      </div >
    </>
  );
}

export default Event;