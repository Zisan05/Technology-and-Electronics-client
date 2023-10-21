import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const handleUpdateData = e => {
        e.preventDefault();
   
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        
        const productType = form.productType.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;
   
        const UpdateUser = {image,name,productType,price,rating,shortDescription}
   
       
        console.log(UpdateUser)
        fetch(`https://technology-electronic-server.vercel.app/tech/${_id}`,{
               method:'PUT',
               headers: {
                   'content-type': "application/json"
               },
               body: JSON.stringify(UpdateUser)
           })
           .then(res => res.json())
           .then (data => {
               console.log(data);
               if(data.modifiedCount > 0){
                   Swal.fire(
                       'success',
                       'Successfully Update Your Item',
                       'success'
                     )
                     
               }
           })
       }

    const updateData = useLoaderData();
    const {_id,image,name,productType,price,rating,shortDescription} = updateData
    return (
        <div>
           
            <div className=" bg-orange-400 min-h-screen">
            <h1 className="text-[35px] text-center font-bold text-blue-400 underline 
            mb-[30px]">Update product </h1>
            <div className="container mx-auto">
                <form onSubmit={handleUpdateData}>
                    {/* form 1st row */}
                    <div className="flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">
                                Image
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    placeholder="Image URL"
                                    className=" input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-bold label-text">
                                   Product Name
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Quantity_Name</span> */}
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Product Name"
                                    className="input w-full input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form 2nd row */}
                    <div className="flex gap-4">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                                <span className="label-text font-bold">
                                Short description
                                </span>
                            </label>
                            <label className="input-group rounded-3xl">
                                {/* <span>photo</span> */}
                                <input
                                    type="text"
                                    name="shortDescription"
                                    defaultValue={shortDescription}
                                    placeholder="Short description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-bold label-text">
                                Product Type
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Taste</span> */}
                                <input
                                    type="text"
                                    name="productType"
                                    defaultValue={productType}
                                    placeholder=" Product Type"
                                    className="input w-full input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form 3rd row */}
                    <div className="flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">
                                Price
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Categories</span> */}
                                <input
                                    type="text"
                                    name="price"
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-bold label-text">
                                    Rating
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Details</span> */}
                                <input
                                    type="text"
                                    name="rating"
                                    defaultValue={rating}
                                    placeholder="Rating"
                                    className="input w-full input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form 4th row */}
                    <div className="">
                        <div className="form-control w-[70%] mx-auto">
                       
                        
                        </div>

                        <input 
                            className="btn w-full mt-4 bg-blue-400 text-black"
                            type="submit"
                            value="Update Product"
                        />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Update;