import { useState, useEffect } from "react";
import { api } from "../services/api";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/notes?page=1&perPage=10");
        setNotes(response.data);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};
