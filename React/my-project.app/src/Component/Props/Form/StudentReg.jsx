import React, { useState } from "react";

function StudentReg() {
  const { data, setData } = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.value]: e.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("fill data");
    } else {
      alert("Data Submitted");
    }
    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Student Registration Details</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handlechange}
        /><br></br>
        <input
          type="email"
          name="email"
          placeholder="Enter E-Mail ID"
          onChange={handlechange}
        />
        <br />
        <input type="password" name="password" id="" onChange={handlechange} />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
export default StudentReg;
