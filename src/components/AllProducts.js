import "./allproducts.css"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import ReactPaginate from 'react-paginate';
import "./another-pages/Login/Login"

import { Link } from "react-router-dom";

function AllProducts() {


    // get from api
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/")
            .then(res => {
                setProducts(res.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])



    // paginations
    const [pageNumber, setPagenumber] = useState(0)
    const prodPerPage = 4
    const pagesVisited = pageNumber * prodPerPage
    const pageCount = Math.ceil(products.length / prodPerPage)

    const changPage = ({ selected }) => {
        setPagenumber(selected)
    }

    // dusplay products
    const displayProd = products.slice(pagesVisited, pagesVisited + prodPerPage)
        .map(({ id, name, price, quantity, image, color, size }) => {
            return (
                <div className="card col-4 p-0 overflow-hidden" style={{ width: "19rem" }} key={id}>
                    <div className="overflow-hidden">
                        <Link to={`details/${id}`} className="link-img text-decoration-none overflow-hidden">
                            <img src={image} className="card-img-top " alt="..." />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price : {price}$</li>
                        <li className="list-group-item">Quantity : {quantity}</li>
                        <li className="list-group-item">Color : {color.map(ele => ele + " ,")}</li>
                    </ul>
                    <div className="card-body">
                        <div>Sizes : {size.map(ele => { return ele + " ," })}</div>
                    </div>
                </div>
            )
        })
    //filter
    return (
        <div className="products">
            <div className="word fw-bolder fs-3 w-100 text-center d-flex justify-content-center">All Products</div>

            <div className="cards w-100 p-5 row">
                {products.length === 0 &&
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                {displayProd}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changPage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBttns"}
                    nextLinkClassName={"nextBttns"}
                    disabledClassName={"paginationdis"}
                    renderOnZeroPageCount={null}
                    breakLabel="..."
                />


            </div>
        </div>

    )
}
export default AllProducts 