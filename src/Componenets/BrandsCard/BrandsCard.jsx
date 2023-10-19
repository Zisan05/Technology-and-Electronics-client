import {Link} from "react-router-dom"

const BrandsCard = ({data}) => {

    const {brandname,brand_img} = data;

    
    return (
        <Link to ={`/branddetails/${brandname}`}>
        <div>
            <div className="card  bg-orange-100 shadow-xl">
  <figure><img className="h-[200px] w-full" src={brand_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[35px] lg:ml-[100px] text-purple-500 ">{brandname}</h2>

  </div>
</div>
        </div></Link>
    );
};

export default BrandsCard;