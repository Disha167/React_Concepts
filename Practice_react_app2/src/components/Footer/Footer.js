import react from "react";

function Footer(){
    const firstname = "Disha"
    const lastname  = "Khattri"
    return(
        /*jsx: everything here is interpreted as normal html*/
        /*If we want firstname and lastname to be treated as variable
        i.e. use javascript, we put curly braces to interpret the text
        within as javascript */
        // <footer>
        //     <h1>Hey, {firstname + " " + lastname} !This is my footer</h1> 
        // {/*The same thing can be done using es6 template also. */}    
        //     <h1>Hey, {`${firstname} ${lastname}`} !This is my footer</h1> 
        // </footer>
        <footer></footer>
    )
}

export default Footer