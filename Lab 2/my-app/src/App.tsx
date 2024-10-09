import logo from './logo.svg';
import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { LikeList }  from "./favorites";
import React, { useState } from 'react';


function App() {

  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (noteTitle: string) => {
      if (favorites.includes(noteTitle)) {
          const updatedFavorites = favorites.filter(title => title !== noteTitle);
          setFavorites(updatedFavorites);
      } else {
          const updatedFavorites = [...favorites, noteTitle];
          setFavorites(updatedFavorites);
      }
  };

  

 return (
    <div className='app-container'>
      <div>
        <form className="note-form">
          <input placeholder="Note Title"></input>

          <textarea></textarea>

          <button type="submit">Create Note</button>


        </form>
        <LikeList favorites={favorites} />
      </div>
     
      <div className="notes-grid">
          {dummyNotesList.map((note) => (
            <div
              key={note.id}
              className="note-item">
              <div className="notes-header">
                <button onClick={() => toggleFavorite(note.title)} className="heart-btn">
                    {favorites.includes(note.title) ? '❤️' : '🤍'}
                </button>                
                <button>x</button>
              </div>
              <h2> {note.title} </h2>
              <p> {note.content} </p>
              <p> {note.label} </p>
            </div>
          ))}
      </div>
    </div>

 );
}

export default App;