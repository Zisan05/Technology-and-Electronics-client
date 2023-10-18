

const BrandsCard = ({data}) => {

    const {brand,brand_img} = data;
    return (
        <div>

            
            <div className="card  bg-orange-100 shadow-xl">
  <figure><img className="h-[200px] w-full" src={brand_img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[35px] lg:ml-[100px] text-purple-500 ">{brand}</h2>

  </div>
</div>
        </div>
    );
};

export default BrandsCard;