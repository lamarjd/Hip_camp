import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSpotThunk } from "../../store/spot"; 
import { useHistory } from "react-router-dom";

function EditSpotForm({ oneSpot, spotId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    console.log("one spot from edit spot ", oneSpot)

    useEffect(() => {
      setName(oneSpot && oneSpot.name)
      setType(oneSpot && oneSpot.type)
      setAddress(oneSpot && oneSpot.address)
      setState(oneSpot && oneSpot.state)
      setCountry(oneSpot && oneSpot.country)
      setPrice(oneSpot && oneSpot.price)
      setDescription(oneSpot && oneSpot.description)
    }, [oneSpot])
    
    let editedName = (e) => {
        setName(e.target.value)
      } 
      
      let editedType = (e) => {
        setType(e.target.value)
      } 
      
      let editedAddress = (e) => {
        setAddress(e.target.value)
      } 
      
      let editedState = (e) => {
        setState(e.target.value)
      } 
      
      let editedCountry = (e) => {
        setCountry(e.target.value)
      } 
      
      let editedPrice = (e) => {
        setPrice(e.target.value)
      } 
      
      let editedDescription = (e) => {
        setDescription(e.target.value)
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
          name,
          type,
          address,
          state,
          country,
          price,
          description,
        };
    
        let spotEdited = await dispatch(editSpotThunk(payload, oneSpot.id));
        if (spotEdited) {
          history.push(`/spots`)
        }
      };

  return (
    <form className="edit-spot-form" onSubmit={handleSubmit}>
      <div className="edit-spot-inner-container">
        
        <label> Edit Name: 
          <input
            id='input-name'
            type="text"
            value={name}
            // maxLength={60}
            // required
            onChange={editedName}
          />
        </label>        
        
        <label> Edit Type: 
          <input
            id='input-type'
            type="text"
            value={type}
            // maxLength={60}
            // required
            onChange={editedType}
          />
        </label>        
        
        <label> Edit Address: 
          <input
            id='input-address'
            type="text"
            value={address}
            // maxLength={60}
            // required
            onChange={editedAddress}
          />
        </label>        
        
        <label> Edit State:
          <input
            id='input-state'
            type="text"
            value={state}
            // maxLength={60}
            // required
            onChange={editedState}
          />
        </label>        
        
        <label> Edit Country
          <input
            id='input-country'
            type="text"
            value={country}
            // maxLength={60}
            // required
            onChange={editedCountry}
          />
        </label>        
        
        <label> Edit Price:
          <input
            id='input-price'
            type="text"
            value={price}
            // maxLength={60}
            // required
            onChange={editedPrice}
          />
        </label>        
        
        <label> Edit Descirpion:
          <input
            id='input-description'
            type="text"
            value={description}
            // maxLength={60}
            // required
            onChange={editedDescription}
          />
        </label>


        <button className="edit-spot-button" type="submit">Edit Spot</button>
      </div>
    </form>
  )
}

export default EditSpotForm;
