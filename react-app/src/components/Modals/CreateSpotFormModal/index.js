import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import "../Modals.css"

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-in" onClick={() => setShowModal(true)}>Add a spot dude</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;