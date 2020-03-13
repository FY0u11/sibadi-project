import React from 'react'

import './styles.css'

const Modal = ({ modal, closeModal }) => {
  return (
    <div
      className="my-container"
      onMouseDown={event => event.target.className === 'my-container' && closeModal()}
    >
      <div className="my-modal">
        <button className="ml-2 mb-1 close" onClick={closeModal}>
          &times;
        </button>
        <h2>{modal.title}</h2>
        {modal.body}
      </div>
    </div>
  )
}

export default Modal
