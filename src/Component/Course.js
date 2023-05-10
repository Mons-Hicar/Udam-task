import axios from 'axios';
import React, { useState, useEffect } from 'react'




export default function Course() {
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
            <h1>Axios method</h1>
            <div >
            {isLoading ? <div class="loading-container">
  <div class="spinner"></div>
  <div class="spinner-center"></div>
  <div class="loading-text">LOADING...</div>
</div> : (myData.map((post) => {
                const { id, name, email, body } = post;
                return (
                    <div>
                        {/* {id} :- {name} {email} */}
                        <li>{id} :- {name}</li>
                        <li> {email}</li>
                        <li>{body}</li>
                    </div>
                );
            }))}
        </div>
    </div >
  )
}











