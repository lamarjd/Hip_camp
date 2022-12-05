import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditReviewForm from './EditReviewForm';
import "../Modals.css"

function EditReviewFormModal({ review, oneSpot, spotId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-review" onClick={() => setShowModal(true)}>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm review={review} spotId={spotId} oneSpot={oneSpot} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;