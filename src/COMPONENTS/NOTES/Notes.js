import "./Notes.css";
import Note from "./Note.js";

const Notes = (props) => {
  const { notes, deleteNote, toggleModal } = props;

  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
