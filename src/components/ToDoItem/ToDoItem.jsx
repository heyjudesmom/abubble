import "./ToDoItem.css";

export default function ToDoItem({ item, index, handleDelete, itemTags }) {
    return (
        <div>
            <h2>{item.text}</h2> 
            <div>{itemTags}</div>
            <button className="btn btn-xs" onClick={() => handleDelete(item._id)}>X</button>
        </div>
      );
}