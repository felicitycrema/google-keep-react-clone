import React, { useState } from "react";
import "./Modal.css";
import Form from "../FORM/Form";

const Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal, editNote } = props;
  const { hasCursor, setHasCursor } = useState(false);

  const handleCloseModal = () => !hasCursor && toggleModal();
  const onMouseOverModal = () => setHasCursor(true);
  const onMouseOutModal = () => setHasCursor(false);

  return (
    <div
      className={`modal ${isModalOpen ? "open-modal" : ""}`}
      onClick={handleCloseModal}
    >
      <div
        className="modal-content"
        onMouseOverModal={onMouseOverModal}
        onMouseOutModal={onMouseOutModal}
      >
        <Form
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
          edit
        />
        {/* <div className="form-container">
          <form className="form" id="modal-form">
            <input
              type="text"
              className="note-title"
              id="modal-title"
              placeholder="Title"
            />
            <input
              id="modal-text"
              type="text"
              className="note-text"
              placeholder="Take a note..."
            />
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn" id="modal-btn">
                close
              </button>
            </div>
          </form>
        </div>*/}
      </div>
    </div>
  );
};
export default Modal;
