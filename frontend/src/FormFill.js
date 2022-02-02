import React, { Component } from 'react';
import './form.css';
export class FormFill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            number: 0,
            hobbies: null,
            isShown: false
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitform = e => {
        e.preventDefault();
        const data = new FormData(e.target)  //making new form data
        var object = {};

        //extracting data form the formdata and converted it in JSON data
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var jsonData = JSON.stringify(object);
        console.log(jsonData);


        //fetch api
        //https://backendforusermanagement.herokuapp.com/
        //http://localhost:3000/api/files/
        fetch("https://backendforusermanagement.herokuapp.com/api/files/", {
            method: "POST",
            body: jsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ number: "" });
        this.setState({ hobbies: "" });

        document.querySelector(".closeform").click();
    }

    addUser = event => {
        this.setState({ isShown: true });
        console.log("clicked");
    }
    closeForm = event => {
        this.setState({ isShown: false });
        console.log("clicked");
    }
    render() {
        return <>

            {this.state.isShown ?
                (<div className='formContainer'>
                    <form onSubmit={this.submitform}>
                        <button onClick={this.closeForm} className='submit closeform'>Close</button>
                        <div className='title'>Add Users</div>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} required />
                        <br />
                        <label>Number</label>
                        <input type="number" name="number" value={this.state.number} onChange={this.changeHandler} required />
                        <br />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} required />
                        <br />

                        <label>Hobbies</label>
                        <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.changeHandler} />
                        <br />
                        <input type="submit" className='submit' value="Add User" />
                    </form>
                </div>) : (<div >
                    <button onClick={this.addUser} className='submit adduser'>Add User</button>
                </div>)}
        </>
    }
}
export default FormFill;
