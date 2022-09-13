import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

export default function ToDoList({ todos, tags, handleDelete, itemizeTags}) {
    
    const todosArr = todos.map(function(t, idx) {
        return (
            <div >
                <ToDoItem item={t} key={idx} index={idx} handleDelete={handleDelete} itemTags={itemizeTags(t)}/>
            </div>
        );
    })
    
    return (
        <div className="list">
            {todosArr}
        </div>
    );
}