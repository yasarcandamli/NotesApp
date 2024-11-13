import { useState } from 'react'
import './App.css'

function App() {
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#f28b82');
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //Adding a new note
  const addNote = () => {
    if (noteText.trim()) {
      setNotes([
        ...notes, { text: noteText, color: noteColor, id: Date.now() }
      ]);
      setNoteText('') //Clear the textarea
    }
  }

  // Deleting a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  //Filtering the notes
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='app'>
      <h2>NotesApp</h2>
      <input
        type="text"
        placeholder='Search...'
        className='searchInput'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className='noteInputContainer'>
        <textarea
          placeholder='Enter your note here...'
          className='textarea'
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />

        <div className='noteInputGroup'>
          <div className="colorPicker">
            {['#f28b82', '#fbbc04', '#fff475', '#a7ffeb', '#ccff90'].map(color => (<span
              key={color}
              onClick={() => setNoteColor(color)}
              className='colorDot'
              style={{
                backgroundColor: color,
                border: color === noteColor ? '2px solid #555' : 'none'
              }}
            />
            ))}
          </div>
          <button className='addButton' onClick={addNote}>ADD</button>
        </div>
      </div>

      <div className='notesContainer'>
        {filteredNotes.map(note => (
          <div
            key={note.id}
            className='note'
            style={{
              backgroundColor: note.color
            }}
          >
            <p>{note.text}</p>
            <button
              className='deleteButton'
              onClick={() => deleteNote(note.id)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
