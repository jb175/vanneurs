import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import House from "../components/House/House";


function Offers() {
    const auth = useAuthUser();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/offer/person-to/${auth().person.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((responseOffer) => {
            setOffers(responseOffer);
        })
    },[setOffers])

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

    const handleExchange = (offer) => {
        console.log(offer)
        fetch('http://localhost:8080/exchange', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate: offer.announcement.startDate,
                endDate: offer.announcement.endDate,
                house1: offer.personTo.house.id,
                house2: offer.personFrom.house.id
            })
        }).then((response) => response.json())
        .then((responseExchange) => console.log(responseExchange))
    }

    const handleCancelExchange = (offer) => {
        console.log(offer)
        fetch(`http://localhost:8080/offer/cancel/${offer.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((responseCancelOffer) => console.log(responseCancelOffer))
    }

    return (
        <div>
            <h2 className="text-center">Mes demandes d'offres en cours</h2>
            {offers.map((offer) => (
            <div key={offer.id} className="house container">
                <div className="row">
                    <div className="col-sm-9">
                        <h3 className="house-description">{offer.personFrom.house.description}</h3>
                    </div>
                    <div className="col-sm-3">
                        {getNotation(offer.personFrom.house.avgRating)}
                    </div>
                </div>  
                <div className="row">
                    <div className="col-sm-8">
                        <img className="house-image" src={offer.personFrom.house.photoPath} role="presentation" alt="" typeof=""/>
                </div>
                    <ol className="list-unstyled col-sm-4">
                        <li className="house-description">{offer.personFrom.house.description}</li>
                        <li className="house-address">{offer.personFrom.house.address.number} {offer.personFrom.house.address.street}</li>
                        <li className="house-city">{offer.personFrom.house.address.zip_code} {offer.personFrom.house.address.city} {offer.personFrom.house.address.country}</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" onClick={() => handleExchange(offer)} className="btn btn-primary mr-5">J'échange avec cette maison</button>
                    <button type="button" onClick={() => handleCancelExchange(offer)} className="btn btn-danger">Je ne souhaite pas échanger avec cette maison</button>
                </div>
            </div>
            )
            )}
        </div>
    )
}

export default Offers;