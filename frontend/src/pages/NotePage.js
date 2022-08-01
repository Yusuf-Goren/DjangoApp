import React, { useState, useEffect } from "react";
import { NavigationType, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const csrftoken = Cookies.get("csrftoken");
  const navigate = useNavigate();

  let getNote = async () => {
    if (id !== "new") {
      let response = await fetch(`/api/notes/${id}`);
      let data = await response.json();
      setNote(data);
    } else return;
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    }).then(
      Swal.fire({
        icon: "success",
        title: "You succesfully deleted the note",
        showConfirmButton: false,
        timer: 1000,
      })
    );
  };

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(note),
    }).then((resp) => {
      console.log(resp.ok);
      if (resp.ok) {
        Swal.fire({
          icon: "success",
          title: "You succesfully created a note",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "There was an error when you creating a note",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
  let handleEdit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    }
    navigate("/");
  };

  useEffect(() => {
    getNote();
  }, [id]);

  return (
    <div className="notes">
      <div>
        <Link className="backtohome" to="/">
          <h1>back</h1>
        </Link>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
      {id !== "new" ? (
        <div className="buttons">
          <button onClick={() => handleEdit()} className="buttonedit">
            Edit Note
          </button>
          <button
            onClick={() => {
              deleteNote();
              navigate("/");
            }}
            className="buttondelete"
          >
            Delete Note
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            createNote();
            navigate("/");
          }}
          className="buttoncreate"
        >
          Create
        </button>
      )}
    </div>
  );
};

export default NotePage;
