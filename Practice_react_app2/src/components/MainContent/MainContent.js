import react from "react";
import Todoitem from "../Todoitem/Todoitem";
// import styles from ../src/
function MainContent(){
 

        // const date = new Date(2018, 5, 31, 19);
        // const hours = date.getHours();
        // let timeOfDay
        // /*By declaring styles variable just like in javascript, we can
        // make our data dynamic  */
        // const styles = {
        //     color: "#FFFF00" , 
            
        //  }
        // if(hours < 12)
        // {
        //     timeOfDay="morning"
        //     styles.backgroundColor= "#FF2D00"
        // }
        // else if(hours>=12 && hours<17)
        // {
        //     timeOfDay="afternoon"
        //     styles.backgroundColor= "#000080"
        // }
        // else
        // {
        //     timeOfDay="night"
        //     styles.backgroundColor= "#800000"
        // }
    
        
   
    return(
       
        // <main>
        //     {/*one curly brace is for switching from jsx to javascript 
        //     and other is for giving style in object when using inline styles */}
        //     <h1 style={styles}>Good {timeOfDay}</h1>
        //     <h2>You will get to learn more about parent/child components here</h2>
        //     </main>
        <main className="todo-list">
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        </main>
    )
}
export default MainContent;