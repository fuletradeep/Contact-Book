import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { clearContact,  deleteSelectedContact,  selectAllContact } from "../../action/ContactAction";
import Contact from "./Contact";
import { useDispatch } from "react-redux";


function Contacts() {
  const dispatch = useDispatch()
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(state => state.contact.contacts);
  const selectedContact = useSelector(state => state.contact.selectAll);


useEffect(()=>{
  if(selectAll){
    dispatch(selectAllContact(contacts.map(contact => contact.id)))
  }
  else{
    dispatch(clearContact())
  }
},[selectAll])

  return (
    <div>
      {
        selectedContact.length > 0 ? (<button className="btn btn-danger" onClick={() => {dispatch(deleteSelectedContact())}}>DELETE ALL</button>) : null
      }
      <table className="table table-striped  my-5">
        <thead>
          <tr className="bg-primary">
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={()=> setSelectAll(!selectAll)} 
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th></th>
            <th>Name</th>
            <th>Mobile_No</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
