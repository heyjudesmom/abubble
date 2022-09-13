import './ChoreList.css';
import ChoreItem from '../ChoreItem/ChoreItem';

export default function ChoreList({ chores, tags, handleDelete, handleUpdate, showEditForm, setShowEditForm, itemizeTags }) {
    const choresArr = chores.map(function(c, idx) {
        return (
            <>
                <ChoreItem item={c} key={idx} index={idx} handleDelete={handleDelete} tags={tags} showEditForm={showEditForm} setShowEditForm={setShowEditForm} handleUpdate={handleUpdate} itemTags={itemizeTags(c)}/>
            </>
        );
    })
    
    return (
        <div className='list'>
            {choresArr}
        </div>
    );
}