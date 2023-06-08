import React, { Component }  from "react";

import House from "../../components/House/House";

class HouseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            announcements: []
        }
    }

    fetchData = (country, city, from, to, orderBy) => {
        const countryParam = country || '';
        const cityParam = city || '';
        const fromParam = from || '';
        const toParam = to || '';
        const orderByParam = orderBy || 'Default';
        this.setState({...this.state, isFetching: true});
        fetch("http://localhost:8080/announcement/search?country="+countryParam+"&city="+cityParam+"&from="+fromParam+"&to="+toParam+"&orderBy="+orderByParam)
            .then(response => response.json())
            .then(result => {
                this.setState({announcements: result, isFetching: false});
            })
            .catch(e => {
                this.setState({...this.state, isFetching: false});
            });
      }

    componentDidMount() {
        const {country, city, orderBy} = this.props;
        this.fetchData(country, city, orderBy);
    }

    componentDidUpdate(prevProps) {
        const {country, city, from, to, orderBy} = this.props;

        if (country !== prevProps.country) {
          this.fetchData(country, city, from, to, orderBy);
        }
        if (city !== prevProps.city) {
          this.fetchData(country, city, from, to, orderBy);
        }
        if (from !== prevProps.from) {
            this.fetchData(country, city, from, to, orderBy);
        }
        if (to !== prevProps.to) {
            this.fetchData(country, city, from, to, orderBy);
        }
        if (orderBy !== prevProps.orderBy) {
          this.fetchData(country, city, from, to, orderBy);
        }
      }

    render() {
        const { announcements } = this.state
        return (
            <div>
                <h1>House List</h1>
                {announcements.map((announce, index) => (
                    <House 
                        key={index}
                        {...announce}
                    />
                ))}
            </div>
        )
    }

}

export default HouseList;