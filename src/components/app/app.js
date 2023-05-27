import React from "react";
import PersonDetails from "../person-delails";
import Header from "../header/header";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet/random-planet";
const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">{/* <ItemList /> */}</div>
        <div className="col-md-6">{/* <PersonDetails /> */}</div>
      </div>
    </div>
  );
};
export default App;
