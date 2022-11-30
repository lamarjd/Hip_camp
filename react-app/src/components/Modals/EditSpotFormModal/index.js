import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditSpotForm from './EditSpotForm';
import "../Modals.css"

function EditSpotFormModal({ oneSpot, spotId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-in" onClick={() => setShowModal(true)}>Edit Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSpotForm spotId={spotId} oneSpot={oneSpot} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSpotFormModal;