import { Link, NavLink } from "react-router-dom";
import  logo  from '../../assets/fauna (3)_prev_ui.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext)

    const handlelogOut =() =>{
        logOut()
    }

    return (
        <div>
             <div className=" bg-[#f5f3f3]  mx-auto z-10  lg:py-2 md:sticky top-0  ">

                <div className="navbar px-4 lg:px-12 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        {/* Nav icon link  */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* small device dropdown manu  */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                    <li className="px-3 font-semibold text-3xl text-black dark:bg-white"> <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white" : ""}>
                                    Home
                        </NavLink></li>
                        
                        <div>
                                    <li  className="px-3 font-semibold text-[16px]  text-black dark:bg-white">
                                    <NavLink
                                            to="/allfood"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white" : ""}>
                                               All Food 
                                        </NavLink>
                                    </li>
                
                                    <li  className="px-3 font-semibold text-[16px] text-black dark:bg-white">

                                    <NavLink
                                            to="/blog"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white" : ""}>
                                                
                                                Blog
                                        </NavLink>
                                    </li>   
                                </div>
                        


                    </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-8 md:w-10" src={logo} alt="" />
                    <a className=" cursor-pointer  normal-case  md:text-xl text-gray-400 bg-blur-sm md:text-red-400 font-bold  ml-1 ">Fauna<span className="md:text-gray-400 text-red-400 ">Kitchen</span></a>

                    </div>
                
                </div>
                    

                {/* md and lg device manu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">

                        <li className="px-3 font-semibold text-[16px] text-black"><NavLink
                            to="/" 
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white " : "" } >
                                    Home
                        </NavLink></li>
                        
                            <div className="flex">
                                    <li  className="px-3 font-semibold text-[16px] text-black dark:text-white">
                                    <NavLink
                                            to="/allfood"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white" : ""}>
                                               All Food 
                                        </NavLink>
                                    </li>
                
                                    <li  className="px-3 font-semibold text-[16px] text-black dark:text-white">
                                    <NavLink
                                            to="/blog"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "bg-[#f16a1b] text-white" : ""}>
                                                Blog
                                        </NavLink>
                                    </li>   
                                </div>
                        

                    </ul>
                </div>

                {/* md and lg device button */}
                <div className="navbar-end">
                {  
                    user ?   <div className="flex">
                        <div className="dropdown dropdown-end pr-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                            <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online  ml-[72px] m-3">
                            <div className="w-16 mx-auto rounded-full">
                            <img src={user.photoURL} />
                            </div>
                        </label>
                        <li className="text-center pb-2">{user.displayName}</li>
                         
                        <li> <Link to={'/'}  >My added food</Link></li>
                         <li>  <Link to={'/'}> Add a food</Link> </li>
                         <li>  <Link to={'/'}> My ordered food </Link> </li>
                           
                           
                         
                        </ul>
                        </div>
                        <button onClick={handlelogOut} className="btn px-2 lg:px-4 bg-[#ee626b] border-none text-white hover:bg-[#46d993] shadow-md ">Sign Out</button>
                </div>
                : <div className="">
                    <Link to={"/login"} >
                    <button className="btn px-5 md:px-5 bg-[#ee626b] border-none text-white hover:bg-[#46D993] md:shadow-md text-xs lg:text-[16px] ">Sign In</button>
                    </Link>
                </div>  }


                    
                    
                
                
                

                    
                </div>
            </div>


</div>
            
        </div>
    );
};

export default Navbar;