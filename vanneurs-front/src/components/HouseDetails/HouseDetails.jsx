import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './HouseDetails.css';
import { useAuthUser } from "react-auth-kit";

function HouseDetails() {
    const auth = useAuthUser();
    const { id } = useParams();
    const [house, setHouse] = useState({
        description: '',
        photoPath: '',
        avgRating: 0,
        address: {
            city: '',
            country: '',
            number: 0,
            street: '',
            zipCode: 0
        }
    });

    useEffect(() => {
        fetch("http://localhost:8080/house/"+id)
            .then(response => response.json())
            .then(result => {
                setHouse(result);
            })
    }, [setHouse]);

    const handleOffer = (e) => {
        fetch(`http://localhost:8080/announcement/house/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((responseAnnouncement) => {
            console.log(responseAnnouncement)
            fetch('http://localhost:8080/offer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    personFrom: auth().person.id,
                    personTo: responseAnnouncement.person,
                    announcement: responseAnnouncement.id
                })
            })
        })
    }
  
    return(
        <div className="container">
            <div className="row HouseDetailsRows">
                <div className="col-md-3">
                    <Link to={"/announcements"} className="btn btn-primary">back</Link>
                </div>
            </div>
            <div className="row HouseDetailsRows">
                <div className="house container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="house-description">{house.description}</h3>
                        </div>
                        <div className="col-sm-3">
                            {getNotation(house.avgRating)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <img className="house-image" src={house.photoPath} role="presentation" alt="" typeof=""/>
                        </div>
                        <ol className="list-unstyled col-sm-4">
                            <li className="house-description">{house.description}</li>
                            <li className="house-address">{house.address.number} {house.address.street}</li>
                            <li className="house-city">{house.address.zip_code} {house.address.city} {house.address.country}</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" onClick={handleOffer} className="btn btn-primary">Je suis intéressé par cette maison</button>
            </div>
        </div>
    )

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
}

export default HouseDetails;