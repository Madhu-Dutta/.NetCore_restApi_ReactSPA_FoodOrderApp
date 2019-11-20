import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:59550/api/fooditems';  

export default class UploadFood extends Component {
    
    constructor(props){
        super(props);
        console.log("Constructor created");       
    }
    state={
        name: '',
        description: '',
        price: ''
    }

    //Image / file selection
    // fileSelectedHandler = (event) => {
    //     //target = selects the file input and files[0] = selects the first element of file array 
    //     console.log(event.target.files[0]);
    //     this.setState({
    //         picture : event.target.files[0]
    //     })
    // }

    // //Upload the files
    // fileUploadHandler = (e) => {
    //     // console.log('clicked')
    //     const fd = new FormData();
    //     //check console to find the name property attached to the files
    //     fd.append('image', this.state.picture, this.state.picture.name);
    //     axios.post(apiUrl, fd)
    //     .then(res => {
    //         console.log(res);
    //     })
    // }

    //Onchange
    handleChange = e => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
        console.log(this.state);
    }

    //OnSubmitting the form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit form');
        
        //body
        const food = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
        }

        //Post in database            
        axios.post(apiUrl, food )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>{
            console.log('error while posting the menu', err)
        })
    }

    render() {

        const {name, description, price} = this.state;

        return (
            <form action="" onSubmit={this.handleSubmit}>
           
            <label htmlFor="Food Name">
                <input 
                type="text" 
                name="name"
                value={name} 
                onChange={(e) => this.handleChange(e)} />
            </label>
            <label htmlFor="Description">
                <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={(e) => this.handleChange(e)} />
            </label> 
            <label htmlFor="Price">
                <input 
                type="text" 
                name="price" 
                value={price} 
                onChange={(e) => this.handleChange(e)} />
            </label>                        
            <button 
                type="submit"
                onClick={this.handleSubmit}
            >
                Add
            </button>
        </form>
        )
    }
}
