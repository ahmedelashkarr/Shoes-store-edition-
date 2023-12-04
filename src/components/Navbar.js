
import { Link } from "react-router-dom"
import "./navbar.css"
import { Fragment } from "react"
import axios from "axios"
function Navbar() {
    let username = ""
    if (localStorage.getItem("username") !== null) {
        username = localStorage.getItem("username")
    } else {
        username = ""
    }
    const showLogin = () => {
        if (username === "") {
            return (
                <Fragment>
                    <i className="fa-regular fa-user me-1" ></i>
                    <span style={{ color: "white" }}>Login</span></Fragment>
            )
        } else {
            return (
                <Fragment>
                    <button onClick={() => {
                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/account/logout/',
                            headers: {
                                Authorization: "Token " + localStorage.getItem("token")
                            }
                        }).then(res => {
                            localStorage.clear()
                            document.location.reload()
                        })
                    }} type="button" class="btn btn-danger me-2">Logout</button>
                    {username}
                </Fragment>
            )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg shadow mb-0 rounded-0 bg-opacity-50 p-0 d-block d-lg-flex">
            <div className="container">
                <Link className="navbar-brand fs-2" to="/">CUBA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link active fw-normal fw-normal fst-italic" aria-current="page" to="/">Home</Link>
                        </li>


                    </ul>
                </div>
            </div>
            <Link to={"login"} className="login-icon fw-semibold fst-italic text-decoration-none">
                {showLogin()}

            </Link>
        </nav>

    )
}

export default Navbar