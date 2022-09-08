import "./MealPlanForm.css";
import {useState} from 'react';

export default function MealPlanForm({ handleAddPlan, tags }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [newPlan, setNewPlan] = useState({
        sun: "", 
        mon: "", 
        tue: "", 
        wed: "", 
        thu: "", 
        fri: "", 
        sat: "", 
        });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddPlan(newPlan);
    }

    function handleChange(evt) {
      if (evt.target.name === 'tags') {
      selectedTags.push(tags[parseInt(evt.target.value)]);
    }
      setSelectedTags(selectedTags)

      const newPlanData = { ...newPlan, [evt.target.name]: evt.target.value };
      newPlanData.tags = selectedTags;
      setNewPlan(newPlanData);
    }
    return (
        <main className="meal-form">
            <form onSubmit={handleSubmit}>
                <label>Sunday</label><input
                name="sun" 
                value={newPlan.sun}
                onChange={handleChange}
                type="text" />
                <label>Monday</label><input
                name="mon" 
                value={newPlan.mon}
                onChange={handleChange}
                type="text" />
                <label>Tuesday</label><input
                name="tue" 
                value={newPlan.tue}
                onChange={handleChange}
                type="text" />
                <label>Wednesday</label><input
                name="wed" 
                value={newPlan.wed}
                onChange={handleChange}
                type="text" />
                <label>Thursday</label><input
                name="thu" 
                value={newPlan.thu}
                onChange={handleChange}
                type="text" />
                <label>Friday</label><input
                name="fri" 
                value={newPlan.fri}
                onChange={handleChange}
                type="text" />
                <label>Saturday</label><input
                name="sat" 
                value={newPlan.sat}
                onChange={handleChange}
                type="text" />
                <button type="submit">Update Meal Plan</button>
            </form>
        </main>
    );
}