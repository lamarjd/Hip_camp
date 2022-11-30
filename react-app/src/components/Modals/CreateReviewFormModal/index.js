import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateReviewForm from './CreateReviewForm';
import "../Modals.css"

function CreateReviewFormModal({ oneSpot, spotId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="review-modal" onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm oneSpot={oneSpot} 
      spotId={spotId} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateReviewFormModal;