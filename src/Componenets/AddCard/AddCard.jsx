import { useLoaderData } from "react-router-dom";
import AddCards from "../AddCards/AddCards";


const AddCard = () => {

    const product = useLoaderData();


    return (
        <div className="grid  lg:grid-cols-2 gap-[30px] md:ml-[130px] lg:ml-[30px] mt-[30px]">
            {
                product.map(data =><AddCards key ={data.id}
                data = {data}></AddCards> )
            }
        </div>
    );
};

export default AddCard;