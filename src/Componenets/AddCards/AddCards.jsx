
const AddCards = ({data}) => {

    const {image,name,brandname,productType,price,rating,shortDescription} = data
    return (
        <div>
            <div className="card card-side md:h-[350px] lg:h-[350px] lg:w-[500px] bg-blue-300 shadow-xl">
  <figure><img className="h-[200px] ml-[30px]" src={image} alt="item"/></figure>
  <div className="card-body mt-[40px]">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brandname}</h2>
    <h2 className="card-title">Product Type: {productType}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <h2 className="card-title">Rating:{rating}/10</h2>
       <div>
        <button className="btn bg-purple-400">Delete</button>
       </div>
  </div>
</div>
        </div>
    );
};

export default AddCards;