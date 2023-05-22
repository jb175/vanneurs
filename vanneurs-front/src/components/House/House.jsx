import React  from "react";

import './House.css';
import { Link } from "react-router-dom";

const House = ({photoPath, description , avgRating, address, id}) => (
    <Link className="house-link" to={"/announcements/"+id}>
        <div className="house container">
            <div className="row">
                <div className="col-sm-9">
                    <h3 className="house-description">{description}</h3>
                </div>
                <div className="col-sm-3">
                    {getNotation(avgRating)}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <img className="house-image" src={photoPath} role="presentation" alt="" typeof=""/>
                </div>
                <ol className="list-unstyled col-sm-4">
                    <li className="house-description">{description}</li>
                    <li className="house-address">{address.number} {address.street}</li>
                    <li className="house-city">{address.zip_code} {address.city} {address.country}</li>
                </ol>
            </div>
        </div>
    </Link>
);

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