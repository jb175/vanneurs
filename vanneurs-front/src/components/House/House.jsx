import React  from "react";

import './House.css';
import { Link } from "react-router-dom";

const House = ({startDate, endDate, state, person, house, offer, id}) => (
    <Link className="house-link" to={"/announcements/"+id}>
        <div className="house container">
            <div className="row">
                <div className="col-sm-9">
                    <h3 className="house-description">{house.description}</h3>
                </div>
                <div className="col-sm-3">
                    {getNotation(house.avgRating)} ({house.numberRating})
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <img className="house-image" src={house.photoPath} role="presentation" alt="" typeof=""/>
                </div>
                <ol className="list-unstyled col-sm-4">
                    <li className="house-description">{house.description}</li>
                    <li className="house-address">{house.address.number} {house.address.street}</li>
                    <li className="house-city">{house.address.zipCode} {house.address.city} {house.address.country}</li>
                    <li className="house-dates">{displayDates(startDate, endDate)}</li>
                </ol>
            </div>
        </div>
    </Link>
);

function displayDates(startDate, endDate) {
    if(startDate !== null && endDate !== null)
        return "du " + startDate + " au " + endDate;
    else if(startDate !== null)
        return "à partir du " + startDate;
    else if(startDate !== null)
        return "jusqu'au " + endDate;
    else
        return "pas de dates précisées";
}

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

export default House;