import { useState, useEffect } from 'react';
import './App.css';

function PutProduct({ produitModifier}) {
        const token=localStorage.getItem('token')
        const [updateProduct, setUpdateProduct] = useState({
            name: '',
            description: '',
            price: '',
            stock: false,
        });

        useEffect(()=>{
            if (produitModifier){
                setUpdateProduct(produitModifier)
            }
        },[produitModifier])

        function ModificationProduct(){

            fetch(`http://localhost:5000/mjproducts/${updateProduct.id}`,{  
                method: 'PUT',
                body: JSON.stringify({...updateProduct}),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
        }


        return(     
            <div>
                <h2 class="aj1">Modifier le produit : {updateProduct.name}</h2>
                <form onSubmit={() => ModificationProduct(updateProduct.id)} class="form">
                  <label>
                    Nom :
                    <input type="text" value={updateProduct.name} onChange={(event) => setUpdateProduct({...updateProduct,name: event.target.value})}/>
                  </label><br/>
                  <label>
                    Description :
                    <input type="text" value={updateProduct.description} onChange={(event) => setUpdateProduct({...updateProduct,description: event.target.value})}/>
                  </label><br/>
                  <label>
                    Prix :
                    <input type="number" value={updateProduct.price} onChange={(event) =>setUpdateProduct({...updateProduct,price: event.target.value})}/>
                  </label><br/>
                  <label>
                    Stock :
                    <input type="checkbox" value={updateProduct.stock} onChange={(event) => setUpdateProduct({...updateProduct,stock: event.target.checked})}/>
                  </label><br/>
                  {token && <button type="submit">Modifier</button>}
                </form>
            </div>
                
        );
        
    }
 export default PutProduct;