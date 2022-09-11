import { useState, useEffect } from "react";
import * as mealPlanAPI from '../../utilities/meal-plan-api';
import MealPlanForm from '../../components/MealPlanForm/MealPlanForm';
import MealPlanIndex from '../../components/MealPlanForm/MealPlanIndex'
import "./MealPlanPage.css";

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
      <main className="ctr">
        <h1>meal plan.</h1>
        { showPlan ?
          <MealPlanIndex tags={tags} plan={plan}/>
          :
          <MealPlanForm tags={tags} handleAddPlan={handleAddPlan} plan={plan} setShowPlan={setShowPlan}/>
        }
        <button className="btn btn-default"onClick={() => setShowPlan(!showPlan)}>
        {showPlan ? 'new plan' : 'cancel'}
        </button>
      </main>
    );
  }