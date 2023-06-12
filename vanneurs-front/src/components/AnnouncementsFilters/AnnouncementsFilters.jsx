import React, {Component} from "react";
import CountryFilter from "./CountryFilter/CountryFilter";
import CityFilter from "./CityFilter/CityFilter";
import DateFilter from "./DateFilter/DateFilter";
import OrderBy from "./OrderBy/OrderBy";

class AnnouncementsFilters extends Component {

  
    filterCountry = (country) => {
      this.props.filter(country, undefined, undefined, undefined, undefined);
    }
  
    filterCity = (city) => {
        this.props.filter(undefined, city, undefined, undefined, undefined);
    }

    filterDateFrom = (from) => {
      this.props.filter(undefined, undefined, from, undefined, undefined);
    }
  
    filterDateTo = (to) => {
        this.props.filter(undefined, undefined, undefined, to, undefined);
    }

    filterOrderBy = (orderBy) => {
      this.props.filter(undefined, undefined, undefined, undefined, orderBy);
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
    
            <DateFilter filterDateFrom={this.filterDateFrom} filterDateTo={this.filterDateTo}/>
    
            <OrderBy filterOrderBy={this.filterOrderBy}/>
        </div>
      );
    }
  }


export default AnnouncementsFilters;