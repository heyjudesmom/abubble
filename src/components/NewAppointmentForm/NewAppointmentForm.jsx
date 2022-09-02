import { useState } from "react";
import './NewAppointmentForm.css'

export default function NewAppointmentForm({ addAppt }) {
    const [newAppt, setNewAppt] = useState({
        title: "",
        date: "",
        duration: ""
    });
    function handleAddAppt(evt) {
        evt.preventDefault();
        addAppt(newAppt);
        setNewAppt({
            title: "",
            date: "",
            duration: ""
        });
    }

    function handleChange(evt) {
        const newApptData = { ...newAppt, [evt.target.name]: evt.target.value };
        setNewAppt(newApptData);
    }

    return (
        <>
      <form onSubmit={handleAddAppt}>
        <label>Title: </label>
        <input
          name="title"
          value={newAppt.title}
          onChange={handleChange}
          required
          pattern=".{4,}"
        />
        <label>Date & Time: </label>
        <input
          type="datetime-local"
          name="date"
          value={newAppt.date}
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
        <label> minutes </label>
        <button>Add Appointment</button>
      </form>
    </>
    );
}