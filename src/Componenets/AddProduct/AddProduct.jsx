

const AddProduct = () => {

    const handleAddData = e => {
     e.preventDefault();

     const form = e.target;
     const image = form.image.value;
     const name = form.name.value;
     const brandname = form.brandname.value;
     const productType = form.productType.value;
     const price = form.price.value;
     const rating = form.rating.value;
     const shortDescription = form.shortDescription.value;

     const user = {image,name,brandname,productType,price,rating,shortDescription}

    
     console.log(user)
     
    }
    return (
        <div className=" bg-orange-400 min-h-screen">
            <div className="container mx-auto">
                <form onSubmit={handleAddData}>
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
                                Brand Name
                                </span>
                            </label>
                            <label className="input-group">
                                {/* <span>Supplier</span> */}
                                <input
                                    type="text"
                                    name="brandname"
                                    placeholder="Brand Name"
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
                                    placeholder="Rating"
                                    className="input w-full input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form 4th row */}
                    <div className="">
                        <div className="form-control w-[70%] mx-auto">
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
                                    placeholder="Short description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        <input 
                            className="btn w-full mt-4 bg-blue-400 text-black"
                            type="submit"
                            value="Add Product"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;