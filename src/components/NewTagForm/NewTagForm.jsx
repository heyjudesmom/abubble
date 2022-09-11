import { useState } from "react";
import './NewTagForm.css'

export default function NewTagForm({ handleAddTag }) {
    const [newTag, setNewTag] = useState({
        text: "",
        color: ""
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTag(newTag);
        setNewTag({
          text: "",
          color: ""
      });
      }

    function handleChange(evt) {
        const newTagData = { ...newTag, [evt.target.name]: evt.target.value };
        setNewTag(newTagData);
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
      <h3>new tag</h3>
      <div className="form-group">
        <label>text: </label>
        <input
          name="text"
          type="text"
          className="form-control"
          value={newTag.text}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group"> 
        <label>color</label>
        <input
          type="color"
          className="form-control"
          name="color"
          value={newTag.color}
          onChange={handleChange}
        />
        </div>
        <button className="btn btn-default">Add Tag</button>
      </form>
    </>
    );
}