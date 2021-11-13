import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import ContactCard from "../ContactCard/ContactCard";
import jokesData from "../jokesData";
import MyJokes from "../MyJokes";
/*They are called functional components because you create them by creating a function 
And, we can't just put the whole webpage in the first argument of render function, so we need functional components.
The functional component returns the jsx that this component represents.
The functional component cannot return 2 jsx in parallel, rather bind them inside a div tag.
*/




// function MyApp(){
//     return (
//      <div>
//         <Navbar/>
//         <MainContent/> 
//          <Footer/>
//      </div>
//     )
// }

// function MyApp(){
//    /* The map() method creates a new array with the 
//    results of calling a function for every array element.*/
//    const jokeComponents = jokesData.map((joke)=>
//    /*Whenever using map method , we have to mention the key prop that has a unique 
//    value for every array element like here id*/
//        <MyJokes key = {joke.id} question={joke.question} punchline={joke.punchLine}/>
       
//    )
//    /*It returns the jsx. */
//     return(
//         <div>
//             {jokeComponents}
//         </div>
//     )
// }

// /*CHANGING STATE */
// class MyApp extends React.Component{
//     /*constructor is a place used for initialising some values */
//     constructor(){
//         /*super gets all the goodies from parent class 
//         React.Component */
//         super()
//         /*state is an object */
//         this.state={
//             count: 1
//         }
//         /*any method that contains setState needs to be binded with the 
//         class , as setState comes from React.Component*/
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         /*The value of state can't be changed, it is like a clothing so setState
//          method is used */
//         // this.setState({ count: 1})
//         /*For updating on every click , we need to pass the prevState
//         as we will update this only everytime*/
//         this.setState((prevState)=>{
//             return{
//                 count: prevState.count*2
//             }
//         })
//     }

//     componentDidMount(){
//     /*The componentDidMount(a hook) runs only once when 
//     the react  component first appeard on the DOM*/
//     }

//     UNSAFE_componentWillReceiveProps(){
//        /*runs everytime when this child component receives props 
//        from the parent component */
//     }
   
//     shouldComponentUpdate(nextProps, nextState){
//     /* If react updates every component in the application, then it becomes
//     very costly, so this method will help in deciding whether we should 
//     update the component or not thus optimizing our application*/
//     }


//     componentWillUnmount(){
//         /*Do some kind of cleanup when the component will unmount
//         Eg: if your event listener does something when person scrolls down the 
//         screen , if you want to do something when the scrolling stops!*/
//     }

// static getDerivedStateFromProps(props, state){
//     //return the new updated state based on the props
// }

// getSnapshotBeforeUpdate(){
//     /*create a backup of current way things are, it stores an object of way
//     current things are */
// }

//     /*Render is a lifecycle component i.e. responsible for the changes that the react component goes 
//     through during his whole lifecycle, it is called everytime the state changes within the component
//     i.e. we change how a component displays. */
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 {/* When the method is part of my class, I have to reference it with
//                 this object.Here, handleClick */}
//                 <button onClick={this.handleClick}>Change!</button>
                
//             </div>
//         )
//     }
// }

/*Forms in React*/
class MyApp extends React.Component{
    constructor()
    {
        super()
        this.state={
           firstName:"",
           lastName:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    /*While dealing with forms in react, it is very different from javascript DOM.
    There we do the calculations in the form after the submit button is pressed but
    here  we need to constantly update the values as our component changes */
    handleChange(event){
        const {value,name} = event.target
        this.setState(
            /*Event.target gives the element in which the event was fired 
            and .value gives it's value */
            {
                /*
                Instead of hardcoding firstName, lastName and several other input fields like this, 
                we can create an input field in the form and then mark this input field as the value 
                that we are typing
                firstName:event.target.value*/
                /*we cannot just write name as it is a string,we have to put name in square brackets */
                 [name]: value
            })
    }
    render()
    {
        /*Here, what is written in our text box, i.e. event.target.value whenever it changes the state updates,
         the  name field in our input changes accordingly */
        return(
            <form>
                <input
                type="text"
                /*this is just for following the static rule that state directs what is contained in 
                the input box, so the value of firstName will be according what is the value of state */
                // value="this.state.firstName"
                placeholder="First Name" 
                /*Without onchange property, my input box would be read only & we would
                not be able to change anything */
                onChange={this.handleChange} 
                name="firstName"/>
                <input
                type="text"
                // value="this.state.firstName"
                placeholder="Last Name" 
                onChange={this.handleChange} 
                name="lastName"/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default MyApp;