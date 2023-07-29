import { useEffect, useState } from "react";
import fetchCartList from "../ApiCalling/fetchCartList";
import CartItem from "./CartItem";
import removeCart from "../ApiCalling/RemoveCart";
import convertPriceStringToNumber from "../helpers/convertPriceStringToNumber";


const CartList = () => {
    const [items , setItems] = useState([]);
    useEffect(()=>{
        fetchCartList()
        .then((data)=>{
            if(data?.msg === "success"){
                setItems(data?.data)
            }
        })
        .catch((err) => console.log("There was an error"));
    },[])


    const handleRemove = (productId)=>{
        removeCart(productId)
        .then((data) => {
            if(data?.msg === "success"){
               const remainingItems =  items.filter(
                (item) => item.product.id !== productId
               );
               setItems(remainingItems);
            }
        })
        .catch((err) => console.log("There was an error"));
    }

    const calculateTotalPrice =()=>{
        const totalPrice = items.reduce((total, currentValue)=>{
            const price = convertPriceStringToNumber(currentValue);
            return total + price ;
        },0);
        return totalPrice;   
    }

    return (
        <div className="d-flex">
           <div className="col-md-7">
                { items.map((item)=>(

                    <CartItem key={item?.id} product={item.product} remove={handleRemove}/>

                ))}
           </div>

           <div className="col-md-5">
                <div className="card cardPadding">  
                    <div className="row">
                        <h3>Total Items : {items.length}</h3>                  
                        <h3>Total Price : ${calculateTotalPrice()}</h3>                  
                    </div>                           
                </div>
           </div>
        </div>
    );
};

export default CartList;