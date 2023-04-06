import { useState, useEffect } from 'react';
import  PostProduct from './Code1';
import PutProduct from './Code2';
import './App.css';


function Products() {
    const [products, setProducts] = useState([]);
    const [produitModifier , setProduitModifier]=useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    

    useEffect(() => {
      GetAllProduct();
    }, []);
    
    function GetAllProduct() {
      fetch("http://localhost:5000/products", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    };


    function DeleteProduct(id) {
      fetch(`http://localhost:5000/supproducts/${id}`, {
      method: 'DELETE',
      headers: {
      "Content-Type": "application/json"
      },
      })
      .then((response) => response.json())
      .then(() => {
      
      alert('Produit supprimé avec succès');
      })
      .catch((error) => console.log(error));
      GetAllProduct();
      };
    
    
    return (
        <div>
          <input type="text" placeholder="Recherchez par nom" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>    
          <h1>Liste des produits</h1>    
          <table>
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            
            <tbody>
              {products.filter((product)=>product.name.includes(searchTerm)).map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock?"en stock": "pas en stock"}</td>
                  <td>
                    <button onClick={()=>setProduitModifier(product)} class="but1" >modifier</button>
                    <button onClick={()=>DeleteProduct(product.id)} class="but2">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
          {!produitModifier ?(
            <PostProduct 
            
            />
      ) : (
           
            <PutProduct 
            produitModifier={produitModifier}
        
            /> 

      )}
      
        </div>
    );

}

export default Products;











  
