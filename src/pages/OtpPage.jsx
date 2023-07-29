import { useState } from "react";
import Layout from "../layout/Layout";
import verifyLogin from "../ApiCalling/verifyLogin";
import { useNavigate, useSearchParams } from "react-router-dom";


const OtpPage = () => {
    const [pin , setPin] = useState('');
    const navigate  = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");


    const handleVerifyLogin = () => {
        verifyLogin(email,pin)
        .then((data) => {
            if(data?.msg === "success"){
                localStorage.setItem("token",data.data);
                navigate("/products");
            }
        })
        .catch((err) => console.log("There was an error"));
    }

    return (
        <Layout>
            <h3 className="text-center">OTP</h3>
            <div className="float-sm-start margin">

                <div className="row">
                    <div className=" float-center">   
                    <span>Otp : </span>             
                    <input type="text" value={pin} onChange={(e)=>setPin(e.target.value)}/>
                        <button className="btn btn-success" onClick={handleVerifyLogin}>Next</button>
                    </div>    
                </div>
            </div>
        </Layout>
    );
};

export default OtpPage;