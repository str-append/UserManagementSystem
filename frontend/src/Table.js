import React, { useState } from 'react';
import './table.css'
import UpdateForm from './UpdateForm';
function Table() 
{
    var id=0;   //for numbering the serial number
    const [dataU,setdataU] = useState([]);  //state for data fetching
    // const [propsstate,setpropsstate] = useState(false);

    //this method fetch the data from the database and map into table 

    //https://backendforusermanagement.herokuapp.com/
    //http://localhost:3000/api/details
    async function showdata(){
        await fetch("https://backendforusermanagement.herokuapp.com/api/details")
        .then((response)=>response.json())
        .then((data)=>{
            setdataU(data.user);
            console.log(data);
        })
    }

    //this sends POST request to api end point and deletes user associated with the gien _id(mongoDB)

    //http://localhost:3000/api/files/delete
    async function deleteUser(id)
    {
        var userId = {"id":id};
        await fetch("https://backendforusermanagement.herokuapp.com/api/files/delete", {
            method: "POST",
            body: JSON.stringify(userId),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        showdata();
    }

  return <div className='tableContainer'>
            <table className='tablemain'>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Hobbies</th>
                    <th>Update Details</th>
                    <th>Delete User</th>
                </tr>

                {dataU.map((val)=>(
                        <tr>
                            <td>{++id}</td>
                            <td>{val.name}</td>
                            <td>{val.phonenumber}</td>
                            <td>{val.email}</td>
                            <td>{val.hobbies}</td>
                            <td><UpdateForm id={val._id}/></td>
                            <td><button className='deleteUser' onClick={()=>deleteUser(val._id)}>Delete User</button></td>
                        </tr>
                    ))}
            </tbody>
            </table>
            

            <button onClick={showdata} className='refreshtable'>Refresh Table</button>

        </div>;
}

export default Table;
