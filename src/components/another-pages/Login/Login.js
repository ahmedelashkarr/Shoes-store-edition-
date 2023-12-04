import axios from "axios";
import "./login.css"
import { Fragment, useState } from "react";


import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function sendData() {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/account/login/',
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            localStorage.setItem("username", res.data.userinfo.username)
            localStorage.setItem("token", res.data.token)
            localStorage.getItem("username") && document.location.replace("/")
        }
        )


    }

    return (
        <Fragment>
            <div className="login-page">
                <div className="container w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="login-form rounded">
                        <div className="login-title w-100 text-center fs-3 fw-bold ">Login</div>
                        <form onSubmit={e => e.preventDefault()} action="/" target="_self" className=" d-flex align-content-around flex-wrap w-100 h-75">
                            <div className="row mb-3 w-100">
                            </div>
                            <div className="row mb-3 w-100">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>

                                <div className="col-sm-10">
                                    <input onChange={(e) => {
                                        setUsername(e.target.value)
                                    }} type="text" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3 w-100 ">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <button onClick={() => {
                                sendData()
                            }} type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                        <div className="createAccount"><Link to={"http://localhost:3000/register"}>Create Account ?</Link></div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}