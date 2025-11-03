import React,{useState}from "react"
import Header from "./Header";
import Footer from "./Footer";
import Calender from "./Calender";
import Note from "./Note";

function App(){
  const [isClicked,setIsClicked]= useState(false);
  const [selectedDate,setSelectedDate] = useState(new Date());
  const [notes,setNotes] = useState({});

  function clickedDate(date){
    setSelectedDate(date);
    setIsClicked(true);
  }

  function addNote(note){
    const dataKey = note.date.toDateString();
    console.log(note);
    setNotes(prevValue => 
      ({
        ...prevValue,
        [dataKey] : note.content
      }))
    setIsClicked(false);
  }
  
  function getNoteForDate(date){
    const dataKey = date.toDateString();
    
    return notes[dataKey] || "";
  }

  return(
    <div>
      <Header />
      {console.log(notes)};

      {isClicked?
      <Note 
      date={selectedDate} 
      addOn={addNote}
      initialText={getNoteForDate(selectedDate)}/>:
      <Calender onDayClick={clickedDate}/>};

      <Footer />
    </div>
    
  )
}

export default App;