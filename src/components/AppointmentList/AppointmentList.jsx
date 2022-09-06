import './AppointmentList.css';

export default function AppointmentList({ appts, tags }) {

    const arr = appts.map(function(a, idx) {

        const tagArr = [a.tags].map(function(t, idx) {
            return <div key={idx}>{t}</div>
        });
        return (
            <div className="page-list-item" key={idx}>
                <div>{a.title}</div> 
                <div>{a.datetime}</div> 
                <div>{a.duration} minutes</div> 
                <div>{tagArr}</div>

            </div>
            );
    })
    return (
        <div className="grid-ctr-list">
            {arr}
        </div>
    );
}