import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSpotThunk } from "../../../store/spot";
import { useHistory } from "react-router-dom";
import "../../../context/Modal.css"

function CreateSpotForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [showForm, setShowForm] = useState(false);

  let updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  let updateName = (e) => {
    setName(e.target.value);
  };

  let updateType = (e) => {
    setType(e.target.value);
  };

  let updateAddress = (e) => {
    setAddress(e.target.value);
  };

  let updateCity = (e) => {
    setCity(e.target.value);
  };

  let updateState = (e) => {
    setState(e.target.value);
  };

  let updateCountry = (e) => {
    setCountry(e.target.value);
  };

  let updatePrice = (e) => {
    setPrice(e.target.value);
  };

  let updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      imageUrl,
      type,
      address,
      city,
      state,
      country,
      price,
      description,
    };

    let spotCreated = await dispatch(createSpotThunk(payload));
    if (spotCreated) {
      setImageUrl("");
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
      <form className="spot-form" onSubmit={handleSubmit}>
        <ul id="lists">
          <li>
            <label>
              <input
                className="spot-form-image-field"
                placeholder="Spot Image"
                type="text"
                maxLength={250}
                value={imageUrl}
                required
                onChange={updateImageUrl}
              />
            </label>
          </li>

          <li>
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
          </li>

          <li>
            <label>
              {" "}
              Spot Type
              <select onChange={updateType}>
                <option value="Campsite">Campsite</option>
                <option value="Lodging">Lodging</option>
              </select>
            </label>
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
            <label>
              <input
                className="spot-form-price-field"
                placeholder="Spot price"
                // maxLength={60}
                value={price}
                required
                onChange={updatePrice}
              />
            </label>
          </li>

          <li>
            <label>
              <input
                className="spot-form-description-field"
                placeholder="Add a Description for your spot"
                type="text"
                maxLength={2000}
                value={description}
                required
                onChange={updateDescription}
              />
            </label>
          </li>

          <button type="submit">Submit</button>
        </ul>
      </form>
    </div>
  );
}

export default CreateSpotForm;
