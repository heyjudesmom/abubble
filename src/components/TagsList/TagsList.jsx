import './TagsList.css'
import TagItem from './TagItem';
export default function TagsList({ tags, handleDelete }) {
    const arr = tags.map((t, idx) => <TagItem key={idx} t={t} handleDelete={handleDelete}/>)
    return (
        <div className="grid-ctr-list">
            {arr}
            <div>double click to delete a tag</div>
        </div>
    );
}