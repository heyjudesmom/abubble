import { useState, useEffect } from "react";
import * as mealPlanAPI from '../../utilities/meal-plan-api';
import MealPlanForm from '../../components/MealPlanForm/MealPlanForm';
import MealPlanIndex from '../../components/MealPlanForm/MealPlanIndex'

export default function MealPlanPage({tags}) {
  const [plan, setPlan] = useState([]);
  const [showForm, setShowForm] = useState(true);

  async function handleAddPlan(formData) {
    const plan = await mealPlanAPI.add(formData)
    setPlan(plan);
  }

    return (
      <main>
        <h1>Meal Plan Page</h1>
        { showForm ?
          <MealPlanForm tags={tags} handleAddPlan={handleAddPlan} />
          :
          <MealPlanIndex tags={tags} />
        }
        <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Back to View' : 'Edit'}
        </button>
      </main>
    );
  }