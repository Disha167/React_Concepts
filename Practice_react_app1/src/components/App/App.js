
import MyJokes from "../MyJokes/MyJokes"
import products from "../../vschoolProducts";
import Product from "../Product/Product";
import React from "react";
import MyConditional from "../MyConditional/MyConditional";

// function App(){
//     const nums=[1, 2, 3, 4, 5]
//     const new_nums=nums.map((element)=>{
//         return(
//                 nums*2
//         )

//     })

//     const productComponents=products.map((item)=>{
//         return(
//             /* The Name_func_prop is the name that is coming from the 
//             functional_component Product.js*/
//             /*item.name is the name coming from vSchoolProduct.js */
//         <Product key={item.id} Name_func_prop={item.name} price={item.price} description={item.description}/>
//         )
//     } )
//     return(
//         <div>
//            {/*All React component names must start with a 
//            capital letter. If begin with small letter, it 
//            is treated as built-in element */}
//             {productComponents}
//         </div>
//     )
// }

//It creates a React.Component prototype, i.e. we are getting a bunch of 
//goodies from React.Component
// class App extends React.Component{
//     render(){
//         const productComponents=products.map((item)=>{
//         return(
//             /* The Name_func_prop is the name that is coming from the 
//             functional_component Product.js*/
//             /*item.name is the name coming from vSchoolProduct.js */
//         <Product key={item.id} Name_func_prop={item.name} price={item.price} description={item.description}/>
//         )
//     } )
//     return(
//         <div>
//            {/*All React component names must start with a 
//            capital letter. If begin with small letter, it 
//            is treated as built-in element */}
//             {productComponents}
//         </div>
//     )
//     }

// }

// class App extends React.Component {
//     /*Constructor is used for initialising the values of class */
//     constructor(){
//         /*Make a call to the global function super , super brings the goodies from 
//         React.Component class to this class */
//         super()
//         this.state = {
//         /*This is the default value of state */    
//             answer:"Yes",
//             question: "No"
//         }
//     }
//     render(){

//         return(
//             <div>
//                 <h1>Is state important to know? {this.state.question}</h1>
//             </div>
//         )

//     }
// }

// function App(){
//     return(
//         <div>
//             <img onMouseOver={()=>{console.log("img")}} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             {/* Event Handlers are of javascript type in react */}
//             <button onMouseOver={function(){console.log("I was clicked")}}>Click Me</button>
//         </div>
//     )
// }

/*Conditional Rendering */
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoading: true
//         } 
//     }
//     /*fake way to prevent the user from thinking 
//     that our app has crashed, i.e. to wait 1500
//     seconds for api to load & then run the 
//     afterwards code. */
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({
//                 /*It returns the isLoading object, we can 
//                 pass an object to setState that we want to 
//                 return or we can use prevState  */
//                 isLoading: false
//             })
//         },1500)
//     }
//     render(){
//         return(
//             /*App component is responsible for checking
//             when all methods will render, so it will be
//             also responsible for loading when it will 
//             render */
//             <div>
//                 {this.state.isLoading?<h1>Loading.... </h1>:
//                 <MyConditional/>}
//             </div>
//         )
//     }
// }

/*Fetching Data from API */
class App extends React.Component{
    constructor()
    {
        super()
        this.state={
            loading: false,
            character : {}
        }
    }
    componentDidMount()
    {
        
        /*fetch is used to perform HTTP request to
        fetch data and .then() menthod is used for
        resolving it */
        /* .json() is used to convert the coming data into a 
        javascript object */
         fetch("https://swapi.dev/api/people/1/")
        .then(response=> response.json())
        .then(data=> {
            this.setState({loading:true,
                character: data})
        }
        )
  /*setState is used for saving the data to our 
  component state */
    }
    render()
    {
        return(
            <div>
<h1>{this.state.loading?this.state.character.name:"loading..."}</h1>
            </div>
        )
         
        
    }
}

export default App;