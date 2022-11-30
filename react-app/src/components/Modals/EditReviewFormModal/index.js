import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditReviewForm from './EditReviewForm';
import "../Modals.css"

function EditReviewFormModal({ filteredReviews, spot, spotId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-in" onClick={() => setShowModal(true)}>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm filteredReviews={filteredReviews} spotId={spotId} spot={spot} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;