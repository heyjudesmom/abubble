import './TagsList.css'
import TagItem from './TagItem';
export default function TagsList({ tags, handleDelete }) {
    const arr = tags.map((t, idx) => <TagItem key={idx} t={t} handleDelete={handleDelete}/>)
    return (
        <div >
            { arr.length ? 
            <>
            <div>double click to delete a tag</div>
            <div>{arr}</div>
            </>
            :
            <></>
            }
        </div>
    );
}