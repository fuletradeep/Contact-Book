import React from 'react'
import Avatar from "react-avatar";
import {Link} from 'react-router-dom'
import { deleteContact } from '../../action/ContactAction';
import {useDispatch} from 'react-redux'


function Contact({contact,selectAll}) {
  const dispatch = useDispatch();
    return (
        
              <tr className="contact">
              <th>
              <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                </div>
              </th>
              <td>
                <Avatar name={contact.name} size="50" round={true} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td className="del-icon">
                <Link to={`/edit/${contact.id}`} href="#">
                    <span className="material-icons md-18 mr-4">edit</span>
                </Link>
                
                    <span className="material-icons md-18" onClick={()=>dispatch(deleteContact(contact.id))} style={{color:"red",cursor:"pointer"}}>delete</span>
            
              </td>
            </tr>
        
    )
}

export default Contact
