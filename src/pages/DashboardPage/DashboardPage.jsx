import "./DashboardPage.css"
import { useEffect, useState } from "react";
import * as tagsAPI from '../../utilities/tags-api';

export default function DashboardPage({user}) {
  const [tags, setTags] = useState([]);

  useEffect(function () {
    async function getTags() {
      if(!user) return;
      const userTags = await tagsAPI.getAll();
      setTags(userTags);
    }
    getTags();
  }, [user]);

  const arr = tags.map((t, idx) => <button style={{backgroundColor: `${t.color}`}}>
  {t.text}
</button>)

  return (
    <>
    {arr}
      <main className="grid-container-4">
        <div>Appointment Component</div>
        <div>ChoresListComponent</div>
        <div>MealPlanComponent</div>
        <div>TodoListComponent</div>
      </main>
    </>
  );
}