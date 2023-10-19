import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {

    const loadData = useLoaderData()

    const {_id,image,name,brandname,productType,price,rating,shortDescription} = loadData;
    return (
        <div>
            <h1 className="text-[35px] text-center font-bold underline">Details of the item</h1>
            <div className="card w-[80%] container mx-auto h-[650px] bg-yellow-300 shadow-xl">
  <figure><img className="w-[90%]  h-[300px] mt-[30px]" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brandname}</h2>
    <h2 className="card-title">Product Type: {productType}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <h2 className="card-title">Rating: {rating}/10</h2>
    <p><span className="font-semibold">shortDescription:</span> {shortDescription}</p>

    <button className="btn bg-orange-400">Add to my card</button>
   

</div>
</div>
        </div>
    );
};

export default ItemDetails;