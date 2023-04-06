// export function Products() {
//     const [products, setProducts] = useState([]);
//     const [newProduct, setNewProduct] = useState({
//       name: '',
//       description: '',
//       price: '',
//       stock: '',
//     });
//     const [selectedProduct, setSelectedProduct] = useState(null);
  
//     useEffect(() => {
//       GetAllProduct();
//     }, []);
  
//     function GetAllProduct() {
//       fetch('http://localhost:8080/products', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => setProducts(data))
//         .catch((error) => console.log(error));
//     };
// function GetProductId(id) {
//     fetch(`http://localhost:8080/products/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setSelectedProduct(data))
//       .catch((error) => console.log(error));
//   }

//   function PostProduct(event) {
//     event.preventDefault();
//     fetch('http://localhost:8080/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newProduct),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         GetAllProduct(); // actualise la liste des produits
//         setNewProduct({
//           name: '',
//           description: '',
//           price: '',
//           stock: '',
//         }); // réinitialise le formulaire
//       })
//       .catch((error) => console.log(error));
//   }

//   function PutProduct(id) {
//     fetch(`http://localhost:8080/products/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(selectedProduct),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         GetAllProduct(); // actualise la liste des produits
//         setSelectedProduct(null); // désélectionne le produit
//       })
//       .catch((error) => console.log(error));
//   }

//   function DeleteProduct(id) {
//     fetch(`http://localhost:8080/products/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(() => {
//         GetAllProduct(); // actualise la liste des produits
//         setSelectedProduct(null); // désélectionne le produit
//       })
//       .catch((error) => console.log(error));
//   }
//   return (
//     <div>
//       <h1>Liste des produits</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Nom</th>
//             <th>Description</th>
//             <th>Prix</th>
//             <th>Stock</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>{product.stock}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>




  
//       <div>
//         <h2>Ajouter un produit</h2>
//         <form onSubmit={postProduct}>
//           <label>
//             Nom :
//             <input type="text" value={newProduct.name} onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}/>
//           </label><br/>
//           <label>
//             Description :
//             <input type="text" value={newProduct.description} onChange={(event) => setNewProduct({...newProduct, description: event.target.value,})}/>
//           </label><br/>
//           <label>
//             Prix :<input type="number" value={newProduct.price}
//               onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}/>
//           </label><br/>
//           <label>
//             Stock :
//             <input type="number" value={newProduct.stock}onChange={(event) =>setNewProduct({ ...newProduct, stock: event.target.value })}/>
//           </label><br/>
//           <button type="submit">Ajouter</button>
//         </form>
//       </div>
  
//       {selectedProduct && (
//         <div>
//           <h2>Modifier le produit {selectedProduct.name}</h2>
//           <form onSubmit={() => putProduct(selectedProduct.id)}>
//             <label>
//               Nom :
//               <input type="text" value={selectedProduct.name} onChange={(event) => setSelectedProduct({...selectedProduct,name: event.target.value,})}/>
//             </label><br/>
//             <label>
//               Description :
//               <input type="text" value={selectedProduct.description} onChange={(event) => setSelectedProduct({...selectedProduct,description: event.target.value,})}/>
//             </label><br/>
//             <label>
//               Prix :
//               <input type="number" value={selectedProduct.price} onChange={(event) =>setSelectedProduct({...selectedProduct,price: event.target.value,})}/>
//             </label><br/>
//             <label>
//               Stock :
//               <input type="number" value={selectedProduct.stock} onChange={(event) => setSelectedProduct({...selectedProduct,stock: event.target.value,})}/>
//             </label><br/>
//             <button type="submit">Modifier</button>
//           </form>
//           <div>
//             <button onClick={() => setSelectedProduct(null)}>Annuler</button>
//             {selectedProduct && (
//               <div>
//                 <h2>Supprimer le produit {selectedProduct.name} ?</h2>
//                 <button onClick={() => DeleteProduct(selectedProduct.id)}>Oui</button>
//                 <button onClick={() => setSelectedProduct(null)}>Non</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//    </div>
//   );
// }
// export default Products;