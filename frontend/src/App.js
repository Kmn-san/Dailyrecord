import React, { useState } from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calender from "./components/Calender";
import Note from "./components/Note";

function App(){
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({}); // Change to object for date-based storage

  function clickedDate(date){
    setSelectedDate(date);
    setIsClicked(true);
  }

  function addNote(note){
    const dateKey = note.date.toDateString(); // Use date string as key
    setNotes(prevNotes => ({
      ...prevNotes,
      [dateKey]: note.content
    }));
    setIsClicked(false); // Jump back to calendar
  }

  function getNoteForDate(date) {
    const dateKey = date.toDateString();
    return notes[dateKey] || ""; // Return empty string if no note exists
  }

  return(
    <div>
      <Header />

      {isClicked ? (
        <Note 
          date={selectedDate} 
          addOn={addNote}
          initialText={getNoteForDate(selectedDate)} // Pass existing text
        />
      ) : (
        <Calender onDayClick={clickedDate} />
      )}

      <Footer />
    </div>
  )
}

export default App;