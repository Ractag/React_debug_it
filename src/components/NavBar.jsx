import React from "react";

const NavBar = ({ setPage }) => {
  return (
    <nav
      className="columns is-8"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="column is-one-fifth">
        <button
          className="image is-128x128 m-auto"
          onClick={() => setPage({ name: "Home", id: null })}
        >
          <img src="../assets/logo.jpeg" alt="logo" />
        </button>
      </div>

      <div id="navbarBasicExample" className="column is-three-quarter m-auto">
        <div className="">
          <button
            className="button is-black m-4"
            onClick={() => setPage({ name: "Home", id: null })}
          >
            Home
          </button>

          <button
            className="button is-black m-4"
            onClick={() => {
              setPage({ name: "AllProduct", id: null });
            }}
          >
            My beers
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
