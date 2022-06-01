import React from "react";
import Trophy from "../images/trofeo.png";



function ContactCard(props) {
    const { contact,clickToDelete } = props;
    return (
        <tr>
            <td>
            <img
                className="table-img"
                src={contact.pictureUrl}
                alt="famous people"
            />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            {contact.wonOscar ? ( <td> <img
                className="table-icon"
                src= { Trophy }
                alt="trophy icon"
            /></td>) : (<td> </td>)}
            {contact.wonEmmy ? ( <td> <img
                className="table-icon"
                src={ Trophy }
                alt="trophy icon"
            /></td>) : (<td> </td>)}
            <td>
               <button onClick={() => clickToDelete(contact.id)} className="btn-delete">
                 Delete
            </button>  
            </td>
      </tr>
      );
}

export default ContactCard;