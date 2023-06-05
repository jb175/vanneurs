import React, { Component } from "react";
import HouseList from "../HouseList/HouseList";
import AnnouncementsFilters from "../../components/AnnouncementsFilters/AnnouncementsFilters";

class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryFilter: "",
      cityFilter: "",
    }
  }

  filterCountry = (country) => {
    console.log("click");
    this.setState(state => ({
      ...state,
      countryFilter: country
    }));
  }

  filterCity = (city) => {
    console.log("click");
    this.setState(state => ({
      ...state,
      cityFilter: city
    }));
  }

  filter = (country, city) => {
    this.setState(state => ({
      ...state,
      countryFilter: country || this.state.countryFilter,
      cityFilter: city || this.state.cityFilter
    }));
  }

  render() {
    const { countryFilter, cityFilter } = this.state
    console.log(countryFilter);
    return (
      <div className="container">
        <div className="row g-5">
          <div className="col-md-3">
            <AnnouncementsFilters filter={this.filter}/>
          </div>
          <div className="col-md-9">
            <HouseList country={countryFilter} city={cityFilter} />
          </div>
        </div>
      </div>
    );
  }
}

export default Announcements;