import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSpotThunk } from "../../../store/spot";
import { useHistory } from "react-router-dom";
import "../../../context/Modal.css";

function CreateSpotForm({ showModal, setShowModal }) {
  // onError={e => {e.target.src=`${defaultPic}`}}

  const dispatch = useDispatch();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("Campsite");
  // const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!imageUrl) {
      errors.push("Spot must include an image (.jpg or .png format)");
    }

    // if (!imageUrl.includes(".jpg" || ".png")) {
    //   errors.push(
    //     "Spot Image must be in the proper format (.jpg or .png)"
    //   )
    // }

    // if (!name) {
    //   errors.push("Spot must have a name");
    // }

    // if (!state) {
    //   errors.push("Spot must have a State");
    // }

    // if (!country) {
    //   errors.push("Spot must have a Country");
    // }

    // if (!price) {
    //   errors.push("Spot must have a Price");
    // }

    // if (!description) {
    //   errors.push("Spot must have a Description");
    // }

    // if (description.length < 20 || description.length > 2000) {
    //   errors.push("Description must be between 20 and 2000 characters");
    // }

    setErrors(errors);
  }, [imageUrl, name, state, country, price, description]);

  let updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  let updateName = (e) => {
    setName(e.target.value);
  };

  let updateType = (e) => {
    setType(e.target.value);
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
      setType("Campsite");
      setCity("");
      setState("");
      setCountry("");
      setPrice(0);
      setDescription("");
      setShowModal(false);
      history.push(`/spots`);
    }
  };

  return (
    <div className="create-spot-container">
      <form className="spot-form" onSubmit={handleSubmit}>
        <ul>
          {errors &&
            errors.map((error) => {
              return (
                <li className="errors" key={error}>
                  {error}
                </li>
              );
            })}
        </ul>
        <ul id="lists">
          <li>
            <label>
              {" "}
              Spot Type:
              <select onChange={updateType}>
                <option value="Campsite">Campsite</option>
                <option value="Lodging">Lodging</option>
              </select>
            </label>
          </li>

          <li>
            <label>
              {" "}
              Upload Image:
              <input
                className="spot-form-image-field"
                placeholder="Spot Image URL (.jpg or .png format)"
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
              Spot Name:
              <input
                className="spot-form-name-field"
                placeholder="Spot Name"
                type="text"
                maxLength={60}
                minLength={5}
                value={name}
                required
                onChange={updateName}
              />
            </label>
          </li>

          <li>
            <label> Spot City: 
              <input
                className="spot-form-city-field"
                placeholder="Spot City"
                type="text"
                maxLength={60}
                minLength={5}
                value={city}
                // required
                onChange={updateCity}
              />
            </label>
          </li>

          <li>
            <label> Spot State: 
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
            <label> Spot Country: 
              <input
                className="spot-form-country-field"
                placeholder="Spot Country"
                type="text"
                maxLength={50}
                minLength={3}
                value={country}
                required
                onChange={updateCountry}
              />
            </label>
          </li>

          <li>
            <label> Spot Price: 
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
            <label> Spot Description: 
              <input
                className="spot-form-description-field"
                placeholder="Add a Description for your spot"
                type="text"
                maxLength={2000}
                minLength={20}
                value={description}
                required
                onChange={updateDescription}
              />
            </label>
          </li>

          <button id="submit" type="submit">
            Submit
          </button>
        </ul>
      </form>
    </div>
  );
}

export default CreateSpotForm;
