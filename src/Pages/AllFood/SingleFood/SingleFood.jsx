
import { useLoaderData } from "react-router-dom";


const SingleFood = () => {

    

    const singleFoods = useLoaderData()
    const  {username,foodname, category, image, price, description, country }= singleFoods || { }

    const hanldeOrder = () =>{
        
    }
  

    return (
        <div className="px-4 lg:px-12 lg:py-10 min-h-screen ">
            <div className="flex gap-8 ">
            <div className="w-2/5 ">
                <img className="w-[500px] h-[550px] rounded-md" src={image} alt="" />
            </div>
            <div className="w-3/5">
                <h1 className="text-3xl font-bold">{foodname}</h1>
                <h1 className="font-bold text-red-400 pt-6 text-2xl">${price}</h1>
                <div className="divider w-4/5"></div> 
                <p className="text-gray-400 text-[16px] leading-relaxed w-4/5">{description}
                enim ut elit porta ullamcorper enim. Vestibulum Nai wekemdini 
                iaculis vitae nulla.nec bibendum enim ut elit porta ullamcor
                </p>
                <div className="py-4 flex gap-3 items-center">
                <h1 className="text-3xl font-bold">category:</h1>
                <h3 className="text-xl">{category}</h3>
                </div>
                <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Tag:</h1>
                <h4>Dinner, Breakfast, Bervarage,{category}, Menu</h4>
                </div>
                <div className="py-6 flex items-center gap-4" >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online ">
                            <div className="w-16 rounded-full">
                            <img src='' />
                            </div>
                        </label>
                        <div>
                            <h1 className="text-xl font-bold">Made By </h1>
                            <h1 className="">{username}</h1>
                        </div>      

                </div>
                <h1 className="pb-4 font-semibold text-xl">Country: <span className="text-xl font-normal">{country} </span> </h1>
                <div className="flex  gap-6 items-center py-2">
                   

                {/* button start */}
                <button className="btn bg-[#ec7625] 
                rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl
                px-8  text-white hover:text-[#ec7625] " 
                onClick={hanldeOrder}
                >Order Now </button>
                </div>

            </div>
            </div>

            <div >
                <h1 className="text-3xl font-bold pt-6 pb-2">Review</h1>
                <div className="divider -mt-2"></div> 

               <div className="flex gap-8">
               <div className="w-2/5">
                <h1 className="text-xl font-bold pb-3">Comments</h1>
                <div>
                <textarea placeholder="write you review... " className="textarea textarea-bordered textarea-lg w-full max-w-md" ></textarea>
                


                </div>
                </div>
                <div className="w-4/5">
                    dddddd
                </div>
               </div>


            </div>
            
         

            
            
        </div>
    );
};

export default SingleFood;