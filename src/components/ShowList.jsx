import React from "react";
import ShowCard from "./ShowCard";
import styles from "./ShowList.module.css";

function ShowList({ results }) {
  return (
    <div className={`container ${styles.showsList}`}>
      {results.length > 0 &&
        results.map((item) => {
          return <ShowCard {...item} key={item.show?.id} />;
        })}
    </div>
  );
}

export default ShowList;
