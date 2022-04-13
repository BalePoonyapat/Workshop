import React, { useState } from "react";
import {nanoid} from 'nanoid';
import "./App.css";
import data from "./mock-data.json";


const App = () => {

const [contacts, setContacts] = useState(data);
const [addFormData, setAddFormData] = useState ({
  BookId:'',
  Bookname:'',
  IdStudent:'',
  Name:'',
  DayEnd:'',
  DayStart:''
})

const handleAddFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData};
  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newContact = {
    id: nanoid(),
    BookId: addFormData.BookId,
    Bookname: addFormData.Bookname,
    IdStudent: addFormData.IdStudent,
    Name: addFormData.Name,
    DayEnd:addFormData.DayEnd,
    DayStart:addFormData.DayStart
  };

const newContacts = [...contacts, newContact];
setContacts(newContacts);

};

  return (
   <div className="app-container">
<h2>LIBARY</h2>




<form onSubmit={handleAddFormSubmit}>
      <input
      type="text"
      name="BookId"
      required="required"
      placeholder="Enter a BookId"
      onChange={handleAddFormChange}
      />
      <input
      type="text"
      name="Bookname"
      required="required"
      placeholder="Enter a BookName"
      onChange={handleAddFormChange}
      />
      <input
      type="text"
      name="IdStudent"
      required="required"
      placeholder="Enter a StudentId"
      onChange={handleAddFormChange}
      />
      <input
      type="text"
      name="Name"
      required="required"
      placeholder="Enter a Name"
      onChange={handleAddFormChange}
      />
       <input
      type="Int"
      name="DayStart"
      required="required"
      placeholder="Enter a Start"
      onChange={handleAddFormChange}
      />
       <input
      type="Int"
      name="DayEnd"
      required="required"
      placeholder="Enter a End"
      onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
</form>
<table>
      <thead>
        <tr>
          <th>BookId</th>
          <th>Bookname</th>
          <th>StudentID</th>
          <th>Name</th>
          <th>DayStart</th>
          <th>DayEnd</th>
          <th>Status</th>   
          <th>Update</th>     
        </tr>
      </thead>  
      <tbody>
        {contacts.map((contacts)=> (
          <tr>
            <td>{contacts.BookId}</td>
            <td>{contacts.Bookname}</td>
            <td>{contacts.IdStudent}</td>
            <td>{contacts.Name}</td>
            <td>{contacts.DayStart}</td>
            <td>{contacts.DayEnd}</td>
          </tr>   
       ))} 
      </tbody>
  </table>



  </div>
  );
};
export default App;
