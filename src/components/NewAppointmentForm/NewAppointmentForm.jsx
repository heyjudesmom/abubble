import { useState } from "react";
import './NewAppointmentForm.css'

export default function NewAppointmentForm({ handleAddAppt }) {
    const [newAppt, setNewAppt] = useState({
        title: "",
        date: "",
        duration: "", 
        // tags: [],
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddAppt(newAppt)
    }

    function handleChange(evt) {
        const newApptData = { ...newAppt, [evt.target.name]: evt.target.value };
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
        <span></span><button>Add Appointment</button>
      </form>
    </>
    );
}