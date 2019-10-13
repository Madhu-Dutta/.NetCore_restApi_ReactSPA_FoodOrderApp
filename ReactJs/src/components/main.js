import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class Main extends React.Component {

    constructor() {
        super();
        console.log("Constructor created");
    }
    ////Local Url
    state = {
        foods: []
    }


    componentDidMount() {
        console.log("Component did mount");

        ////Local Url
        axios.get('http://localhost:59550/api/fooditems')
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
                                <td>ID</td>
                                <td>Dish</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.foods.map(food => {
                                return (
                                    <tr>
                                        <td key={food.foodItemId}>{food.foodItemId}</td>
                                        <td key={food.foodItemId} ><img className="food" src={food.picture} alt="menu-images" /></td>
                                        <td key={food.foodItemId} >{food.name}</td>
                                        <td key={food.foodItemId} >{food.description}</td>
                                        <td key={food.foodItemId} >${food.price}</td>
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

export default Main;
