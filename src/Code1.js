import { useState, useEffect } from 'react';
import './App.css';

function PostProduct() {
     const token=localStorage.getItem('token')
     const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        price:'',
        stock: false,
    });

        function AjouterProduct(event){
            
            event.preventDefault();
            fetch('http://localhost:5000/ajproducts', {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({...newProduct}),
            
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
            
        }


    return(
      <div>
        <div onClick={AjouterProduct}>
        <h2 >Ajouter un produit</h2>
        <form class="form1">
          <label>
            Nom :
            <input type="text" value={newProduct.name} onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}/>
          </label><br/>
          <label>
            Description :
            <input type="text" value={newProduct.description} onChange={(event) => setNewProduct({...newProduct, description: event.target.value})}/>
          </label><br/>
          <label>
            Prix :<input type="number" value={newProduct.price}
              onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}/>
          </label><br/>
          <label>
            Stock :
            <input type="checkbox" checked={newProduct.stock} value={newProduct.stock}onChange={(event) =>setNewProduct({ ...newProduct, stock: event.target.checked})}/>
          </label><br/>
          {token && <button type="submit">Ajouter</button>}
        </form>
      </div>
    </div>


    );
}
export default PostProduct;