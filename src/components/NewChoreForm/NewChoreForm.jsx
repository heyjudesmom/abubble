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
      <option className="form-control" key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
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
      <form onSubmit={handleSubmit} id="ctr-50">
        <h3>new chore</h3>
        <div className="form-group">
          <label>text: </label>
          <input
            type="text"
            className="form-control" 
            name="text"
            value={newChore.text}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>tags:</label>
          <select className="form-control" multiple={true} name="tags" value={newChore.tags} onChange={handleChange}>
            {options}
          </select>
        </div>
        <div style={{marginTop:"2em"}}>
          <button className="btn btn-success" type="submit">add chore</button>
        </div>
      </form>
    </>
    );
}