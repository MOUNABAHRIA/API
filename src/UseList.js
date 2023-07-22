import React, { useEffect, useState } from "react"
import axios from "axios";

const UserList = () => {
 const [list, setList] = useState([]); // where to store the returned data
 // where to store the coming errors
 useEffect(() => {
  
     // the function to fetch data from the api
   
   axios.get("https://jsonplaceholder.typicode.com/users")
 .then(res=>{setList(res.data)
    console.log(res)}
 )

 .catch(err=> (console.log(err)) )}
   // handle error
 

   
  ,[]);
 return(
    <div>
{list.map((user) => <div>{user.name} </div>)}
    </div>
 )
}
 

export default UserList ;