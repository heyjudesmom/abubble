export default function TagItem({t}) {
    
    function handleButtonClick(evt) {
        alert('Button clicked!')
    }

    return (
        <button style={{backgroundColor: `${t.color}`}} onClick={handleButtonClick}>
            {t.text}
        </button>
    );
}