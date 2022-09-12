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
      <option className="form-control" key={idx} value={idx} style={{backgroundColor:t.color}}>{t.text}</option>
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
        <h3>new appointment</h3> <br />
        <div className="row">
          <div>
            <label>title: </label>
              <input
                type="text"
                className="form-control" 
                id="title"
                name="title"
                value={newAppt.title}
                onChange={handleChange}
                required
              />
          </div>

        <div>
          <label>date/time: </label>
            <input
              id="date"
              className="form-control"
              type="datetime-local"
              name="datetime"
              value={newAppt.datetime}
              onChange={handleChange}
            />
        </div>
        <div>
          <label>duration: </label>
          <input
            name="duration"
            className="form-control"
            type="number"
            value={newAppt.duration}
            onChange={handleChange}
            placeholder="in minutes"
            required
            min="0"
          />
        </div>
        <div>
          <label>tags:</label>
          <div>
            <select className="form-control" style={{width:"90%"}} multiple={true} id="tags" name="tags" value={newAppt.tags} onChange={handleChange}>
              {options}
            </select>
          </div>
        <div style={{marginTop:"2em"}}>
          <button type="submit" className="btn btn-success">add appointment</button></div>
        </div>
        </div>
      </form>
    </>
    );
}