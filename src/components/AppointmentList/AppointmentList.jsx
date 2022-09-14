import AppointmentItem from '../AppointmentItem/AppointmentItem';

export default function AppointmentList({ appts, tags, handleDelete, itemizeTags}) {
    const apptsArr = appts.map(function(appt, idx) {
        return <AppointmentItem item={appt} itemTags={itemizeTags(appt)} key={idx} index={idx} handleDelete={handleDelete} tags={tags}/>;
    })
    
    return (
        <div>
            { apptsArr.length ? 
                <table className="table table-responsive table-condensed table-bordered col">
                    {apptsArr}
                </table>
                :
                <h5>no appointments.</h5>
            }  
        </div>
    );
}