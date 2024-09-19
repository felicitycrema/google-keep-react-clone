import React, { useState } from "react";
import "./Form.css";
// import uid from "uid";

export default function Form(props) {
  const { edit, selectedNote, toggleModal } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || ""); // Corrected to selectedNote.text
  const [isActiveForm, setActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!edit) {
      props.addNote({
        // id: uid(),
        title,
        text,
      });
      setActiveForm(false);
    } else {
      props.editNote({
        id: selectedNote.id,
        title,
        text,
      });
      toggleModal();
    }
    setTitle("");
    setText("");
  };

  const formClickHandler = () => {
    setActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            type="text"
            className="note-text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions">
              {/* Action icons */}
              <div className="icons">
                {["add_alert", "person_add", "palette", "image", "archive", "more_vert", "undo", "redo"].map((icon) => (
                  <div className="tooltip" key={icon}>
                    <span className={`material-symbols-outlined hover small-icon`}>{icon}</span>
                    <span className="tooltip-text">{icon.replace('_', ' ').capitalize()}</span>
                  </div>
                ))}
              </div>
              <button className="close-btn">close</button>
            </div>
          ) : (
            <div className="form-actions">
              {/* New actions when form is inactive */}
              {["check_box", "brush", "image"].map((icon) => (
                <div className="tooltip" key={icon}>
                  <span className={`material-symbols-outlined hover`}>{icon}</span>
                  <span className="tooltip-text">{icon.replace('_', ' ').capitalize()}</span>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
