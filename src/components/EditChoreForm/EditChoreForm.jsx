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
      <form onSubmit={handleSubmit}>
        <h3>edit</h3>
        <div className="form-group">
          <label>Text: </label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={newChore.text}
            onChange={handleChange}
            required
            placeholder={c.text}
          />
        </div>
        <div className="form-group">
          <label>Tags:</label>
          <select className="form-control" multiple={true} name="tags" value={newChore.tags} onChange={handleChange}>
            {options}
          </select>
        </div>
        <div style={{marginTop:"2em"}}>
          <button className="btn btn-default btn-success"type="submit">Save Chore</button>
        </div>
      </form>
    </>
    );
}