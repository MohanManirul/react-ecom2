import { Link } from "react-router-dom";
import Footer from "../pages/Footer";


const Layout = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ul className="listDisplay">

                        <li className="list">
                            <Link to={'/'}>Home</Link>
                        </li>

                        <li className="list">
                            <Link to={'/products'}>Product</Link>
                        </li>

                        <li  className="list">
                        <Link className="gitLink" to={'https://github.com/MohanManirul/react_blog_template_mastering'}>Git Link</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="listDisplay">
                        <li className="list">
                            <Link to={'/cart-list'}>Cart</Link>
                        </li>
                        <li className="list">
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {props.children}

            <Footer />
        </div>
    );
};

export default Layout;