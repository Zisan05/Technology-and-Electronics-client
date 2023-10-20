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

       <div>

        <div>
        <div className="carousel w-full mt-[50px] mb-[50px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/SwxWHtN/laptop-big.webp" className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xC6PNbm/istockphoto-1439425791-170667a.webp" className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9cmfQ4X/images.jpg" className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZKwZ9xZ/2023-06-Adobe-Stock-553093902-cropimg-width-700-crop-landscape.jpg" className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>




        <div>
        <h1 className="text-[35px] text-orange-500 text-center font-bold underline mb-[50px] ">{brandname} Brand Product</h1>

        {
          BrandData.length === 0 ? (
            <div>
              <h1 className="text-[35px] text-red-500 text-center font-bold  mb-[50px] ">We do not have this Product please select another brand</h1><br />
              <h1 className="text-[35px] text-red-500 text-center font-bold  mb-[50px] ">!!!</h1>
              <button className="btn bg-blue-500 ml-[500px] mb-[30px]">Go to home</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-[30px] ml-[10px] md:ml-[50px]  lg:ml-[200px] ">

            {
              BrandData.map(data => <BrandDetail key ={data.id} data ={data}></BrandDetail> )
            }
        </div>
          )
        }
        
        </div>
       </div>
        
    );
};

export default BrandDetails;