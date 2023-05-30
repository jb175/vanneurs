import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";

function House() {
    const auth = useAuthUser();
    const [haveHouse, setHaveHouse] = useState(false);
    const [house, setHouse] = useState({})
    const [newHouse, setNewHouse] = useState({
        photoPath: '',
        description: '',
    });
    const [address, setAddress] = useState({
        number: '',
        street: '',
        zipCode: '',
        city: '',
        country : '',
    });
    const [announcement, setAnnouncement] = useState({
        startDate: '',
        endDate: ''
    })
    const [restrictionList, setRestrictionList] = useState([])
    const [restrictionFill, setRestrictionFill] = useState({
        description: ''
    })
    // const [restrictionAdded, setRestrictionAdded] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/person/' + auth().person.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((responseHouse) => {
            if(responseHouse.house != null) {
                fetch(`http://localhost:8080/restriction/house/${responseHouse.house.id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((response) => response.json())
                .then((responseRestriction) => {
                    setHaveHouse(true);
                    setHouse(responseRestriction);
                })
            }
        })
        if (newHouse.address) {
            fetch('http://localhost:8080/house', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newHouse)
                })
                .then((response) => response.json())
                .then((responseHouse) => {
                    console.log(responseHouse);
                    fetch('http://localhost:8080/person/' + auth().person.id, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                        body: JSON.stringify({house: responseHouse.id})
                    }).then((response) => response.json())
                    .then((responsePerson) => {
                        console.log(responsePerson);
                        restrictionFill.house = responseHouse.id
                        console.log(restrictionFill)
                        fetch('http://localhost:8080/restriction', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(restrictionFill)
                        }).then((response) => response.json())
                        .then((responseRestrictionList) => {
                            console.log(responseRestrictionList)
                        })
                    })
                })
        }
        fetch('http://localhost:8080/restriction-list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        }).then((response) => response.json())
        .then((responseRestrictionList) => {
            setRestrictionList(responseRestrictionList)
        })
    }, [setHaveHouse, newHouse])


    const handleChangeHouse = ((e) => {
        const { name, value } = e.target;
        setNewHouse((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    })

    const handleChangeAddress = ((e) => {
        const { name, value } = e.target;
        setAddress((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    })

    const handleChangeAnnouncement = ((e) => {
        const { name, value } = e.target;
        setAnnouncement((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    })

    const handleSubmitNewHouse = ((e) => {
        e.preventDefault();
        fetch('http://localhost:8080/address', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(address)
        })
        .then((response) => response.json())
        .then((responseAddress) => {
            console.log(responseAddress.id)
            setNewHouse((prevData) => ({    
                ...prevData,
                "address": responseAddress.id,
              }));
        })
    })

    const handleSubmitAnnouncement = ((e) => {
        e.preventDefault();
        announcement.house = house.id;
        announcement.person = auth().person.id;
        console.log(announcement)
        fetch('http://localhost:8080/announcement', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(announcement)
        }).then((response) => response.json())
        .then((responseAnnouncement) => {
            console.log(responseAnnouncement)
        })
    })

    const handleChangeRestriction = (e) => {
        const { name, value } = e.target;
        setRestrictionFill((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

    // const RestrictionElement = () => {
    //     return (
    //         <div id="restriction" className="mb-4">
    //             <select className="mb-2"onChange={handleChangeRestriction}>
    //                 {restrictionList.map((restriction) => (
    //                         <option key={restriction.id} value={restriction.id}>{restriction.name}</option>
    //                 ))}
    //             </select>
    //             <textarea name="descriptionRestrictionList" className="form-control" id="descriptionRestrictionList" rows="2"></textarea>
    //         </div>
    //     )
    // }

    // const addRestriction = () => {
    //     setRestrictionAdded(restrictionAdded.concat(<RestrictionElement/>))
    //     console.log(restrictionAdded)
    // }

    return (
        <div className="container mt-5">
        {((!haveHouse) && (
            <div>
                <h2 className="text-center">Crééer votre maison</h2>
                <form onSubmit={handleSubmitNewHouse}>
                    <h3>Adresse</h3>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label mr-3">
                            N°
                            <input type="text" id="number" name="number" className="form-control" value={address.number} onChange={handleChangeAddress}/>
                        </label>
                        <label htmlFor="street" className="form-label mr-3">
                            Nom de rue
                            <input type="text" id="street" name="street" className="form-control" value={address.street} onChange={handleChangeAddress}/>
                        </label>
                        <label htmlFor="zipCode" className="form-label mr-3">
                            Code postal
                            <input type="text" id="zipCode" name="zipCode" className="form-control" value={address.zipCode} onChange={handleChangeAddress}/>
                        </label>
                        <label htmlFor="city" className="form-label mr-3">
                            Ville
                            <input type="text" id="city" name="city" className="form-control" value={address.city} onChange={handleChangeAddress}/>
                        </label>
                        <label htmlFor="country" className="form-label mr-3">
                            Pays
                            <input type="text" id="country" name="country" className="form-control" value={address.country} onChange={handleChangeAddress}/>
                        </label>
                    </div>
                    <h3>Description de la maison</h3>
                    <div className="mb-3">
                    <label htmlFor="photoPath" className="form-label">
                        Lien de photo
                        <input type="text" id="photoPath" name="photoPath" className="form-control" value={newHouse.photoPath} onChange={handleChangeHouse}/>
                    </label>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="description" className="form-label w-100">
                        Description 
                        <textarea name="description" className="form-control" id="description" rows="5" value={newHouse.description} onChange={handleChangeHouse}></textarea>
                    </label>
                    </div>
                    <h3>Ajout de restrictions</h3>
                    <div className="mb-3">
                        {/* <button type="button" onClick={addRestriction} className="btn btn-primary mb-3">Ajouter une restriction</button> */}
                        <div id="restrictionListForm">
                            <textarea name="description" className="form-control" id="description" rows="2" value={restrictionFill.description} onChange={handleChangeRestriction}></textarea>
                            {/* {restrictionAdded} */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">
                            Enregistrer ma maison
                        </button>
                    </div>
                </form>
            </div>
            )) || (
            <div>
                <div>
                <h2 className="text-center">Ma maison</h2>
                    <h3>Adresse</h3>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label mr-3">
                            N°
                            <input type="text" id="number" name="number" className="form-control" value={house.house.address.number} disabled/>
                        </label>
                        <label htmlFor="street" className="form-label mr-3">
                            Nom de rue
                            <input type="text" id="street" name="street" className="form-control" value={house.house.address.street} disabled/>
                        </label>
                        <label htmlFor="zipCode" className="form-label mr-3">
                            Code postal
                            <input type="text" id="zipCode" name="zipCode" className="form-control" value={house.house.address.zipCode} disabled/>
                        </label>
                        <label htmlFor="city" className="form-label mr-3">
                            Ville
                            <input type="text" id="city" name="city" className="form-control" value={house.house.address.city} disabled/>
                        </label>
                        <label htmlFor="country" className="form-label mr-3">
                            Pays
                            <input type="text" id="country" name="country" className="form-control" value={house.house.address.country} disabled/>
                        </label>
                    </div>
                    <h3>Description de la maison</h3>
                    <div className="mb-3">
                    <label htmlFor="photoPath" className="form-label">
                        Lien de photo
                        <input type="text" id="photoPath" name="photoPath" className="form-control" value={house.house.photoPath} disabled/>
                    </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label w-100">
                            Description 
                            <textarea name="description" className="form-control" id="description" rows="5" value={house.house.description} disabled></textarea>
                        </label>
                    </div>
                    <h3>Description des restrictions</h3>
                    <div className="mb-3">
                        {/* <button type="button" onClick={addRestriction} className="btn btn-primary mb-3">Ajouter une restriction</button> */}
                        <div id="restrictionListForm">
                            <textarea name="description" className="form-control" id="description" rows="2" value={house.description} onChange={handleChangeRestriction} disabled></textarea>
                            {/* {restrictionAdded} */}
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmitAnnouncement}>
                    <h2 className="text-center">Créer votre annonce</h2>
                    <h3>Choississez vos dates</h3>
                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label mr-3">
                            Date de début
                            <input type="date" id="startDate" name="startDate" className="form-control" value={announcement.startDate} onChange={handleChangeAnnouncement}/>
                        </label>
                        <label htmlFor="endDate" className="form-label mr-3">
                            Date de fin
                            <input type="date" id="endDate" name="endDate" className="form-control" value={announcement.endDate} onChange={handleChangeAnnouncement}/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">
                            Créer votre annonce
                        </button>
                    </div>
                </form>
        </div>
        )}
    </div>
)
}

export default House;