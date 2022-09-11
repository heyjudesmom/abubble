import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

export default function ToDoList({ todos, tags, handleDelete}) {
    
    const todosArr = todos.map(function(t, idx) {
        return (
            <div >
                <ToDoItem t={t} key={idx} index={idx} handleDelete={handleDelete} tags={tags}/>
            </div>
        );
    })
    
    return (
        <div className="list">
            {todosArr}
        </div>
    );
}