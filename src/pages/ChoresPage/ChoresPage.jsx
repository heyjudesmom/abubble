import ChoreList from "../../components/ChoreList/ChoreList";
import NewChoreForm from "../../components/NewChoreForm/NewChoreForm";
import * as choresAPI from "../../utilities/chores-api"
import {useState, useEffect} from 'react';

export default function ChoresPage({tags}) {
  const [chores, setChores] = useState([]);

  useEffect(function () {
    async function getChores() {
      const chores = await choresAPI.getAll();
      setChores(chores);
    }
    getChores();
  }, []);

  async function handleAddChore(choreFormData) {
    const chore = await choresAPI.add(choreFormData)
    setChores([...chores, chore]);
  }

  async function handleDelete(choreData) {
    const chore = await choresAPI.deleteChore(choreData);
    const updatedChores = chores.filter((c) => c._id !== chore._id)
    setChores(updatedChores);
  }
    return (
      <main>
        <h1>ChoresPage</h1>
        <main className="flex-ctr-ctr">
          <ChoreList chores={chores} tags={tags} handleDelete={handleDelete}/>
          <NewChoreForm handleAddChore={handleAddChore} tags={tags}/>
        </main>
    </main>
    );
  }