import { useContext } from 'react';
import  logo  from '../../assets/fauna (3)_prev_ui.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const AddFood = () => {

    const {user} = useContext(AuthContext)

    const handleAdd =  e =>{
        e.preventDefault()
        const form = e.target
        
        const username = form.username.value
        const useremail = form.useremail.value
        const foodname = form.foodname.value
        const category = form.category.value
        const quantity = form.quantity.value

        const image = form.image.value
        const price = form.price.value
        const description = form.description.value
        const country  = form.origin.value
        

        const foodItem = { username,useremail, foodname, category, quantity, image, price, description, country, count:0 }
        console.log(foodItem)

        fetch('https://carguru-server-site.vercel.app/products', {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(foodItem)
          })
          .then(res=>res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: ' product Added successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
              form.reset()
            }
          })
    }


  


    return (
        <div className=" px-4 md:px-12  bg-[#faf9f5] min-h-screen">

            <section className=" lg:w-[100%]">
            <div className=" lg:min-h-screen  ">

                {/* left form section  */}
                <main
                // className=" flex items-center justify-center px-4 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                className=" flex items-center  px-4 py-8 sm:px-12 lg:w-4/5 lg:mx-auto lg:px-16 lg:py-10 xl:col-span-6"
                >
                <div className="max-w-xl lg:max-w-3xl lg:w-4/5 ml-[90px] lg:mx-auto">
                    <a className=" text-blue-600 flex items-center lg:justify-center" href="/">
                    <span className="sr-only">Home</span>
                    <img className="w-8 md:w-10 " src={logo} alt="" />
                    <a className=" cursor-pointer  normal-case  md:text-xl text-gray-400 bg-blur-sm md:text-red-400 font-bold  ml-1 ">Fauna<span className="md:text-gray-400 text-red-400 ">Kitchen</span></a>
                   
                    </a>

                    <h1
                    className="mt-6 text-2xl font-bold text-gray-900 lg:text-center sm:text-3xl md:text-4xl"
                    >
                    Add A food item
                    </h1>

                    

                    <form onSubmit={handleAdd} className="mt-8 space-y-3 md:space-y-6 lg:w-4/5 lg:pl-[80px] ">
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
                        name="category"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />

                        
                    </div>
                      {/* type option section end */}



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
                        name="description"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="Rating"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Food Origin
                        </label>

                        <input
                        type="text"
                        id="Rating"
                        name="origin"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-red-400  shadow-md"
                        />
                    </div>

                 
                   

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    
                        <button
                        className="inline-block shrink-0 rounded-md lg:w-full  bg-red-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none hover:bg-white hover:shadow-lg focus:outline-none focus:ring active:text-blue-500"
                        >
                        Add Item
                        </button>
                       
                    </div>
                    </form>
                </div>
                </main>
            </div>
            </section>
     
            
        </div>
    );
};

export default AddFood;