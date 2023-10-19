import { useEffect,useState } from "react";
import {useLoaderData, useParams} from "react-router-dom"
import BrandDetail from "../BrandDetail/BrandDetail";

const BrandDetails = () => {
const [BrandData,setBrandData] = useState([]);

const {brandname} = useParams();

const product = useLoaderData();

useEffect( () => {
  const filterData = product.filter(item => item.brandname===brandname )
  setBrandData(filterData);
  
  

},[brandname,product])

console.log(BrandData);

      
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-[30px] ml-[10px] md:ml-[50px]  lg:ml-[200px] ">
            {
              BrandData.map(data => <BrandDetail key ={data.id} data ={data}></BrandDetail> )
            }
        </div>
    );
};

export default BrandDetails;