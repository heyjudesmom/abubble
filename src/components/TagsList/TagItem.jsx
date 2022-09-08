export default function TagItem({t, handleDelete}) {
    
    function handleButtonClick(evt) {
        alert('Button clicked!')
    }

    return (
        <button style={{backgroundColor: `${t.color}`}} onDoubleClick={() => handleDelete(t._id)}>
            {t.text}
        </button>
    );
}