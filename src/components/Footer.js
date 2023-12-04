import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="row d-flex flex-wrap justify-content-around w-100 align-items-center h-100">
                <div className="col-5">
                    <div className="navbar-brand fs-1">CUBA</div>
                    <div className="col-12 mt-3">
                        <div className="title fw-bold fs-5">Follow Us</div>
                        <ul className="icons">
                            <li><a target="blank" href="https://www.facebook.com/profile.php?id=100068121664704"><i className="fa-brands fa-facebook fs-2" style={{ color: "#005eff" }}></i></a></li>
                            <li><a target="blank" href="https://www.instagram.com/cuba_10th/"><i className="fa-brands fa-instagram fs-2" style={{ color: "#f56040" }}></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    <div className="title fw-bold fs-5">About Us</div>
                    <p className="content text-white-50 fw-lighter fs-6 m-2">CUBA is your one-stop shop for designer brands. We aim to make elegant, trendy items more accessible to everyone with no worries or hassle!</p>
                </div>
                <div className="col-3">
                    <div className="title fw-bold fs-5">Address</div>
                    <ul className="listOfContent">
                        <li className="fw-normal"><i className="fa-solid fa-location-dot me-2" style={{ color: "#ffc107" }}></i>10th of ramadan</li>
                        <li className="fw-normal"><i className="fa-solid fa-phone me-2" style={{ color: "#ffc107" }}></i>+20 123456789</li>
                        <li className="fw-normal"><i className="fa-solid fa-envelope  me-2" style={{ color: "#ffc107" }}></i>Elashkar61@gmail.com</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}