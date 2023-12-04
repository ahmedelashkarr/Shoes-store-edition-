import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Details() {
    const { id } = useParams()
    const [productDetails, setProductDetails] = useState("")
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${id}`)
            .then(res => {
                setProductDetails(res.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // display
    const funDisplay = () => {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div class="card mb-3" style={{ maxWidth: "160vh" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={productDetails.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{productDetails.name}</h5>
                                <p class="card-title">Brand : {productDetails.brand}</p>
                                <p class="card-title">Price : {productDetails.price} LE</p>
                                <p class="card-title">Quantity : {productDetails.quantity}</p>
                                <p class="card-title">Sizes : {productDetails.size + ""}</p>
                                <p class="card-title">Colors : {productDetails.color + ""}</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    console.log(productDetails);
    return (
        <Fragment>
            {funDisplay()}
        </Fragment>
    )
}