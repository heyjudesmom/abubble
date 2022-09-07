import './AppointmentList.css';

export default function AppointmentList({ appts, tags }) {
    
    //make a new, map array of appointments
    //Filter the tags prop to find the tags that match each appt's tag's id.

    const arr = appts.map(function(a, idx) {
        // const tagArr = [a.tags].map(function(apptTagId, idx) {
        //     console.log("apptTagIds",apptTagId)
        //     tags.filter(function(tag) {
        //         tag._id === apptTagId
        //     })

        // });
        const tagIdArr = a.tags;
        const tagObjs = tags.filter((t) => tagIdArr.includes(t._id))
        const divs = tagObjs.map((t) => <button style={{backgroundColor: `${t.color}`}}>
        {t.text}
    </button>)

        return (
            <div className="page-list-item" key={idx}>
                <div>{a.title}</div> 
                <div>{a.datetime}</div> 
                <div>{a.duration} minutes</div> 
                <div>{divs}</div>
                <br/><br/>
            </div>
            );
    })
    return (
        <div className="grid-ctr-list">
            {arr}
        </div>
    );
}