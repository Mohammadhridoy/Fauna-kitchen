import { Link } from 'react-router-dom';
import svg1 from '../../../assets/blob-haikei.svg'
import img1 from '../../../assets/singup.png'
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import auth from '../../Firebase/Firebase';
import { updateProfile } from 'firebase/auth';

const Singup = () => {

    const {createUser} = useContext(AuthContext)

    
    const handleSingup = (e) =>{
        e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const photo = form.image.value
      const password = form.password.value
      const accept = form.accept.checked
      
      console.log(name, email, photo, password, accept)

     if(!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)){
        toast("Invalid Passsword !",{
            position:"bottom-right",
            autoClose:2000,
        })
        return
      }
      else if(!accept){
        toast("Please accept our Tearm and Condition",{
            position:"bottom-right",
            autoClose:2000,
        })
        return
      }  

      createUser(email, password)
      .then(result =>{
        console.log(result.user)
        toast.success("successfully account  created",{
            position:"bottom-right",
            autoClose:2000,
        })
        

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            
          }).catch((error) => {
           console.log(error.message)
          });
          
          form.reset()  

      })
      .catch(error =>{
        console.log(error.message)
        toast.error("!opps something wrong",{
            position:"bottom-right",
            autoClose:2000,
        })
      })

       }
  
    return ( 
        <div className='bg-[#faf9f5]  min-h-screen relative' >
            <div className="px-4 md:px-12 ">

            <div className= ' flex-1 pt-2   '>
                {/* singup top section  */}
               <div className=' pl-28 pt-5 md:pl-72 md:pt-9 lg:pl-28 lg:pt-7'>
                <h1 className='font-bold text-xl lg:text-3xl
               w-40 lg:w-60 h-10 lg:h-14 text-center pt-1 lg:pt-2  bg-[#f7dcc8] rounded-full 
                '>FaunaKitchen</h1>
                <h1 className=' text-xl lg:text-3xl font-semibold pt-2 pl-12 lg:pl-14'>Sign Up</h1>
                <p className='text-[18px] pt-3 lg:pl-6 text-gray-400'>Create your account.</p>
               </div>

               <div className='pb-12 pl-2 md:pl-14 lg:pl-12 lg:pt-0'>
                   {/* singup form  */}
                    <form  onSubmit={handleSingup}

                    className="    w-96 sm:mx-auto lg:mx-0 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8" 
                    >
                    

                    <div>
                        {/* Name section */}

                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                            placeholder="Enter your name.." required name="name"
                        />

                            {/* Image section */}
                            <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md"
                            placeholder="Profile image... " required name="image"
                        />

                        {/* email section */}
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                        <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm hover:shadow-md"
                            placeholder="Enter email" required name="email"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                            </svg>
                        </span>

                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only ">Password</label>

                        <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm hover:shadow-md"
                            placeholder="Enter password" name="password" required
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            </svg>
                        </span>
                        
                        </div>
                    </div>

                    {/* team and conditoin section */}
                    <input
                            type="checkbox"
                            name="accept"
                            className="h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm cursor-pointer" 
                        />
                        <span className="text-[16px] text-black ml-3">
                            Accept our terms and conditions.
                        </span>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-red-400   hover:shadow-lg hover:text-white"
                    >
                        SING UP
                    </button>
                    <div >
                    <p className="text-center text-[16px] text-black">
                    Already have an account?    
                    </p>
                    <Link className=" pl-36 lg:pl-32 pt-3 text-xl font-semibold text-red-400  " to={"/login"}>LOGIN</Link>
                    </div>
               
                    < ToastContainer></ToastContainer>

                    </form>
                   
               </div>
                         
              

            </div>

            {/* right side svg and imag  */}
            <div className='hidden lg:flex flex-1'>
                <div className='flex justify-end absolute top-0 right-0 '>
                    <img className=' lg:min-h-screen ' src={svg1} alt="" />
                   
                </div>
                <div className='absolute bottom-32 left-[800px]'>
                        <img className='w-[550px] ' src={img1} alt="" />
                    </div>
                

            </div>

            
        </div>
        </div>
     
    );
};

export default Singup;