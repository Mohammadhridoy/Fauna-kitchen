import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Purchase = () => {

    const purchaseInfo = useLoaderData()

    const {user} = useContext(AuthContext)

    const  { foodname,  price, quantity }= purchaseInfo || { }

    const handlePurchase = () =>{

    }

  
    return (
        <div className="px-4 lg:px-12 lg:py-10 min-h-screen ">
            <form onSubmit={handlePurchase} className="mt-8 space-y-3 md:space-y-6 lg:w-2/5 mx-auto ">
                    <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                User Name
                            </label>

                            <input
                        type="text"
                        id="Name"
                        disabled
                        name="username"
                        defaultValue={user?.displayName}
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400 shadow-md"
                        />
                    </div>
                    <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 User Email
                            </label>

                            <input
                        type="email"
                        id="Name"
                        name="useremail"
                        defaultValue={user?.email}
                        disabled
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>
                     
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 Food Name
                            </label>

                            <input
                        type="text"
                        id="Name"
                        disabled
                        defaultValue={foodname}
                        name="foodname"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 price
                            </label>

                            <input
                        type="text"
                        id="Name"
                        disabled
                        defaultValue={price}
                        name="price"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>
                      

                         
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 product quantity

                            </label>
                            <input
                        type="text"
                        defaultValue={quantity}
                        id="Name"
                        disabled
                        name="category"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />

                        
                    </div>



                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                        >
                        you need quantity
                        </label>

                        <input
                        type="text"
                        id="Name"
                        name="quantity"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 " >
                        <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Buying Date
                        </label>

                        <input
                        type="date"
                        id="date"
                        name="date"
                        className="mt-1 lg:w-full rounded-md  p-2  border border-red-400  shadow-md bg-white text-sm text-gray-700 "
                        />
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    
                        <button
                        className="inline-block shrink-0 rounded-md lg:w-full  bg-red-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none hover:bg-white hover:shadow-lg focus:outline-none focus:ring active:text-blue-500"
                        >
                            purchase
                        </button>
                       
                    </div>
                    </form>
            
        </div>
    );
};

export default Purchase;