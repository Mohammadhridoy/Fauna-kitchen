import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {

    const purchaseInfo = useLoaderData()

    const {user} = useContext(AuthContext)

    const  { foodname,  price, quantity, useremail }= purchaseInfo || { }

    const handlePurchase = (e) =>{
        e.preventDefault()
        const form = e.target

        const userNeedquantity = form.userquantity.value;
      const  productQuantity = parseInt(quantity)
        const date = form.date.value;
        const userName = user?.displayName
        const userEmail = user?.email

        

        const purchasedate ={foodname, price, userNeedquantity,userName, userEmail, date    }
       

        if(quantity === 0){
            toast.warning("no available food!",{
                position:"top-right",
                autoClose:2000,
            })
            return
        }else if( productQuantity<userNeedquantity ){
            toast.warning("you can't buy food!",{
                position:"top-right",
                autoClose:2000,
            })
            return
        }else if(useremail === userEmail){
            toast.warning("you can't buy food. you are admin!",{
                position:"top-right",
                autoClose: 2000,
            })
            return
        }

        console.log(purchasedate)


        fetch('http://localhost:5000/purchase', {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(purchasedate)
          })
          .then(res=>res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: ' Food purchase successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
              form.reset()
            }
          })

    }

  
    return (
        <div className="px-4 lg:px-12 lg:py-10 min-h-screen ">
              <h1 className="text-2xl font-bold text-center">Purchase info </h1>
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
                        name="userquantity"
                        required
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
                        required
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
                    < ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Purchase;