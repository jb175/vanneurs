import React, {Component} from "react";
import CountryFilter from "./CountryFilter/CountryFilter";
import CityFilter from "./CityFilter/CityFilter";
import DateFilter from "./DateFilter/DateFilter";
import OrderBy from "./OrderBy/OrderBy";

class AnnouncementsFilters extends Component {

  
    filterCountry = (country) => {
      console.log("click");
      this.props.filter(country, undefined)
    }
  
    filterCity = (city) => {
        console.log("click");
        this.props.filter(undefined, city)
    }
  
    render() {
      return (
        <div id="annoucementsFilters" className="position-sticky">
            <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">Filtres</h4>
                <p className="mb-0">Utilise ces filtres pour rechercher la maison de tes rèves!</p>
            </div>
            
            <CountryFilter filterCountry={this.filterCountry}/>
    
            <CityFilter filterCity={this.filterCity}/>
    
            <DateFilter/>
    
            <OrderBy/>
        </div>
      );
    }
  }


export default AnnouncementsFilters;