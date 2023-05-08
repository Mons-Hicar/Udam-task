import { useState, useEffect  } from "react"
import React from 'react'
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function Schol() {
    const [myData, setMyData] = useState([]);
    // const [isError, setIsError] = useState("");
    useEffect(() => {
     
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => (res))
        .then((response) => setMyData(response.data))
        // .catch((error) => setIsError(error.message));
    }, [])
    
  return (
    <div>
        <Header/>
        <h1>Axios method</h1>
        <div className="list-group ">
        {myData.map((post) => {
          const{id, name, email, body} = post;
          return (
          <div>
            {/* {id} :- {name} {email} */}
            <li className="list-group-item" >{id} :- {name}</li>
            <li className="list-group-item" > {email}</li>
            <li className="list-group-item" >{body}</li>
          </div>
          );
        })}
        </div>
        <Footer/>
    </div>
  )
}
