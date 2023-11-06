import React from "react";
import Description from "../components/Description";
import beers from "../data/beers";

const OneProduct = ({ id }) => {
  const beer = beers.find((el) => el.id === id);

  return (
    <div>
      <h1 className="title">More informations about {beer.name}</h1>
      <div className="columns m-5">
        <div className="column m-2">
          <img src={beer.image_url} alt="" className="image m-auto" />
        </div>
        <div className="column m-2">
          <div className="box">
            <Description
              text={beer.brewers_tips}
              label="Brewer tips"
              cls="m-3"
            />
            <Description
              text={beer.description}
              label="Description"
              cls="m-3"
            />
            <div className="columns">
              <div className="column">
                <Description text={beer.ph} label="Ph" />
                <Description text={beer.first_brewed} label="First Brewed" />
              </div>
              <div className="column">
                <p>{beer.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
