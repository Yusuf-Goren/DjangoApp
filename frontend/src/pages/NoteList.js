import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { Link, useNavigate } from "react-router-dom";

const NoteList = () => {
  let [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNotes(data);
    console.log(data);
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <h1 className="about" onClick={() => navigate("/about")}>
        ABOUT
      </h1>
      <div className="notesheader">
        <h1 className="notestitle">Notes</h1>
        <p className="notescount">{notes.length}</p>
      </div>
      <div className="noteslist">
        {notes.map((note, index) => (
          <Item key={index} note={note} />
        ))}
      </div>
      <button className="buttoncreate" onClick={() => navigate("/note/new")}>
        Add
      </button>
    </div>
  );
};

export default NoteList;
