

const CartItem = ({product,remove}) => {
    const {title, image, price,short_des , id} = product || {};
    return (
        <div className="card cardPadding">  
            <div className="row">
                <div className="col-md-3">
                    <figure>
                        <img className="card-img-top" src={image} alt= {title} ></img>
                    </figure>
                </div> 
                <div className="col-md-9">
                    <h6>{title}</h6>
                    <p>{short_des}</p>
                    <h3>Price : ${price}</h3>
                    <button className="btn btn-warning float-end" onClick={()=>remove(id)}>remove</button>
                </div>                  
            </div>                           
        </div>
    );
};

export default CartItem;