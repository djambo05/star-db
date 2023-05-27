import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    },
    loading: true,
    error: false,
  };

  intervalId = null;

  componentDidMount() {
    this.updatePlanet();
    this.intervalId = setInterval(this.updatePlanet, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  onPlanetError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 9) + 2;
    console.log("update");
    this.swapiService
      .getPlanet(id)
      .then((planet) =>
        this.setState({
          planet: {
            id: id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
          },
          loading: false,
        })
      )
      .catch(this.onPlanetError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "20px",
          width: "600px",
          height: "300px",
          backgroundColor: "#474747",
          borderRadius: "10px",
          margin: "30px",
        }}
      >
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, population, rotationPeriod, diameter, name } = planet;
  return (
    <React.Fragment>
      <div style={{ width: 200, height: 200 }}>
        <img
          style={{ width: 200, height: 200, borderRadius: "10px" }}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          marginLeft: "20px",
          marginBottom: "60px",
        }}
      >
        <h3>{name}</h3>
        <span style={{ marginLeft: "20px" }}>Population {population}</span>
        <span style={{ marginLeft: "20px" }}>
          Rotation Period {rotationPeriod}
        </span>
        <span style={{ marginLeft: "20px" }}>Diametr {diameter}</span>
      </div>
    </React.Fragment>
  );
};
