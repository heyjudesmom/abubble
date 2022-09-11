import "./MealPlanForm.css";
import {useState} from 'react';
import { Link, Navigate } from "react-router-dom";
import MealPlanIndex from "./MealPlanIndex";

export default function MealPlanForm({ handleAddPlan, tags, plan, setShowPlan }) {
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
        setNewPlan({
            sun: "", 
            mon: "", 
            tue: "", 
            wed: "", 
            thu: "", 
            fri: "", 
            sat: "", 
        });
        setShowPlan(true);
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
        <main>
            <form onSubmit={handleSubmit} className="meal-form">
                <div className="form-group">
                    <label>sunday</label>
                    <input
                    name="sun" 
                    value={newPlan.sun}
                    onChange={handleChange}
                    type="text"
                    className="form-control" />
                </div>
                <div className="form-group">
                    <label>monday</label>
                    <input
                    name="mon" 
                    value={newPlan.mon}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>tuesday</label>
                    <input
                    name="tue" 
                    value={newPlan.tue}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>wednesday</label>
                    <input
                    name="wed" 
                    value={newPlan.wed}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>thursday</label>
                    <input
                    name="thu" 
                    value={newPlan.thu}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>friday</label>
                    <input
                    name="fri" 
                    value={newPlan.fri}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>saturday</label>
                    <input
                    name="sat" 
                    value={newPlan.sat}
                    onChange={handleChange}
                    type="text"
                    className="form-control" 
                    />
                </div>
                <button className="btn btn-primary" type="submit">save meal plan</button>
            </form>
        </main>
    );
}