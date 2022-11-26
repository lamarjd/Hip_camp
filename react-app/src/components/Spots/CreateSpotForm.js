import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSpotThunk } from "../../store/spot";
import { useHistory } from "react-router-dom";

function CreateSpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [spotImage, setSpotImage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [showForm, setShowForm] = useState(false)

  let updateSpotImage = (e) => {
    setSpotImage(e.target.value)
  }

  let updateName = (e) => {
    setName(e.target.value)
  } 
  
  let updateType = (e) => {
    setType(e.target.value)
  } 
  
  let updateAddress = (e) => {
    setAddress(e.target.value)
  } 

  let updateCity = (e) => {
    setCity(e.target.value)
  }
  
  let updateState = (e) => {
    setState(e.target.value)
  } 
  
  let updateCountry = (e) => {
    setCountry(e.target.value)
  } 
  
  let updatePrice = (e) => {
    setPrice(e.target.value)
  } 
  
  let updateDescription = (e) => {
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

    let spotCreated = await dispatch(createSpotThunk(payload));
    if (spotCreated) {
      setSpotImage("");
      setName("");
      setType("");
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      setPrice(0);
      setDescription("");
    }
  };

  return (
    <div className="create-spot-container">
      {showForm &&
      <form className="spot-form" onSubmit={handleSubmit}>
        
        <label>
          <input
            className="spot-form-image-field"
            placeholder="Spot Image"
            type="text"
            maxLength={250}
            value={spotImage}
            required
            onChange={updateSpotImage}
            />
        </label>  

        <label>
          <input
            className="spot-form-name-field"
            placeholder="Spot Name"
            type="text"
            maxLength={60}
            value={name}
            required
            onChange={updateName}
            />
        </label>        
        
        <label>
          <input
            className="spot-form-type-field"
            placeholder="Spot Type"
            type="text"
            maxLength={50}
            value={type}
            required
            onChange={updateType}
            />
        </label>        
        
        <label>
          <input
            className="spot-form-address-field"
            placeholder="Spot address"
            type="text"
            maxLength={60}
            value={address}
            required
            onChange={updateAddress}
            />
        </label>

        <label>
          <input
            className="spot-form-city-field"
            placeholder="Spot City"
            type="text"
            maxLength={60}
            value={city}
            required
            onChange={updateCity}
            />
        </label>          
        
        <label>
          <input
            className="spot-form-state-field"
            placeholder="Spot State"
            type="text"
            maxLength={50}
            value={state}
            required
            onChange={updateState}
            />
        </label>        
        
        <label>
          <input
            className="spot-form-country-field"
            placeholder="Spot Country"
            type="text"
            maxLength={50}
            value={country}
            required
            onChange={updateCountry}
            />
        </label>        
        
        <label>
          <input
            className="spot-form-price-field"
            placeholder="Spot price"
            type="text"
            // maxLength={60}
            value={price}
            required
            onChange={updatePrice}
            />
        </label>        
        
        <label>
          <input
            className="spot-form-description-field"
            placeholder="Spot Description"
            type="text"
            maxLength={2000}
            value={description}
            required
            onChange={updateDescription}
            />
        </label>


        <button type="submit">Submit</button>
      </form>
      }

      <button 
      onClick={() => setShowForm(true)}
      className="ListButton" type="submit"
      >Add Spot</button>
    </div>
  );
}

export default CreateSpotForm;
