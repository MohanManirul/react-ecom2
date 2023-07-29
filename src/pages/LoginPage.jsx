import { useState } from "react";
import Layout from "../layout/Layout";
import userLogin from "../ApiCalling/userLogin";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email , setEmail ] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        userLogin(email)
        .then((data)=>{
            if(data?.msg === "success"){
                navigate(`/otp?email=${email}`)
            }
        })
        .catch((err) => console.log("There Was an error"))
    }

    return (
        <Layout>
            <h3 className="text-center">Login page</h3>
            <div className="float-sm-start margin">

                <div className="row">
                    <div className=" float-center">   
                    <span>E-mail : </span>             
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <button  className="btn btn-success" onClick={handleLogin}>Next</button>
                    </div>    
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;