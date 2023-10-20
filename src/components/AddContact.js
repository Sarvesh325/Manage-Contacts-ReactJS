import React, { useRef, useState } from "react";

function AddContact({ addContact }) {
  const refElement = useRef();
  const [input, setInput] = useState({
    name: "",
    phno: "",
    address: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInput({ ...input, name: e.target.value });
    } else if (e.target.name === "email") {
      setInput({ ...input, email: e.target.value });
    } else if (e.target.name === "phno") {
      setInput({ ...input, phno: e.target.value });
    } else {
      setInput({ ...input, address: e.target.value });
    }
  };

  const handleAdd = () => {
    if (input.name === "" || input.address === "" || input.email === "") {
      setError("Please Fill the All Details");
    } else if (input.phno.length > 10 || input.phno.length < 1) {
      setError("Please Enter Valid Number");
    } else {
      addContact(input);
      setInput({ name: "", phno: "", address: "", email: "" });
      setSuccess("Your Details are Submitted");
      refElement.current.focus();
    }
  };
  return (
    <>
      <div className="container border  ">
        <div className="container    ">
          <div className="container p-3 m-3">
            <h3 className="ms-3">Add contact</h3>
            <div className="row">
              <div className="col-3 ">
                <label>Name :</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-control m-1"
                  value={input.name}
                  onChange={handleChange}
                  ref={refElement}
                />
              </div>
              <div className="col-3 ">
                <label>Contact No :</label>
                <input
                  type="text"
                  name="phno"
                  placeholder="Enter Your Phone Number"
                  className="form-control m-1"
                  value={input.phno}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3 ">
                <label>Address :</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="form-control m-1"
                  value={input.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3 ">
                <label>Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control m-1"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 m-1 text-center">
                <button
                  className="btn btn-outline-primary mt-4"
                  onClick={handleAdd}
                >
                  Add Contact
                </button>
              </div>
              <h6 className="text-center text-danger">{error}</h6>
              <h6 className="text-center text-success">{success}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddContact;
