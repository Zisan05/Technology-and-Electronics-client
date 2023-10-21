import {Link} from "react-router-dom"

const BrandsCard = ({data}) => {

    const {brandname,brand_img} = data;

    
    return (
        <Link to ={`/branddetails/${brandname}`}>
        <div>
            <div className="card h-[300px] md:h-[300px] lg:h-[400px]  bg-orange-100 shadow-xl">
  <figure><img className="h-[200px] md:h-[200px] lg:h-[300px] w-full" src={brand_img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[35px] lg:ml-[100px] text-purple-500 ">{brandname}</h2>

  </div>
</div>
        </div></Link>
    );
};

export default BrandsCard;