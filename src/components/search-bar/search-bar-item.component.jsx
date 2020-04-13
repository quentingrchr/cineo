import React from "react";
import { Link } from "react-router-dom";

export default function SearchBarItem({ el }) {
  return (
    <li>
      <Link to={`/player?id=${el.imdbID}`}>
        <h3>{el.title}</h3>
        <p>
          {el.type === "movie" ? "Film" : "Série"} - {el.year}
        </p>
      </Link>
    </li>
  );
}
