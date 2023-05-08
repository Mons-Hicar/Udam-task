import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";

function Univ() {
    const[record, setRecords]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then (response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log (err))

    },[]

    )
  return (
    <div>
        <Header/>
        <h1>Fetch method</h1>
        <ul className="list-group ">
            { record.map((list, index) =>(
                <li className="list-group-item " key={index} >{list.id} :- {list.name} 
                <li className="list-group-item" >{list.email}</li>
                <li className="list-group-item">{list.email} </li> 
                <li className="list-group-item">{list.body}</li>
                </li>
            ))}
        </ul>
        <Footer/>
      
    </div>
  )
}

export default Univ
