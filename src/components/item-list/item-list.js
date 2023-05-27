import { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    return (
      <ul>
        <li>luke</li>
        <li>mikle</li>
        <li>doo</li>
      </ul>
    );
  }
}
