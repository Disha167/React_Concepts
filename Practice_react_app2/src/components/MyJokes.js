import React from "react"
import ContactCard from "./ContactCard/ContactCard"
import MainContent from "./MainContent/MainContent"

function MyJokes(props){
    return(
        <div>
          <h1 >Question: {props.question}</h1>
          <h1 >Answer: {props.punchline}</h1>
          <br></br>
        
        </div>

    )
}

export default MyJokes