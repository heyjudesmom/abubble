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
      <option class="form-control" key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
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
        <h3>New Appointment</h3> <br />
        <div class="row">
          <div class="form-group col-md-3">
            <label for="title">Title: </label>
              <input
                type="text"
                class="form-control" 
                id="title"
                name="title"
                value={newAppt.title}
                onChange={handleChange}
                required
              />
          </div>

        <div class="form-group col-md-3">
          <label for="date" >Date/Time: </label>
            <input
              id="date"
              class="form-control"
              type="datetime-local"
              name="datetime"
              value={newAppt.datetime}
              onChange={handleChange}
            />
        </div>
        <div class="form-group col-md-2">
          <label>Duration: </label>
          <input
            name="duration"
            class="form-control"
            type="number"
            value={newAppt.duration}
            onChange={handleChange}
            placeholder="in minutes"
            required
            min="0"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="tags">Tags:</label>
          <div>
            <select style={{width:"90%"}} multiple={true} id="tags" name="tags" value={newAppt.tags} onChange={handleChange}>
              {options}
            </select>
          </div>
        </div>
        <div class="form-group" style={{marginTop:"2em"}}><button type="submit" class="btn btn-default">Add Appointment</button></div>
        </div>
      </form>
    </>
    );
}