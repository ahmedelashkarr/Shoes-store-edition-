import { Fragment, useState } from "react";
import "./register.css"
import axios from "axios";
import swal from "sweetalert";
export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")

    const sendData = () => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/account/register/',
            data: {
                username: username,
                password: password,
                email: email,
                first_name: first_name,
                last_name: last_name,
            }
        }).then(res => {

            res.status === 200 && swal("Good job!", "You clicked the button!", "success").then(value => {

                document.location.replace("/login")
            })


            //     // localStorage.setItem("username", res.data.userinfo.username)
            //     // localStorage.setItem("token", res.data.token)
        }
        )

    }
    return (
        <Fragment>
            <div className="register-page d-flex justfiy-content-center align-items-center">
                <div className="container w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="register-form rounded ">
                        <div className="login-title w-100 text-center fs-3 fw-bold mb-4">Register</div>
                        <form onSubmit={e => e.preventDefault()} action="/" target="_self" className=" d-flex align-content-around flex-wrap w-100 h-75">
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" onChange={(e) => { setFirst_name(e.target.value) }} />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" onChange={(e) => { setLast_name(e.target.value) }} />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={(e) => {
                                        setUsername(e.target.value)
                                    }} />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center mt-4 mt-sm-2">
                                <div class="col-auto mt-0">
                                    <label for="inputPassword6" class="col-form-label p-0">Password</label>
                                    <input type="password" id="inputPassword6" class="form-control mt-2" aria-describedby="passwordHelpInline" required onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must be 8-20 characters long.
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6 w-100">
                                <label for="inputEmail4" class="form-label w-100">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" required onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <button onClick={() => {
                                sendData()
                            }} type="submit" className="btn btn-primary w-100 mt-4 ">Sign Up</button>

                        </form>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}