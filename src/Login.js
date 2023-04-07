import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    function handleSubmit (event) {
      event.preventDefault();
      let data={
        email : email,
        password :password
  
      }
       fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Authentication success') {
          navigate("/products");
        } else {
          alert('Veuillez souscrire pour accéder à notre application.');
        }
      })
      .catch(error => console.error(error))

    };
    function handleClick() {
      navigate('/register');
    }

    return (
      <form onSubmit={handleSubmit} >
        <div class="boxR">
        <label htmlFor="email">Email:</label>
        <input class="input2"  type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input  class="input2" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button class="btnR" onClick={handleClick}>Register</button>
        <button class="btnR" type="submit">Login</button>
        
        </div>
      </form>
    );
  }
  export default Login;


//   fetch("VOTRE_URL_PROTEGEE", {
//     method: "GET",
//     headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//     },
//  })
//  .then((response) => response.json())
//  .then((data) => console.log(data))
//  .catch((error) => console.error(error));
 
  
  
  
  