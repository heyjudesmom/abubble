import { useState } from "react";
import './NewToDoForm.css';

export default function NewToDoForm({ handleAddToDo, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newToDo, setNewToDo] = useState({
        text: "",
    });

    const options = tags.map(function(t, idx) {
      return(
      <option key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddToDo(newToDo)
    }

    function handleChange(evt) {
      if (evt.target.name === 'tags') {
      selectedTags.push(tags[parseInt(evt.target.value)]);
    }
      setSelectedTags(selectedTags)

      const newToDoData = { ...newToDo, [evt.target.name]: evt.target.value };
      newToDoData.tags = selectedTags;
      setNewToDo(newToDoData);
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label>Text: </label>
        <input
          name="text"
          value={newToDo.text}
          onChange={handleChange}
          required
          pattern=".{4,}"
        />
        <label>Tags:</label>
        <select multiple={true} name="tags" value={newToDo.tags} onChange={handleChange}>
          {options}
        </select>
        <span></span><button type="submit">Add to list</button>
      </form>
    </>
    );
}