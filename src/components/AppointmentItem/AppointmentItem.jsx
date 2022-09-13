export default function AppointmentItem({ item, handleDelete, itemTags}) {
    const datestr = new Date(item.datetime).toLocaleString();
    item.datetime = datestr;
    
    return (
        <tbody>
            <tr>
                <td>{item.datetime}</td>
                <td>{item.title}</td>
                {item.duration ? (<td>{item.duration} minutes</td>) : <td></td>}
                {itemTags.length ? (<td>{itemTags}</td>) : <td></td>}
                <td><button class="btn btn-default btn-xs" onClick={() => handleDelete(item._id)}>X</button></td> 
            </tr> 
        </tbody>
      );
}