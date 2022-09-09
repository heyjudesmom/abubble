import './ChoreList.css';
import ChoreItem from '../ChoreItem/ChoreItem';

export default function ChoreList({ chores, tags, handleDelete, handleUpdate, showEditForm, setShowEditForm }) {
    const choresArr = chores.map(function(c, idx) {
        return (
            <>
                <ChoreItem c={c} key={idx} index={idx} handleDelete={handleDelete} tags={tags} showEditForm={showEditForm} setShowEditForm={setShowEditForm} handleUpdate={handleUpdate}/>
            </>
        );
    })
    
    return (
        <div className="grid-ctr-list">
            {choresArr}
        </div>
    );
}