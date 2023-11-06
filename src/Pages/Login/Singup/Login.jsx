import { Link, useLocation, useNavigate } from "react-router-dom";
import svg1 from '../../../assets/blob-haikei.svg'
import img1 from '../../../assets/singup.png'
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineGoogle  } from 'react-icons/ai';
import { DiGithubBadge  } from 'react-icons/di';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const location = useLocation()
    
    

    const {singInUser,  googelSingin, githublogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlerLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        singInUser(email,password)
        .then(result =>{
            console.log(result.user)
            

            navigate(location?.state ? location.state : "/")

          
        })
        .catch(error => {
            console.log(error.message)
            toast.error(`${error.message}`,{
                position:"bottom-right",
                autoClose:2000,
            })
        })

    }
    const handlegoogle = () =>{
        googelSingin()
      
      
    }

    const handlegithub = () =>{
        githublogin()

    }





    return (
        <div>
            <div className='bg-[#faf9f5]  min-h-screen relative' >
            <div className="px-4 md:px-12 ">

            <div className= ' flex-1 pt-2   '>
                {/* singup top section  */}
               <div className=' pl-28 pt-5 md:pl-72 md:pt-9 lg:pl-28 lg:pt-7'>
                <h1 className='font-bold text-xl lg:text-3xl
               w-40 lg:w-60 h-10 lg:h-14 text-center pt-1 lg:pt-2  bg-[#f7dcc8] rounded-full 
                '>FaunaKitchen</h1>
                <h1 className=' text-xl lg:text-3xl font-semibold pt-2 pl-12 lg:pl-14'>Sign In</h1>
                <p className='text-[18px] pt-3 pl-3 lg:pl-10 text-gray-400'>stay connected.</p>
               </div>

               <div className='pb-12 pl-2 md:pl-14 lg:pl-12 lg:pt-0'>
                   {/* singup form  */}
                   <form onSubmit={handlerLogin}
                      
                        className="   w-96 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
                        >

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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

                        <button
                            type="submit"
                            className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-black shadow-lg hover:bg-red-400"
                        >
                           Sign In
                        </button>

                       
                        
                        </form>
                        <div className="  w-96 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8" >
                        <div  className="">
                            <button onClick={handlegoogle} className="btn mb-3 btn-outline w-full hover:bg-[#ee626b]"> <AiOutlineGoogle></AiOutlineGoogle>Login with Google</button>
                            <button onClick={handlegithub} className="btn btn-outline w-full hover:bg-[#ee626b]">  <DiGithubBadge></DiGithubBadge>Login with Github</button>
                         </div>

                        <p className=" text-[16px] text-gray-400">
                            No account?
                            <Link className=" pl-1 text-xl font-bold text-red-400" to={"/singup"}> SING UP</Link>
                        </p>

                        </div>
                        <ToastContainer></ToastContainer>
                   
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
        < ToastContainer></ToastContainer>
        </div>
            
        </div>
    );
};

export default Login;