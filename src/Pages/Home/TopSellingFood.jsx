import { useEffect, useState } from "react";
import TopFoods from "./TopFoods";
import { Link } from "react-router-dom";


const TopSellingFood = () => {
    const [topSellFoods, setTopSell] = useState()

    useEffect(()=>{
        fetch('http://localhost:5000/addfoods')
        .then(res => res.json())
        .then(data => setTopSell(data))
    },[])

 

    // const  topSellFood.sort()



    return (
        <div className="px-4 lg:px-12 lg:py-6 min-h-screen"> 
        <h1 className="py-6 font-bold text-2xl text-center">Top selling food items</h1>

        <div className="grid ml-12 md:ml-10 lg:ml-0 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 ">
        {
            topSellFoods?.map((topSellFood) =><TopFoods key={topSellFood._id} topfoods={topSellFood}></TopFoods>)
        }

        </div>
        
        <form className="mt-4 py-4 flex justify-center">
                    <Link to={`/allfood`}>
                    <button
                    
                    className="block w-40 rounded bg-red-400 p-4 text-white text-sm font-medium transition hover:scale-105"
                >
                   see all
                </button>
                        
                 </Link>
                
                </form>
   
            
        </div>
    );
};

export default TopSellingFood;