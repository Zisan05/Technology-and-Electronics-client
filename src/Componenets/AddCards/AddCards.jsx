import Swal from "sweetalert2";

const AddCards = ({data,setProduct,product}) => {

    const {_id,image,name,brandname,productType,price,rating,shortDescription} = data;

    const handleDelete = (id) => {
     fetch(`http://localhost:5000/card/${id}`,{
      method: 'DELETE'
     })
     .then (res => res.json())
     .then (data => {
      if(data.deletedCount>0){

        const remaining = product.filter(item => item._id !== id )
        setProduct(remaining);
        Swal.fire(
          'success',
          'Successfully Delete Your Item',
          'success'
        )
      }
     })
      
    }
    return (
        <div>
            <div className="card card-side md:h-[350px] lg:h-[350px] lg:w-[500px] bg-blue-300 shadow-xl">
  <figure><img className="h-[200px] w-[200px] ml-[30px]" src={image} alt="item"/></figure>
  <div className="card-body mt-[40px]">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Brand Name: {brandname}</h2>
    <h2 className="card-title">Product Type: {productType}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <h2 className="card-title">Rating:{rating}/10</h2>
       <div>
        <button onClick={() => handleDelete(_id)} className="btn bg-purple-400">Delete</button>
       </div>
  </div>
</div>
        </div>
    );
};

export default AddCards;