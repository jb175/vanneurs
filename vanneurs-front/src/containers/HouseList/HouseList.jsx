import React, { Component }  from "react";

import House from "../../components/House/House";

class HouseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            houses: []
        }
        this.fetchHouses();
    }

    render() {
        const { houses } = this.state
        return (
            <div>
                <h1>House List</h1>
                {houses.map((house, index) => (
                    <House 
                        key={index}
                        {...house}
                    />
                ))}
            </div>
        )
    }

    fetchHouses() {
        this.setState({...this.state, isFetching: true});
        fetch("http://localhost:8080/house")
            .then(response => response.json())
            .then(result => {
                this.setState({houses: result, isFetching: false});
                //this.state = {houses: result, isFetching: false};
            })
            .catch(e => {
                this.setState({...this.state, isFetching: false});
            });
    }
}

export default HouseList;