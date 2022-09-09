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
        <label>Title: </label>
        <input
          name="text"
          value={newTag.text}
          onChange={handleChange}
          required
        />
        <label>Color</label>
        <input
          type="color"
          name="color"
          value={newTag.color}
          onChange={handleChange}
        />
        <span></span><button>Add Tag</button>
      </form>
    </>
    );
}