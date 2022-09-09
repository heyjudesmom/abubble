import "./DashboardPage.css"
import { useEffect, useState } from "react";
import * as tagsAPI from '../../utilities/tags-api';
import * as apptsAPI from '../../utilities/appointments-api';
import * as mealPlanAPI from '../../utilities/meal-plan-api';
import * as choresAPI from '../../utilities/chores-api';
import * as todosAPI from '../../utilities/todos-api';

export default function DashboardPage({user}) {
  //tags
  const [tags, setTags] = useState([]);
  useEffect(function () {
    async function getTags() {
      if(!user) return;
      const userTags = await tagsAPI.getAll();
      setTags(userTags);
    }
    getTags();
  }, [user]);

  const tagArr = tags.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}}>
  {t.text}
</button>)

//appointments
const [appts, setAppts] = useState([]);
  useEffect(function () {
    async function getAppts() {
      const appts = await apptsAPI.getAll();
      setAppts(appts);
    }
    getAppts();
  }, []);

    const apptsArr = appts.map(function(a, idx) {
      const tagIdArr = a.tags;
      const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
      const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
      return (
        <span>{a.title} {a.datetime} {a.duration} minutes {tagDivs}</span>
      );
    })
  
    //meal plan
    const [plan, setPlan] = useState([]);
    useEffect(function() {
      async function getPlan() {
        const plan = await mealPlanAPI.get()
        setPlan(plan);
      }
      getPlan();
    }, []) 

    const mealPlan = (
      <table>
        <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            <tr>
              <td>{plan.sun}</td>
              <td>{plan.mon}</td>
              <td>{plan.tue}</td>
              <td>{plan.wed}</td>
              <td>{plan.thu}</td>
              <td>{plan.fri}</td>
              <td>{plan.sat}</td>
            </tr>
          </thead>
        </table>
    )

    //chores
    const [chores, setChores] = useState([]);

    useEffect(function () {
      async function getChores() {
        const chores = await choresAPI.getAll();
        setChores(chores);
      }
      getChores();
    }, []);

    const choresArr = chores.map(function(c, idx) {
      const tagIdArr = c.tags;
      const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
      const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
      return (
          <span>{c.text} {tagDivs}</span> 
        );
  })

  //todo list
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    async function getTodos() {
      const todos = await todosAPI.getAll();
      setTodos(todos);
    }
    getTodos();
  }, []);
  const todosArr = todos.map(function(t, idx) {
    const tagIdArr = t.tags;
    const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
    const tagDivs = tagObjs.map((t, idx) => <button key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
    
    return (
        <span>{t.text} {tagDivs}</span> 
      );
})

  return (
    <>
    {tagArr}
      <main className="grid-container-4">
        <div><h3>Appointments</h3>{apptsArr}</div>
        <div><h3>Chores</h3> {choresArr}</div>
        <div><h3>Meal Plan</h3>{mealPlan}</div>
        <div><h3>To Do List</h3>{todosArr}</div>
      </main>
    </>
  );
}