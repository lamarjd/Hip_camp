import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSpotThunk, fetchSpots } from "../../../store/spot";
import { useHistory } from "react-router-dom";
import "../../../context/Modal.css"

function EditSpotForm({ spotId, spot, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  console.log("one spot from edit spot ", spot);

  // const { id } = spot
  console.log("SPOT ID from edit Form", spotId)

  useEffect(() => {
    setImageUrl(spot && spot.imageUrl)
    setName(spot && spot.name);
    setType(spot && spot.type);
    setAddress(spot && spot.address);
    setState(spot && spot.state);
    setCountry(spot && spot.country);
    setPrice(spot && spot.price);
    setDescription(spot && spot.description);
  }, [spot]);

  useEffect(() => {
    dispatch(fetchSpots())
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

  let editedAddress = (e) => {
    setAddress(e.target.value);
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
      address,
      state,
      country,
      price,
      description,
    };

    let spotEdited = await dispatch(editSpotThunk(payload, spotId));
    if (spotEdited) {
      setShowModal(false)
      history.push(`/spots/${spotEdited.id}`);
    }
  };

  return (
    <form className="edit-spot-form" onSubmit={handleSubmit}>
      <div className="edit-spot-inner-container">
        <ul id="lists">
        <li>
            <label>
              {" "}
              Edit Image:
              <input
                id="input-image"
                type="text"
                value={imageUrl}
                // maxLength={60}
                // required
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
                // maxLength={60}
                // required
                onChange={editedName}
              />
            </label>
          </li>
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
              Edit Address:
              <input
                id="input-address"
                type="text"
                value={address}
                // maxLength={60}
                minLength={3}
                required
                onChange={editedAddress}
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
                // maxLength={60}
                // required
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
                // maxLength={60}
                // required
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
                // required
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
                value={description}
                // maxLength={60}
                // required
                onChange={editedDescription}
              />
            </label>
          </li>

          <button className="edit-spot-button" type="submit">
            Submit Edit
          </button>
        </ul>
      </div>
    </form>
  );
}

export default EditSpotForm;
