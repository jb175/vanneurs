import React, { Component }  from "react";

import House from "../../components/House/House";

class HouseList extends Component {

    constructor(props) {
        super(props);
        console.log(props.countryFilter);
        this.state = {
            isFetching: false,
            houses: [],
            announcements: []
        }
    }

    fetchData = (country, city) => {
        const countryParam = country || '';
        const cityParam = city || '';
        console.log(country, city);
        console.log(countryParam, cityParam);
        this.setState({...this.state, isFetching: true});
        fetch("http://localhost:8080/house/search?country="+countryParam+"&city="+cityParam+"")
            .then(response => response.json())
            .then(result => {
                this.setState({houses: result, isFetching: false});
                //this.state = {houses: result, isFetching: false};
            })
            .catch(e => {
                this.setState({...this.state, isFetching: false});
            });
        fetch("http://localhost:8080/announcement/search?country="+countryParam+"&city="+cityParam+"")
            .then(response => response.json())
            .then(result => {
                this.setState({announcements: result, isFetching: false});
                //this.state = {houses: result, isFetching: false};
            })
            .catch(e => {
                this.setState({...this.state, isFetching: false});
            });
      }

    componentDidMount() {
        console.log("mount");
        const {country, city} = this.props;
        this.fetchData(country, city);
    }

    componentDidUpdate(prevProps) {
        const {country, city} = this.props;
        console.log("update", country, city, prevProps.country, prevProps.city);

        if (country !== prevProps.country) {
          this.fetchData(country, city);
        }
        if (city !== prevProps.city) {
          this.fetchData(country, city);
        }
      }

    render() {
        const { houses, announcements } = this.state
        return (
            <div>
                <h1>House List</h1>
                {/* {houses.map((house, index) => (
                    <House 
                        key={house.number}
                        {...house}
                    />
                ))} */}
                {announcements.map((announce, index) => (
                    <House 
                        key={announce.number}
                        {...announce}
                    />
                ))}
            </div>
        )
    }

}

export default HouseList;