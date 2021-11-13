import React from "react"

function MyJokes(props){
    return(
        <div>
          <h1 style={{display:props.Question? "block":"none"}}>Question: {props.Question}</h1>
          <h1 style={{color:props.Question?"#C0C0C0":		"#FFFF00"}}>Answer: {props.Answer}</h1>
        </div>
    )
}

export default MyJokes