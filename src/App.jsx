import { useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";
import AllProduct from "./pages/AllProduct";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";

function App() {
  const [pageInfo, setPage] = useState({ name: "Home", Id: null });

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      {pageInfo.name === "Home" && <Home handlePage={setPage} />}
      {pageInfo.name === "AllProduct" && <AllProduct handlePage={setPage} />}
      {pageInfo.name === "OneProduct" && <OneProduct id={pageInfo.id} />}
    </div>
  );
}

export default App;
