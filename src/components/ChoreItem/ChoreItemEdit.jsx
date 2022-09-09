import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'

export default function EditChoreForm({ handleEdit, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [updatedChore, setUpdatedChore] = useState({
        text: "",
    });
    const params = useParams();
    const navigate = useNavigate();


    const options = tags.map(function(t, idx) {
      return(
      <option key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleEdit(updatedChore)
    }

    function handleChange(evt) {
      if (evt.target.name === 'tags') {
      selectedTags.push(tags[parseInt(evt.target.value)]);
    }
      setSelectedTags(selectedTags)

      const updatedChoreData = { ...updatedChore, [evt.target.name]: evt.target.value };
      updatedChoreData.tags = selectedTags;
      setUpdatedChore(updatedChoreData);
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label>Text: </label>
        <input
          name="text"
          value={updatedChore.text}
          onChange={handleChange}
          required
          pattern=".{4,}"
        />
        <label>Tags:</label>
        <select multiple={true} name="tags" value={updatedChore.tags} onChange={handleChange}>
          {options}
        </select>
        <span></span><button type="submit">Save Changes</button>
      </form>
    </>
    );
}