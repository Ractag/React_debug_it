import React from "react";
import beers from "../data/beers";
import BeerCard from "../components/BeerCard";

const AllProduct = ({ handlePage }) => {
  return (
    <div>
      <h1 className="m-4">Discover all my favortie beers</h1>
      <div className="columns is-multiline m-5">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} handlePage={handlePage} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
