import { useState, useEffect } from "react";
import * as mealPlanAPI from '../../utilities/meal-plan-api';
import MealPlanForm from '../../components/MealPlanForm/MealPlanForm';
import MealPlanIndex from '../../components/MealPlanForm/MealPlanIndex'

export default function MealPlanPage({tags}) {
  const [plan, setPlan] = useState([]);
  const [showPlan, setShowPlan] = useState(true);
  
  async function handleAddPlan(formData) {
    const plan = await mealPlanAPI.add(formData)
    setPlan(plan);
  }

  useEffect(function() {
    async function getPlan() {
      const plan = await mealPlanAPI.get()
      setPlan(plan);
    }
    getPlan();
  }, []) 

  

    return (
      <main>
        <h1>Meal Plan Page</h1>
        { showPlan ?
          <MealPlanIndex tags={tags} plan={plan}/>
          :
          <MealPlanForm tags={tags} handleAddPlan={handleAddPlan} plan={plan}/>
        }
        <button onClick={() => setShowPlan(!showPlan)}>
        {showPlan ? 'New Plan' : 'Back to View Plan'}
        </button>
      </main>
    );
  }