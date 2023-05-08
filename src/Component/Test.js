import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

export class Test {
  constructor(props) {
    
   

    this.state = {
      name: "Mons"
    };
    return (
      <div>
        <Header />
        <h1 style={{ textAlign: "center" }}>{this.state.name}Habibi welcom to react</h1>
        <Footer />
      </div>
    );
  }
}


export default Test



