import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";

import { apiAddress } from "../const";

function Exchanges() {
    const auth = useAuthUser();
    const [exchanges, setExchanges] = useState([])

    useEffect(() => {
        fetch(`${apiAddress}/exchange/house/${auth().person.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((responseExchange) => setExchanges(responseExchange))
    }, [setExchanges])

    function getNotation(avgRating) {
        let stars = [];
        for (let index = 0; index < 5; index++) {
            if (avgRating >= index+1) {
                stars.push(<i className="bi bi-star-fill"></i>)
            } else if (avgRating >= index+0.5) {
                stars.push(<i className="bi bi-star-half"></i>)
            } else {
                stars.push(<i className="bi bi-star"></i>)
            }
        }
        return stars
    }

    return (
        <div>
            <h2 className="text-center">Mon historique d'échange</h2>
        {exchanges.map((exchange) => (
            (((exchange.house1.id !== auth().person.house.id) && (
                <div className="house container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="house-description">{exchange.house1.description}</h3>
                        </div>
                        <div className="col-sm-3">
                            {getNotation(exchange.house1.avgRating)}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-sm-8">
                            <img className="house-image" src={exchange.house1.photoPath} role="presentation" alt="" typeof=""/>
                    </div>
                        <ol className="list-unstyled col-sm-4">
                            <li className="house-description">{exchange.house1.description}</li>
                            <li className="house-address">{exchange.house1.address.number} {exchange.house1.address.street}</li>
                            <li className="house-city">{exchange.house1.address.zip_code} {exchange.house1.address.city} {exchange.house1.address.country}</li>
                        </ol>
                    </div>
                </div>
            )) || ((exchange.house2.id !== auth().person.house.id) && (
                <div className="house container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="house-description">{exchange.house2.description}</h3>
                        </div>
                        <div className="col-sm-3">
                            {getNotation(exchange.house2.avgRating)}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-sm-8">
                            <img className="house-image" src={exchange.house2.photoPath} role="presentation" alt="" typeof=""/>
                    </div>
                        <ol className="list-unstyled col-sm-4">
                            <li className="house-description">{exchange.house2.description}</li>
                            <li className="house-address">{exchange.house2.address.number} {exchange.house2.address.street}</li>
                            <li className="house-city">{exchange.house2.address.zip_code} {exchange.house2.address.city} {exchange.house2.address.country}</li>
                        </ol>
                    </div>
                </div>
            )))
            )
        )}
        </div>
    )
}

export default Exchanges;