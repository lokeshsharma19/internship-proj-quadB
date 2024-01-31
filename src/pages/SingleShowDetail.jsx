import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SingleShowDetail.module.css";
import BookingForm from "../components/BookingForm";

function SingleShowDetail() {
  const { state } = useLocation();
  const {
    id,
    ended,
    genres,
    name,
    language,
    runtime,
    status,
    url,
    image,
    summary,
  } = {
    ...state,
  };
  const poster = image?.original;
  const [isBooked, setIsBooked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <button
        className={styles.goBack}
        onClick={() => {
          navigate("/");
        }}>
        Go Back
      </button>
      <div className={styles.showDetail}>
        <div className={styles.infoOnLeft}>
          <a href={url}>
            <img
              className={styles.image}
              src={
                poster == null
                  ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images&h=700"
                  : poster
              }
              alt={name}
            />
          </a>
        </div>
        <div className={styles.infoOnRight}>
          <h2>{name}</h2>
          {ended && (
            <p className={styles.infoPara}>
              <span className={styles.key}>Release Date : </span>
              {ended && <span className={styles.value}>{ended}</span>}
            </p>
          )}
          {genres[0] && (
            <p className={styles.infoPara}>
              <span className={styles.key}> Genre : </span>
              <span className={styles.value}>
                <span>
                  {genres[0]}, {genres[1]}
                </span>
              </span>
            </p>
          )}
          {runtime && (
            <p className={styles.infoPara}>
              <span className={styles.key}>Runtime : </span>
              <span className={styles.value}> {runtime}</span>
            </p>
          )}
          {language && (
            <p className={styles.infoPara}>
              <span className={styles.key}>Language : </span>
              <span className={styles.value}>{language}</span>
            </p>
          )}
          <p className={styles.infoPara}>
            {summary && <span dangerouslySetInnerHTML={{ __html: summary }} />}
          </p>
          {isFormOpen && (
            <BookingForm
              name={name}
              setIsFormOpen={setIsFormOpen}
              setIsBooked={setIsBooked}
            />
          )}
          {!isBooked && !isFormOpen && (
            <button
              className={styles.FormBtn}
              onClick={() => {
                setIsFormOpen(true);
              }}>
              Book
            </button>
          )}
          {isBooked && <h3>Booked...</h3>}
        </div>
      </div>
    </>
  );
}

export default SingleShowDetail;
