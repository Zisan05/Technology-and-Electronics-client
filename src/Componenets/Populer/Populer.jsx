


const Populer = () => {
    return (
       <div>
        <h1 className="text-blue-400 text-[35px] text-center font-bold underline mt-[50px] mb-[20px]">Most Popular Product in recent time </h1>
         <div className="flex gap-[50px] md:gap-[100px] lg:gap-[100px] ml-[100px] items-center">
            <div>
               <img className=" w-[200px] md:w-[330px] lg:w-[330px] h-[200px] md:h-[500px] lg:h-[500px]" src="https://i.ibb.co/frSY12r/Apple-i-Phone-14-Pro-i-Phone-14-Pro-Max-gold-220907-inline-jpg-large.jpg" alt="" />
            </div>

            <div className=""> 
                 <h1 className="text-[20px] lg:text-[30px] font-bold text-amber-800">Recent time this is Iphone 14 pro max the most populer product in our web site.</h1>
                 <h1 className="text-[20px] lg:text-[30px] font-bold text-indigo-500">For this we give 20% sale in this product so purchase now!! </h1> 
                 <button className="btn bg-emerald-300 hover:bg-cyan-600 text-black font-bold">Purchase</button>  
            </div>
        </div>
       </div>
    );
};

export default Populer;