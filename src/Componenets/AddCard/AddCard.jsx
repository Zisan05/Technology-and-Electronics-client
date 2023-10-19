import { useLoaderData } from "react-router-dom";
import AddCards from "../AddCards/AddCards";
import { useState } from "react";


const AddCard = () => {

    const addcard = useLoaderData();
    const [product,setProduct] =useState(addcard)


    return (
        <div className="grid  lg:grid-cols-2 gap-[30px] md:ml-[130px] lg:ml-[30px] mt-[30px]">
            {
                product.map(data =><AddCards key ={data.id}
                data = {data} product ={product} setProduct ={setProduct}></AddCards> )
            }
        </div>
    );
};

export default AddCard;