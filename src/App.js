import React, { useState } from "react";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Sidebar from "./COMPONENTS/SIDEBAR/Sidebar";
import Form from "./COMPONENTS/FORM/Form";
import Notes from "./COMPONENTS/NOTES/Notes";
import Modal from "./COMPONENTS/MODAL/Modal";

const NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes) => id !== notes.id);
    });
  };

  const toggleModal = () => {
    // Toggle the modal state using a ternary operator.
    // open or close the modal based on the previous state -setIsModalOpen
    setIsModalOpen((prevState) => {
      return !prevState;
      // Toggles the state between true and false.
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default App;
