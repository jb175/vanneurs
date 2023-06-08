import React, { Component } from "react";
import HouseList from "../HouseList/HouseList";
import AnnouncementsFilters from "../../components/AnnouncementsFilters/AnnouncementsFilters";

class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryFilter: "",
      cityFilter: "",
      fromFilter: "",
      toFilter: "",
      orderByFilter: ""
    }
  }

  filter = (country, city, from, to, orderBy) => {
    this.setState(state => ({
      ...state,
      countryFilter: (country !== undefined ? country : this.state.countryFilter),
      cityFilter: (city !== undefined ? city : this.state.cityFilter),
      fromFilter: (from !== undefined ? from : this.state.fromFilter),
      toFilter: (to !== undefined ? to : this.state.toFilter),
      orderByFilter: (orderBy !== undefined ? orderBy : this.state.orderByFilter)
    }));
  }

  render() {
    const { countryFilter, cityFilter, fromFilter, toFilter, orderByFilter } = this.state
    return (
      <div className="container">
        <div className="row g-5">
          <div className="col-md-3">
            <AnnouncementsFilters filter={this.filter}/>
          </div>
          <div className="col-md-9">
            <HouseList country={countryFilter} city={cityFilter} from={fromFilter} to={toFilter} orderBy={orderByFilter}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Announcements;