import { useState } from "react";
import './EditChoreForm.css';

export default function EditChoreForm({ handleUpdate, tags, c, setShowEditForm, showEditForm}) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newChore, setNewChore] = useState({
        text: c.text
    });

    if (!tags) return;
    const options = tags.map(function(t, idx) {
      return(
      <option key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdate(newChore, c._id);
        setNewChore({text: ""});
        setSelectedTags([]);
        setShowEditForm(!showEditForm)
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
        <h1>Edit Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Text: </label>
        <input
          name="text"
          value={newChore.text}
          onChange={handleChange}
          required
          placeholder={c.text}
        />
        <label>Tags:</label>
        <select multiple={true} name="tags" value={newChore.tags} onChange={handleChange}>
          {options}
        </select>
        <span></span><button type="submit">Save Chore</button>
      </form>
    </>
    );
}