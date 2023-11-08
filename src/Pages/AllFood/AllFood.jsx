import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";


const AllFood = () => {
    const foodlist = useLoaderData()

    const [foodItemslist, setfooditemlist] = useState(foodlist)



    const handleSearch = e =>{
        
        // setquery(e.target.value)
        setfooditemlist(foodlist.filter(foodItem => foodItem.foodname.toLowerCase().includes(e.target.value)))
    }

    const handlefilter = categoryname =>{

        const categoryName = categoryname.toLowerCase()
        console.log(categoryName)
         
        setfooditemlist(foodlist.filter(foodItem => foodItem.category.toLowerCase().includes(categoryName)))


    }

    let minValue; 
    let maxValue ; 

    // console.log(minValue)
    // console.log(maxValue)

    const handleprice = (minValue, maxValue) =>{

        
        setfooditemlist(foodlist.filter(foodItem => {
            const prices = foodItem.price
            const pricesInt = parseInt(prices)
           
            if(pricesInt>minValue && pricesInt<maxValue){
                return pricesInt
            }

        }))

    }
    const handleHightPrice  = maxValue =>{

        setfooditemlist(foodlist.filter(foodItem => {
            const prices = foodItem.price
            const pricesInt = parseInt(prices)
           
            if( pricesInt>maxValue){
                return pricesInt
                
            }

        }))
        
    }

    // pagination
   




    return (
        <div className="px-4 lg:px-12 lg:py-6 flex  ">
            {/* sidebar */}
            <div className="w-1/4 min-h-screen ">
              <div className="pt-20">
              <h1 className="font-bold text-xl">  Category</h1>

                <div className="flex justify-start items-center py-3  " >
                <input type="radio" name="radio-8" className="radio radio-error"  onClick={ () =>setfooditemlist(foodlist)}/>
                <h1 className=" text-xl pl-3">All</h1>
                </div>
                {/* second category */}
                <div className="flex justify-start items-center py-3 " >
                <input type="radio" name="radio-8" className="radio radio-error" onClick={ () =>handlefilter('Meat and Poultry')} />
                <h1 className=" text-[16] pl-3">Meat and Poultry</h1>
                </div>
                {/* third */}
                <div className="flex justify-start items-center py-3 "    >
                <input type="radio" name="radio-8" className="radio radio-error" onClick={ () =>handlefilter('Seafood')} />
                <h1 className=" text-[16] pl-3">Seafood</h1>
                </div>
                {/* forth */}
                <div className="flex justify-start items-center py-3 " >
                <input type="radio" name="radio-8" className="radio radio-error" onClick={ () =>handlefilter('Pasta and Italian')}  />
                <h1 className=" text-[16] pl-3">Pasta and Italian</h1>
                </div>
                {/* fifth */}
                <div className="flex justify-start items-center py-3 "  >
                <input type="radio" name="radio-8" className="radio radio-error" onClick={ () =>handlefilter('Vegetarian and Vegan')} />
                <h1 className=" text-[16] pl-3">Vegetarian and Vegan</h1>
                </div>

              </div>
              {/* price filter */}
              <div className="pt-10">
              <h1 className="font-bold text-xl">price</h1>

                <div className="flex justify-start items-center py-3  " >
                <input type="radio" name="radio-8" className="radio radio-error"   onClick={ () =>setfooditemlist(foodlist)}/>
                <h1 className=" text-xl pl-3">All</h1>
                </div>
                {/* second category */}
                <div className="flex justify-start items-center py-3 " >
                <input type="radio" name="radio-8" className="radio radio-error" onClick={ () =>handleprice(minValue=0, maxValue=15 )} />
                <h1 className=" text-[16] pl-3">$0 - $15</h1>
                </div>
                {/* third */}
                <div className="flex justify-start items-center py-3 "    >
                <input type="radio" name="radio-8" className="radio radio-error"   onClick={ () =>handleprice(minValue=15, maxValue=25 )} />
                <h1 className=" text-[16] pl-3">$15 - $25</h1>
                </div>
                {/* forth */}
                <div className="flex justify-start items-center py-3 " >
                <input type="radio" name="radio-8" className="radio radio-error"  onClick={ () =>handleprice(minValue=25, maxValue=40 )}  />
                <h1 className=" text-[16] pl-3">$25 - 40$</h1>
                </div>
                {/* fifth */}
                <div className="flex justify-start items-center py-3 "  >
                <input type="radio" name="radio-8" className="radio radio-error"  onClick={ () =>handleHightPrice( maxValue=40 )}/>
                <h1 className=" text-[16] pl-3">over $40</h1>
                </div>

              </div>
                

            </div>
            {/* sidebar end */}
            <div className="w-3/4 p-5">
                <div className="">
                <input onChange={handleSearch} name="search" type="text" placeholder="search food name.." className="input input-bordered w-full max-w-xs " />
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6 ">
                {
                 foodItemslist.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem> ) 
                    
                }
                </div>
       
            </div>
            
            {/* pagination */}

       
            
        </div>
    );
};

export default AllFood;