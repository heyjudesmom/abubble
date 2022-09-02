import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';
import ChoresPage from '../ChoresPage/ChoresPage';
import TodosPage from '../TodosPage/TodosPage';
import MealPlanPage from '../MealPlanPage/MealPlanPage';
import TagsPage from '../TagsPage/TagsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<DashboardPage />} />
            <Route path='/appointments' element={<AppointmentsPage />} />
            <Route path='/chores' element={<ChoresPage />} />
            <Route path='/todos' element={<TodosPage />} />
            <Route path='/mealplan' element={<MealPlanPage />} />
            <Route path='/tags' element={<TagsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
