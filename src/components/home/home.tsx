import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useHome } from "../../hooks/use-home";
import { Techport } from "../../types/types";
import Searchbar from "../searchbar/search-bar";

interface Props {
  techport: Techport;
}

export default function Home({ techport }: Props): ReactElement {
  const [results, handleChange, display] = useHome(techport);

  return (
    <div className="ui center aligned header segment">
      <h1 > Welcome to my Project (using NASA-API) </h1>
      <div>
        <h2 > Searching for NASA projects? </h2>
        <p> Just type in a projectnumber (results are limited to 100) </p>
        <Searchbar value="Search projectnumber..." handleChange={handleChange}>
          <div></div>
        </Searchbar>
      </div>
      <div className="searchResults" style={{ display: `${display()}` }}>
        {results && results.filter((el, index) => index < 100).map((result, index) => (
          <Link to={`/techport/${result.id}`} className="resultItem"
            key={index}
          >
            {result.id}
          </Link>
        )
        )}
      </div>
    </div >
  );
}