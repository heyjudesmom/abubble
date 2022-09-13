import { useState } from "react";
import './NewToDoForm.css';

export default function NewToDoForm({ handleAddToDo, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newToDo, setNewToDo] = useState({
        text: "",
    });

    const options = tags.map(function(t, idx) {
      return(
      <option className="form-control" key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddToDo(newToDo)
        setNewToDo({text: ""})
        setSelectedTags([])
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
        <h3>new</h3>
        <div className="form-group">
          <label>text: </label>
          <input
            name="text"
            value={newToDo.text}
            onChange={handleChange}
            required
            type="text"
            className="form-control"
          />
        </div>
        { options.length ? 
        <div className="form-group">
          <label>tags:</label>
          <select className="form-control" multiple={true} name="tags" value={newToDo.tags} onChange={handleChange}>
            {options}
          </select>
        </div>
        :
        ""
        }
        <button className="btn btn-success"type="submit">add to list</button>
      </form>
    </>
    );
}