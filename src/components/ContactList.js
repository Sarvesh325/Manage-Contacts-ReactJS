import React from "react";

function ContactList({ contact, remove }) {
  const contactList = contact.map((val) => {
    return (
      <>
        <div className="card border m-2 p-2 ">
          <div>Name: {val.data.name}</div>
          <div>Contact No:{val.data.phno}</div>
          <div>Email: {val.data.email}</div>
          <div> Address: {val.data.address}</div>

          <span>
            <button
              className="btn btn-danger d-flex ms-auto"
              onClick={() => remove(val.id)}
            >
              Delete
            </button>
          </span>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="container card  p-0 ">
        <h3 className=" container-fluid text-center  p-4">Contact List</h3>
        <div>{contactList}</div>
      </div>
    </>
  );
}

export default ContactList;
