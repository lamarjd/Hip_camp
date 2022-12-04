import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSpotThunk, fetchOneSpot } from "../../../store/spot";
import { useHistory } from "react-router-dom";
import "../../../context/Modal.css"

function EditSpotForm({ spotId, oneSpot, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [type, setType] = useState("");
  // const [address, setAddress] = useState("");
  const [city, setCity] = useState("")
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  console.log("one spot from edit spot ", oneSpot);

  // const { id } = spot
  console.log("SPOT ID from edit Form", spotId)

  useEffect(() => {
    setImageUrl(oneSpot && oneSpot.imageUrl)
    setName(oneSpot && oneSpot.name);
    setType(oneSpot && oneSpot.type);
    // setAddress(oneSpot && oneSpot.address);
    setState(oneSpot && oneSpot.state);
    setCountry(oneSpot && oneSpot.country);
    setPrice(oneSpot && oneSpot.price);
    setDescription(oneSpot && oneSpot.description);
  }, [oneSpot]);

  useEffect(() => {
    dispatch(fetchOneSpot(spotId))
  }, [dispatch])

  let editedImageUrl = (e) => {
    setImageUrl(e.target.value)
  }

  let editedName = (e) => {
    setName(e.target.value);
  };

  let editedType = (e) => {
    setType(e.target.value);
  };

  let editedCity = (e) => {
    setCity(e.target.value);
  };

  let editedState = (e) => {
    setState(e.target.value);
  };

  let editedCountry = (e) => {
    setCountry(e.target.value);
  };

  let editedPrice = (e) => {
    setPrice(e.target.value);
  };

  let editedDescription = (e) => {
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

    let spotEdited = await dispatch(editSpotThunk(payload, spotId));

    console.log("Edited Spot", spotEdited)

    if (spotEdited) {
      setShowModal(false)
      history.push(`/spots/${spotEdited.id}`);
    }
  };

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!editedImageUrl) {
      errors.push("Spot must include an image")
    }

    if (!imageUrl.includes(".jpg" || ".png")) {
      errors.push(
        "Spot Image must be in the proper format (.jpg or .png)"
      );
    }

    if (!name) {
      errors.push("Spot must have a name")
    }

    if (!state) {
      errors.push("Spot must have a State")
    }
    
    if (!country) {
      errors.push("Spot must have a Country")
    }
    
    if (!price) {
      errors.push("Spot must have a Price")
    }
    
    if (!description) {
      errors.push("Spot must have a Description")
    }
    
    if (description.length < 20 || description.length > 2000) {
      errors.push("Description must be between 20 and 2000 characters")
    }

    setErrors(errors)
  }, [imageUrl, name, state, country, price, description])


  return (
    <form className="edit-spot-form" onSubmit={handleSubmit}>
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
      <div className="edit-spot-inner-container">
        <ul id="lists">
        <li>
            <label>
              {" "}
              Edit Spot Type
              <select onChange={editedType}>
                <option value="Campsite">Campsite</option>
                <option value="Lodging">Lodging</option>
              </select>
            </label>
          </li>
        <li>
            <label>
              {" "}
              Edit Image:
              <input
                id="input-image"
                type="text"
                value={imageUrl}
                maxLength={250}
                required
                onChange={editedImageUrl}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit Name:
              <input
                id="input-name"
                type="text"
                value={name}
                maxLength={60}
                minLength={5}
                required
                onChange={editedName}
              />
            </label>
          </li>

          <li>
            <label>
              {" "}
              Edit City:
              <input
                id="input-city"
                type="text"
                placeholder="City (optional)"
                value={city}
                maxLength={60}
                minLength={5}
                // required
                onChange={editedCity}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit State:
              <input
                id="input-state"
                type="text"
                value={state}
                maxLength={50}
                required
                onChange={editedState}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit Country
              <input
                id="input-country"
                type="text"
                value={country}
                maxLength={50}
                minLength={3}
                required
                onChange={editedCountry}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit Price:
              <input
                id="input-price"
                type="text"
                value={price}
                // maxLength={60}
                required
                onChange={editedPrice}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit Description:
              <input
                id="input-description"
                type="text"
                maxLength={2000}
                minLength={20}
                value={description}
                required
                onChange={editedDescription}
              />
            </label>
          </li>

          <button id="submit" type="submit">
            Submit Edit
          </button>
        </ul>
      </div>
    </form>
  );
}

export default EditSpotForm;
