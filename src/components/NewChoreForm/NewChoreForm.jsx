import { useState } from "react";
import './NewChoreForm.css';

export default function NewChoreForm({ handleAddChore, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newChore, setNewChore] = useState({
        text: "",
    });

    if (!tags) return;
    const options = tags.map(function(t, idx) {
      return(
      <option key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddChore(newChore);
        setNewChore({text: ""});
        setSelectedTags([]);
    }

    function handleChange(evt) {
      if (evt.target.name === 'tags') {
      selectedTags.push(tags[parseInt(evt.target.value)]);
    }
      setSelectedTags(selectedTags)
      const newChoreData = { ...newChore, [evt.target.name]: evt.target.value };
      newChoreData.tags = selectedTags;
      setNewChore(newChoreData);
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label>Text: </label>
        <input
          name="text"
          value={newChore.text}
          onChange={handleChange}
          required
        />
        <label>Tags:</label>
        <select multiple={true} name="tags" value={newChore.tags} onChange={handleChange}>
          {options}
        </select>
        <span></span><button type="submit">Add Chore</button>
      </form>
    </>
    );
}