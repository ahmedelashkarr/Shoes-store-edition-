import { Fragment } from "react";
import Header from './Header';
import AllProducts from './AllProducts';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <AllProducts />
        </Fragment>
    )
}