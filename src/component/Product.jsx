import { Link } from "react-router-dom";
import createCart from "../ApiCalling/createCart";


const Product = ({product = {}}) => {

    const handleAddToCart = () => {
        createCart(product.id)
        .then((data) => {
            if(data?.msg === "success"){
                alert("The product was added to cart");
            }
        })
        .catch((err) => console.log("There was an error"));
    }

    return (
        <> 
            <div className="col-md-4 cardMarginBottom">
                <div className="card">
                    <figure>
                        <img className="card-img-top" src={product.image} alt={product.title}></img>
                    </figure>

                    <div className="card-body">
                        <h4>{product?.title}</h4>
                        <p className="card-text">{product?.short_des}</p>
                        <b>Price: ${product.price}</b>
                        <button  className="btn btn-primary btnRightFloat" onClick={handleAddToCart}>+ Add to cart</button>
                    </div> 
                </div>
           </div>          
        </>
      
    );
};

export default Product;