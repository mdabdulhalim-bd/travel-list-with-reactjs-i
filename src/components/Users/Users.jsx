import axios from "axios";
import { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUser();
    },[])


//    async function loadUser(){
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
//         setUsers(data)
//     }


const loadUser = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
}

   
    return (
        <div>
            <h1 className="bg-secondary text-white text-center p-3">User Length: {users.length}</h1>
           <div className="d-flex flex-wrap">
           {
                users.map(user => <User key={user.id} user = {user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;