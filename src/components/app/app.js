import React, { useState } from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import RandomPlanet from "../random-planet/random-planet";
const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Header />
      {toggle && <RandomPlanet />}
      <button
        style={{ padding: "10px 20px", marginLeft: 40 }}
        onClick={() => setToggle(!toggle)}
      >
        Toggle Planets
      </button>
      <div>
        <ItemList />
        <div>{/* <PersonDetails /> */}</div>
      </div>
    </div>
  );
};
export default App;
