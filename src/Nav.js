import { Link } from "react-router-dom";
import './App.css';
 function Navbar() {
 return (
     <nav>
     <ul>
         <li>
         <Link to="/login">Login</Link>
         </li>
         <li>
         <Link to="/register">Register</Link> 
         </li>
         <li class="aj">
         <Link to="/products">Accueil</Link>
         </li>
     </ul>
     </nav>
 );
 }

 export default Navbar;