import React, { Component } from 'react';
import './form.css';


//Update Form User
export class UpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            number: null,
            hobbies: "",
            isShown: false,
            id: ""
        }
    }

    //helper function to set state dynamically 
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    //use to set the form display or hide
    updateUser = event => {
        this.setState({ isShown: true });
        console.log("clicked");
    }

    //use to close the form
    closeForm = event => {
        this.setState({ isShown: false });
        console.log("clicked");
    }

    //submit form function
    submitform = e => {
        e.preventDefault();
        const data = new FormData(e.target)
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        object["id"] = this.props.id;
        var updateData = JSON.stringify(object);
        console.log(updateData);

        //https://backendforusermanagement.herokuapp.com/
        //http://localhost:3000/api/files/update
        fetch("https://backendforusermanagement.herokuapp.com/api/files/update", {
            method: "POST",
            body: updateData,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ number: "" });
        this.setState({ hobbies: "" });

        document.querySelector(".closeform").click();  //close the form after submitting it 
    }

        //conditional return
        //{ifcondition ? iftrueReturn : elseReturn}
        //{if this.state.isShown is true render that else show button for updating user}
    render() {
        return <>
            {this.state.isShown ?
                (<div className='formContainer'>
                    <form onSubmit={this.submitform}>
                        <button onClick={this.closeForm} className='submit closeform'>Close</button>
                        <div className='title'>Update User</div>
                        <label>Name </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                        <br />
                        <label>Number</label>
                        <input type="number" name="number" value={this.state.number} onChange={this.changeHandler} />
                        <br />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
                        <br />

                        <label>Hobbies</label>
                        <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.changeHandler} />
                        <br />
                        <input type="submit" className='submit' value="Update Data" />
                    </form>
                </div>) : (<button className='updateUser' onClick={this.updateUser} >Update User</button>)}
        </>
    }
}

export default UpdateForm;
