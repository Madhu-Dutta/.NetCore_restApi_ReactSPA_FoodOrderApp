import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

const apiUrl = 'http://localhost:59550/api/fooditems';  

class DisplayItems extends React.Component {

    constructor() {
        super();
        console.log("Constructor created");
    }
    ////Local Url
    state = {
        foods: [],
        id: ''  
    }

    componentDidMount() {
        console.log("Component did mount");

        ////Local Url
        axios.get(apiUrl)
            //get all the data as promise in the response
            .then(response => {
                this.setState({
                    foods: response.data
                })
            })
            //catch all the errors
            .catch(error => console.log(error)
        )
    }   

    deleteFood = id => {
        console.log('delete item');
        console.log("This will print the name", this.state.name);
       
        const { foods } = this.state;
        axios.delete(apiUrl + '/' + id).then(res => {
            alert("Delete the response data" + res.data);
            this.setState({
                response : res,
                foods: foods.filter(food=>food.foodItemId !== food.id)
            })
        })
        
    }

    render() {
        console.log("App render");
        console.log(this.state);

        //Using local Url
        if (this.state.foods.length === 0) {
            return (
                <h2 style={{ textAlign: "center" }}> Loading ......</h2>
            )
        }
        else {
            return (
                <div className="container">
                    <Table dark className="table-container">
                        <thead>
                            <tr>
                                <td>Dish</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Price</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.foods.map(food => {
                                return (
                                        <tr key={food.foodItemId}>
                                        <td ><img className="food" src={food.picture} alt="menu-images" /></td>
                                        <td >{food.name}</td>
                                        <td >{food.description}</td>
                                        <td >${food.price}</td>                                        
                                        <td>
                                            <button onClick={() => this.deleteFood(food.foodItemId)}>Delete</button>
                                        </td>                                       
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>                   
            </div>
            )
        }
    }
}

export default DisplayItems;
