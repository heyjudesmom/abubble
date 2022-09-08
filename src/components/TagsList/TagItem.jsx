export default function TagItem({t, handleDelete}) {
    
    return (
        <button style={{backgroundColor: `${t.color}`}} onDoubleClick={() => handleDelete(t._id)}>
            {t.text}
        </button>
    );
}