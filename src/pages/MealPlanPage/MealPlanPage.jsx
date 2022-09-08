import { useState, useEffect } from "react";
import * as mealPlanAPI from '../../utilities/meal-plan-api';


export default function MealPlanPage({tags}) {
  const [plan, setPlan] = useState([]);
  async function handleCreate(formData) {
    const plan = await mealPlanAPI.add(formData)
    setPlan([...plan, plan]);
  }
    return (
        <h1>MealPlanPage</h1>
    );
  }