import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import './HouseDetails.css';
import { apiAddress } from "../../const";
import { useAuthUser } from "react-auth-kit";

function HouseDetails() {
    const auth = useAuthUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const [announcement, setAnnouncement] = useState({
        startDate: '',
        endDate: '',
        person: {
            id: 0,
            role: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            photoPath: ''
        },
        house: {
            photoPath: '',
            description: '',
            avgRating: 0,
            numberRating: 0,
            address: {
                city: '',
                country: '',
                number: 0,
                street: '',
                zipCode: 0
            },
            restrictions: []
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(apiAddress+"/announcement/"+id)
            .then(response => response.json())
            .then(result => {
                setAnnouncement(result);
            })
            .catch((error) => {
                console.log(error);
            }
        );
    }
      
    const handleOffer = (e) => {
        fetch(`${apiAddress}/announcement/house/${announcement.house.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((responseAnnouncement) => {
            console.log(responseAnnouncement)
            fetch(apiAddress+'/offer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    personFrom: auth().person.id,
                    personTo: responseAnnouncement.person.id,
                    announcement: responseAnnouncement.id
                })
            }).then(() => navigate("/"))
        })
    }
  
    return(
        <div className="container">
            <div className="row HouseDetailsRows">
                <div className="col-md-3">
                    <Link to={"/"} className="btn btn-primary">back</Link>
                </div>
            </div>
            <div className="row HouseDetailsRows">
                <div className="house container">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="house-description">{announcement.house.description}</h3>
                        </div>
                        <div className="col-sm-3">
                            {getNotation(announcement.house.avgRating)} ({announcement.house.numberRating})
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <img className="house-image" src={announcement.house.photoPath} role="presentation" alt="" typeof=""/>
                        </div>
                        <ol className="list-unstyled col-sm-4">
                            <li className="house-description">{announcement.house.description}</li>
                            <li className="house-address">{announcement.house.address.number} {announcement.house.address.street}</li>
                            <li className="house-city">{announcement.house.address.zipCode} {announcement.house.address.city} {announcement.house.address.country}</li>
                            <li className="house-dates">du {announcement.startDate} au {announcement.endDate}</li>
                            <li className="house-status">{announcement.state}</li>
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