import { useState } from "react";
import './NewAppointmentForm.css';

export default function NewAppointmentForm({ handleAddAppt, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [newAppt, setNewAppt] = useState({
        title: "",
        datetime: "",
        duration: "", 
    });

    const options = tags.map(function(t, idx) {
      return(
      <option key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
      );
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddAppt(newAppt);
        setNewAppt({
          title: "",
          datetime: "",
          duration: "", 
      });
        setSelectedTags([]);
    }

    function handleChange(evt) {
      if (evt.target.name === 'tags') {
      selectedTags.push(tags[parseInt(evt.target.value)]);
    }
      setSelectedTags(selectedTags)

      const newApptData = { ...newAppt, [evt.target.name]: evt.target.value };
      newApptData.tags = selectedTags;
      setNewAppt(newApptData);
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          name="title"
          value={newAppt.title}
          onChange={handleChange}
          required
        />
        <label>Date & Time: </label>
        <input
          type="datetime-local"
          name="datetime"
          value={newAppt.datetime}
          onChange={handleChange}
        />
        <label>Duration: </label>
        <input
          name="duration"
          type="number"
          value={newAppt.duration}
          onChange={handleChange}
          placeholder="in minutes"
          required
          min="0"
        />
        <label>Tags:</label>
        <select multiple={true} name="tags" value={newAppt.tags} onChange={handleChange}>
          {options}
        </select>
        <span></span><button type="submit">Add Appointment</button>
      </form>
    </>
    );
}