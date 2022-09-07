import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

export default function ToDoList({ todos, tags, handleDelete}) {
    
    const todosArr = todos.map(function(t, idx) {
        return (
            <ToDoItem t={t} key={idx} index={idx} handleDelete={handleDelete} tags={tags}/>
        );
    })
    
    return (
        <div className="grid-ctr-list">
            {todosArr}
        </div>
    );
}