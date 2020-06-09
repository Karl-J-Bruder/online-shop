import React from "react";
import BrowseProducts from "./BrowseProducts";
import useReactRouter from "use-react-router";

const ProductsPage = () => {
    const { history, location, match } = useReactRouter();
    return (
        <div>
            <BrowseProducts />
        </div>
    );
};

export default ProductsPage;
