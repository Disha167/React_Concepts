import React from "react";
import ReactDOM from "react-dom";
import './styles.css'
import MyInfo from "./components/MyInfo/MyInfo.js";
import MyApp from "./components/MyApp/MyApp.js"


 {/*All React component names like MyApp must start with a 
    capital letter. If begin with small letter, it is 
    treated as built-in element */}

/*The render function renders Hello World! between div of html with id=root*/
/*By Writing MyApp as <MyApp/>, we refer to MyApp as a component*/
// ReactDOM.render(What do I want to render,Where do I want to render it);

ReactDOM.render(<MyApp></MyApp>,document.getElementById("root"));