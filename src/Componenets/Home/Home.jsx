import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import BrandsCard from "../BrandsCard/BrandsCard";

const Home = () => {
 
const data = useLoaderData();

console.log(data);
    return (
       <div>
         <div className="hero h-[400px] " style={{backgroundImage: 'url(https://i.ibb.co/rGx0kxP/Technology-Watch.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><span className="text-blue-400">We have the technology</span><span className="text-yellow-400"> that make your life easier.!!</span></h1>
       
     <button className="bg-blue-400 hover:bg-yellow-400 p-[10px] rounded-[4px] text-black font-bold">Show Details</button>
      
    </div>
  </div>
</div>
<h1 className="text-[30px] text-center underline text-orange-500">Our Brands</h1>
<div className="grid grid-cols-3 gap-[20px] mx-[30px]">

  {
    data.map(data => <BrandsCard key = {data.id} data = {data}></BrandsCard>)
  }
</div>

<Footer></Footer>
       </div>
    );
};

export default Home;