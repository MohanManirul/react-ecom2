
import { useEffect, useState } from "react";
import fetchProducts from "../ApiCalling/fetchProducts.JS";
import Product from './Product';

const ProductList = () => {
    const [products , setProducts] = useState([]);
    const [error , setError] = useState("");

    useEffect(()=>{
        fetchProducts()
        .then((data)=> setProducts(data))
        .catch((err) => setError("There was an error"))

    },[]);

    let output;

    if(error){
        output = <div>There was an error</div>;
    } else if(products?.length > 0){
        output = products.map((product)=> (<Product key={product.id} product={product}/>));
    }else{
        <div>No products found!</div>;
    }

    return (
       <div className="row">
           {output}
       </div>
    );
};

export default ProductList;