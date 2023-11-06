import { Link } from "react-router-dom";
import error1  from "../../assets/error1.png"
import error2 from "../../assets/error2.png"


const ErrorPage = () => {
    return (
        <div  className="grid min-h-screen px-4 bg-[#faf9f5]  pt-10 place-content-center">

            <div className=" flex  ">
                <img className="w-1/4 h-3/4 mx-auto" src={error1} alt="" />
                <img  className="w-1/4  h-3/4  mx-auto" src={error2} alt="" />
                <img className="w-1/4  h-3/4  mx-auto" src={error1}  alt="" />
            </div>



          

        <div className="mx-auto">
        <h1
            className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
            Page Not Found.
            </h1>
        </div>

       <div className="mx-auto">
     
       <Link
            href="/"
            className="inline-block w-44 text-center px-5 py-3 mt-6 text-sm font-medium text-white bg-[#ea6a12] rounded hover:bg-white hover:shadow-lg hover:text-red-300 focus:outline-none focus:ring"
            >
            Go Back Home
            </Link>
            
       </div>
        </div>
    );
};

export default ErrorPage;