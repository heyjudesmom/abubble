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
  const [showSort, setShowSort] = useState(false)
  const [sortBy, setSortBy] = useState(null);
  
  function sortByTag(evt) {
    setSortBy(evt.target.value);  
    setShowSort(true);
    console.log(`sorting by ${evt.target.value}`)
  }

  useEffect(function () {
    async function getTags() {
      if(!user) return;
      const userTags = await tagsAPI.getAll();
      setTags(userTags);
    }
    getTags();
  }, [user]);

  const tagArr = tags.map((t, idx) => <button className="btn " onClick={sortByTag} value={t._id} key={idx} style={{backgroundColor: `${t.color}`}}>
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
      const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-xs"key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
      let datestr = new Date(a.datetime).toLocaleString();
      a.datetime = datestr;      
      return (
        <tbody>
          <tr>
              <td>{a.datetime}</td>
              <td>{a.title}</td>
              <td><div className="btn-group">{tagDivs}</div></td>
              <td>{a.duration} minutes</td>
          </tr> 
        </tbody>
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
      <table className="table table-bordered table-responsive table-condensed" id="table">
        <thead>
            <tr>
              <th>sun</th>
              <th>mon</th>
              <th>tue</th>
              <th>wed</th>
              <th>thu</th>
              <th>fri</th>
              <th>sat</th>
            </tr>
            <tr>
              {
              plan.sun ? 
              <td>{plan.sun}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.mon ? 
              <td>{plan.mon}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.tue ? 
              <td>{plan.tue}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.wed ? 
              <td>{plan.wed}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.thu ? 
              <td>{plan.thu}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.fri ? 
              <td>{plan.fri}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
              {
              plan.sat ? 
              <td>{plan.sat}</td>
              :
              <td style={{backgroundColor:"#CAE2E4"}}></td>
              }
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
      const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-xs"key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>)
      return (
          <div className="border border-secondary">{c.text} {tagDivs}</div> 
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
      const tagObjs = tags.filter((t) => tagIdArr.includes(t._id));
      const tagDivs = tagObjs.map((t, idx) => <button className="btn btn-xs"key={idx} style={{backgroundColor: `${t.color}`}} onClick={function(){alert('Clicked')}}>{t.text}</button>);
      return (
        <div className="border border-secondary">
          <div>{t.text} {tagDivs}</div>
        </div> 
      );
});

  return (
      <div className="container-fluid" >
        <div>
          {tagArr}
        </div>
        <div className="row-grid">
          <div className="">
            <h3>appointments.</h3>    
            {
              apptsArr.length ? 
              <table className="table table-responsive table-condensed table-bordered col">
                  {apptsArr}
              </table>
              :
              <h5>no appointments.</h5>
            }    
          </div>
          <div className="col"><h3>chores.</h3> 
          {
            choresArr.length ?
            {choresArr}
            :
            <h5>no chores.</h5>
          }
          </div>
        </div>
        <div className="row-grid">
          <div className="col"><h3>meal plan.</h3>{mealPlan}</div>
          <div className="col"><h3>to do list.</h3>
          {
            todosArr.length ?
            {todosArr}
            :
            <h5>nothing to do.</h5>
          }
          </div>
        </div>
      </div>
  );
}