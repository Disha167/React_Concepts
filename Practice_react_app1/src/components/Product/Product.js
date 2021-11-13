import React from "react";


// function Product(props){
//     return(
//         <div>
//             <p>Name: {props.Name_func_prop}</p>
//             <p>Price: {props.price}</p>
//             <p>Description: {props.description}</p>
//             <hr></hr>
//         </div>
//     )
// }

class Product extends React.Component{
    render(){
        return(
            <div>
                <p>Name: {this.props.Name_func_prop}</p>
                <p>Price: {this.props.price}</p>
                <p>Description: {this.props.description}</p>
                <hr></hr>
            </div>
        )
    }
}
export default Product;