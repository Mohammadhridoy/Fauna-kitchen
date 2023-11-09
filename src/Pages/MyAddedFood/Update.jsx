import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const getDateForUpdate = useLoaderData()
   

    const { _id, foodname, category, quantity, image, price, description, country }  = getDateForUpdate ||{ }

    const handleUpdate = (e) =>{
        e.preventDefault()
        const form = e.target

        const foodname = form.foodname.value
        const category = form.category.value
        const quantity = form.quantity.value

        const image = form.image.value
        const price = form.price.value
        const description = form.description.value
        const country  = form.origin.value

        const updateFoodInfo = { foodname, category, quantity, image, price, description, country }
       

        fetch(`http://localhost:5000/addfood/${_id}`, {
            method:"PUT",
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(updateFoodInfo)
          })
          .then(res=>res.json())
          .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: ' Updated successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
          })

    }

    return (
        <div className="px-4 lg:px-12 lg:py-10 min-h-screen">
             <h1
                    className="mt-6 text-2xl font-bold text-gray-900 lg:text-center sm:text-3xl md:text-4xl"
                    >
                    Update Food Item
                    </h1>

                    <div>
                    <form onSubmit={handleUpdate} className="mt-8 space-y-3 md:space-y-6  lg:pl-[80px] lg:w-3/5 mx-auto  ">
                     
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 Food Name
                            </label>

                            <input
                        type="text"
                        id="Name"
                        defaultValue={foodname}
                        name="foodname"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>
                      

                         
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 Food Category

                            </label>
                            <input
                        type="text"
                        id="Name"
                        defaultValue={category}
                        name="category"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />

                        
                    </div>
                      



                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                        >
                        quantity
                        </label>

                        <input
                        type="text"
                        id="Name"
                        defaultValue={quantity}
                        name="quantity"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 " >
                        <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Image Link
                        </label>

                        <input
                        type="text"
                        defaultValue={image}
                        id="image"
                        name="image"
                        className="mt-1 lg:w-full rounded-md  p-2  border border-red-400  shadow-md bg-white text-sm text-gray-700 "
                        />
                    </div>

                   

                    <div className="col-span-6">
                        <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
                        Price
                        </label>

                        <input
                        type="text"
                        id="Price"
                        defaultValue={price}
                        name="price"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Short description
                        </label>

                        <input
                        type="text"
                        id="description"
                        defaultValue={description}
                        name="description"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="origin"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Food Origin
                        </label>

                        <input
                        type="text"
                        id="origin"
                        defaultValue={country}
                        name="origin"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                 
                   

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    
                        <button
                        className="inline-block shrink-0 rounded-md lg:w-full  bg-red-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none hover:bg-white hover:shadow-lg focus:outline-none focus:ring active:text-blue-500"
                        >
                        Update Food Item
                        </button>
                       
                    </div>
                    </form>

                    </div>

                    
            
        </div>
    );
};

export default Update;