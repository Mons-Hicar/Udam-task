import { useState, useEffect  } from "react"
import React from 'react'
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function Schol() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  // const [isError, setIsError] = useState(“”);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
          .then((res) => (res))
          .then((response) => {
              setMyData(response.data)
              setIsLoading(false)
          })
      // .catch((error) => setIsError(error.message));
  }, [])
  return (
    <div>
      <Header/>
            <h1 style={{textAlign : 'center', fontWeight : 'bold'}}>Axios method</h1>
            <div >
            {isLoading ? <div class="loading-container">
  <div className="spinner"></div>
  <div className="spinner-center"></div>
  <div className="loading-text">LOADING...</div>
</div> : (myData.map((post) => {
                
                const { id, name, email, body } = post;
                return (
                    <div class="list-group">
                        {/* {id} :- {name} {email} */}
                        <li className="list-group-item">{id} :- {name}</li>
                        <div>
                        <li className="list-group-item"> {email}</li>
                        <li className="list-group-item">{body}</li>
                        </div>
                    </div>
                );
            }))}
        </div>
        <Footer/>
    </div >
  )
}
