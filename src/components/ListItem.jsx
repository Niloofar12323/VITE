import React, { useState } from "react";
import trash from "../assets/trash.svg";
import pen from "../assets/pen.svg";
import { API_URL } from '../config';
const BASE_URL = API_URL; // Hier steht die Backend-URL

export default function ListItem({ task, getData }) {
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleEdit = () => {
    // Hier sollen die update Daten verschickt werden
    // Anschließend müssen die aktualisierten Daten abgerufen werden
  };

  const handleDelete = () => {
    // Hier muss die Anfrage gemacht werden um einen Task zu löschen
    // Anschließend müssen die aktualisierten Daten abgerufen werden
  };

  return (
    <>
      <li>
        {task.task}
        <div className="imageWrapper">
          <img src={pen} onClick={() => setEdit(true)} />
          <img src={trash} onClick={handleDelete} />
        </div>
      </li>
      {edit && (
        <div className="editWrapper">
          <input
            value={newTask}
            onChange={(evt) => setNewTask(evt.target.value)}
            className="editTask"
          />
          <button onClick={handleEdit}>OK</button>
        </div>
      )}
    </>
  );
}
