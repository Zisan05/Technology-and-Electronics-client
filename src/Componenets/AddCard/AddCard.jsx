import { useLoaderData } from "react-router-dom";
import AddCards from "../AddCards/AddCards";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AddCard = () => {

    const addcard = useLoaderData();
    const [product,setProduct] =useState([])

    const {user} = useContext(AuthContext);

   const myUser = user?.email
   
   useEffect( () => {
   if(myUser){
    const myProduct = addcard.filter(data => data.curUser === myUser)
    setProduct(myProduct)
   }

   },[addcard,myUser])

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