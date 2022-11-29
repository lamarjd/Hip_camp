import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import "../Modals.css"

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-in" onClick={() => setShowModal(true)}>Host a Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;