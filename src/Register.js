import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
function Register() {
    const [newregister, setNewRegister] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
   });
   const navigate = useNavigate();

       function AjouterRegister(event){
           
           event.preventDefault();
           fetch('http://localhost:5000/register', {
           method: 'POST',
           body: JSON.stringify({...newregister}),
           credentials:"include",
           headers:{
               'Content-Type': 'application/json',
           },          
       })
           .then((response) => response.json())
           .then((data) => console.log(data))
           .catch((error) => console.log(error));
           navigate("/login");
       }
   return(
     <div>
       <div onSubmit={AjouterRegister}class="boxR">
       <h2>Ajouter Register</h2>
       <form class="formR">
         <label>
         firstname:
           <input class="input1" type="text" value={newregister.firstname} onChange={(event) => setNewRegister({...newregister, firstname:event.target.value})}/>
         </label><br/>
         <label>
         lastname :
           <input class="input1" type="text" value={newregister.lastname} onChange={(event) => setNewRegister({...newregister, lastname:event.target.value})}/>
         </label><br/>
         <label>
         email :
            <input class="input1" type="text" value={newregister.email} onChange={(event) => setNewRegister({...newregister, email:event.target.value})}/>
         </label><br/>
         <label>
         password :
           <input class="input1" type="text" value={newregister.password} onChange={(event) => setNewRegister({...newregister, password:event.target.value})}/>
         </label><br/>
         <button class="btnR" type="submit">Valider</button>
       </form>
     </div>
   </div>


   );
}
export default Register;