import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShowCard.module.css";

function ShowCard({ score, show }) {
  const { image } = { ...show };
  const poster_path = image?.medium;
  return (
    <Link
      className={styles.showCard}
      to={{ pathname: `/detail/${show.id}` }}
      state={show}>
      <p>{score}</p>
      <p>{show.id}</p>
      <img
        src={
          poster_path == null
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images&h=300"
            : poster_path
        }
        alt="No Poster For This Movie"
        className={styles.moviePoster}
      />
      <h2 className={styles.showTitle}>{show.name}</h2>
    </Link>
  );
}

export default ShowCard;
