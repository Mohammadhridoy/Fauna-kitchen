import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";


const AllFood = () => {
    const foodItemslist = useLoaderData()
    console.log(foodItemslist)


    return (
        <div className="px-4 lg:px-12 lg:py-6 flex  ">
            {/* sidebar */}
            <div className="w-1/4 bg-red-500 min-h-screen">
                

            </div>
            {/* sidebar end */}
            <div className="w-3/4 p-5">
                <div className="">
                <input type="text" placeholder="search food name.." className="input input-bordered w-full max-w-xs " />
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6 ">
                {
                    foodItemslist.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem> )
                }
                </div>
       
            </div>
            
        </div>
    );
};

export default AllFood;