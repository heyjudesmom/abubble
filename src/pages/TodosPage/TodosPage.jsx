import ToDoList from "../../components/ToDoList/ToDoList";
import NewToDoForm from "../../components/NewToDoForm/NewToDoForm";
import * as todosAPI from "../../utilities/todos-api"
import {useState, useEffect} from 'react';

export default function TodosPage({tags, itemizeTags}) {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    async function getTodos() {
      const todos = await todosAPI.getAll();
      setTodos(todos);
    }
    getTodos();
  }, []);

  async function handleAddToDo(todoFormData) {
    const todo = await todosAPI.add(todoFormData)
    setTodos([...todos, todo]);
  }

  async function handleDelete(todoData) {
    const todo = await todosAPI.deleteToDo(todoData);
    const updatedTodos = todos.filter((t) => t._id !== todo._id)
    setTodos(updatedTodos);
  }
    return (
      <main>
        <h1>to do.</h1>
        <main className="flex-ctr-ctr">
          <ToDoList todos={todos} tags={tags} handleDelete={handleDelete} itemizeTags={itemizeTags}/>
          <NewToDoForm handleAddToDo={handleAddToDo} tags={tags}/>
        </main>
    </main>
    );
  }