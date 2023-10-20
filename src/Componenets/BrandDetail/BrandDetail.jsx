import { Link } from "react-router-dom";

const BrandDetail = ({data}) => {

const {_id,image,name,brandname,productType,price,rating,shortDescription} = data

    return (
        <div> 
            
            <div className="card w-[300px] h-[650px] bg-yellow-300 shadow-xl">
  <figure><img className="w-[90%] h-[200px] mt-[30px]" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brandname}</h2>
    <h2 className="card-title">Product Type: {productType}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <h2 className="card-title">Rating: {rating}/10</h2>
    <p><span className="font-semibold">shortDescription:</span> {shortDescription}</p>
    <Link to = {`/itemdetails/${_id}`}><button className="btn bg-orange-300 px-[90px]">Details</button></Link>
    <Link to ={`/update/${_id}`}><button className="btn bg-orange-300 px-[90px]">Update button</button></Link>

</div>
</div>
        </div>
    );
};

export default BrandDetail;