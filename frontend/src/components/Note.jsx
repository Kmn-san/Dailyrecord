import React,{useState,useEffect} from "react";
import '../styles/Note.css'
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

function Note({ date ,addOn,initialText}) {
    const [inputText,setinputText] = useState(initialText||"");

    useEffect(()=>{
        setinputText(initialText||"");
    },[initialText])

    function handleClick(){
        if (inputText.trim()){
            addOn({
                date:date,
                content:inputText
            })
        }else{
            addOn({
                date:date,
                content:""
            })
        }
    }

    function handleChange(event){
        setinputText(event.target.value);
    }

    return (
        <div className="note-container">
            <button className="add-button">
                <AddIcon />
            </button>
            
            <h1 className="note-title">{date.toDateString()}</h1>
            <textarea 
                className="note-textarea"
                placeholder="How's your day?"
                value = {inputText}
                onChange = {handleChange}
            ></textarea>
            <button className="save-button" onClick={handleClick}>
                <SaveIcon />
            </button>
        </div>
    );
}

export default Note;