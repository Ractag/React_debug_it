import React from "react";

const BeerCard = ({ beer, handlePage }) => {
  return (
    <article className="column is-one-quarter ">
      <div className="box m-2 fullheight">
        <h2 className="title">{beer.name}</h2>
        <div className="columns ">
          <div className="column">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="card_image m-2"
            />
          </div>
          <div className="column">
            <p className="">
              <span>Tag Line : </span>
              {beer.tag_line}
            </p>
            <button
              className="button is-black m-4"
              onClick={() => handlePage({ name: "OneProduct", id: beer.id })}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeerCard;
