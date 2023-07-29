import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage />}/>
          <Route path="/products"  element={<ProductPage />}/>
          <Route path="/login"  element={<LoginPage />}/>
          <Route path="/otp"  element={<OtpPage />}/>
          <Route path="/cart-list"  element={<CartPage />}/>
          <Route path="*"  element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;