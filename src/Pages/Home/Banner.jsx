import herobg from '../../assets/heroBg.png'
import banner1 from "../../assets/banner1.png"
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    const handleMenus = () =>{
        navigate('/allfood')
    }

    return (
        <div className="bg-[#f5f3f3] px-4 lg:px-12 lg:pt-4 ">
            <div className="hero ">
            <div className="hero-content flex-col-reverse md:flex-row-reverse md:gap-60 lg:gap-[590px] relative ">
                <div className='md:-mr-20 lg:-mr-28'>
                <img src={herobg} className=" max-w-sm lg:max-w-md rounded-lg hidden md:flex lg:flex  md:h-[450px] lg:h-[550px] " />
                <div className=' md:absolute md:top-9 lg:top-16 md:-right-28 lg:right-0 flex items-center justify-center md:gap-11 gap-16 lg:gap-16 md:pl-40  lg:pl-[600px] py-20 md:py-4 flex-wrap flex-row '>
                    <div className='min-w-[190px] p-2  cardOverlay  backdrop-blur-md rounded-3xl  drop-shadow-2xl '>
                        <img className='w-40 -mt-20'  src={banner1} alt="" />
                        <p className='font-semibold text-[#515151] text-center'>icecream </p>
                        <p className='font-serif text-[#9ca0ab] text-center'>chocolate & vanilla</p>
                        <p className='text-[#515151] text-center'> <span className='text-red-500'>$ </span>12.2</p>
                    </div>
                    {/* second  */}
                    <div className=' min-w-[190px] p-2  cardOverlay  backdrop-blur-md rounded-3xl  drop-shadow-2xl'>
                        <img className='w-40 -mt-12'  src={banner2} alt="" />
                        <p className='font-semibold text-[#515151] text-center'>strawberries</p>
                        <p className='font-serif text-[#9ca0ab] text-center py-2'>Fresh strawberries</p>
                        <p className='text-[#515151] text-center'> <span className='text-red-500'>$ </span>12.2</p>
                    </div>
                    {/* third */}
                    <div className='min-w-[190px] p-2  cardOverlay  backdrop-blur-md rounded-3xl  drop-shadow-2xl'>
                        <img className='w-40 -mt-16 ml-2'  src={banner3} alt="" />
                        <p className='font-semibold text-[#515151] text-center'>Chicken kebab  </p>
                        <p className='font-serif text-[#9ca0ab] text-center py-2'>Mixed kebab potato</p>
                        <p className='text-[#515151] text-center'> <span className='text-red-500'>$ </span>12.2</p>
                    </div>
                    {/* forth */}
                    <div className='min-w-[190px] p-2  cardOverlay  backdrop-blur-md rounded-3xl   drop-shadow-2xl'>
                        <img className='w-40 -mt-16 ml-2'  src={banner4} alt="" />
                        <p className='font-semibold text-[#515151] text-center pt-2'>Fish kebab </p>
                        <p className='font-serif text-[#9ca0ab] text-center py-1'>Mixed Fish Kabab</p>
                        <p className='text-[#515151] text-center'> <span className='text-red-500'>$ </span>12.2</p>
                    </div>
                </div>
                </div>
                
                {/* banner - left */}
                <div className='md:-ml-14 lg:-ml-28'>
                    <h3 className='pb-3 text-[#ec7625] text-center md:text-left ' > Deal of the weekend</h3>
                <h1 className=" text-3xl md:text-2xl lg:text-5xl font-bold text-center md:text-left">The Fastest <br/> Delivery in <span className='text-red-400 md:leading-relaxed	'> Your <br/> City</span>  </h1>
                <p className="py-6 text-center md:text-left flex md:hidden lg:flex gap-2 ">Get  <span className='text-[#ec7625]'> FREE delivery </span> on every  weekend. </p>
                <button className="btn bg-[#ec7625] rounded-3xl px-8 text-white hover:text-[#ec7625] ml-16 md:ml-0 " 
                onClick={handleMenus}
                >Check Menu</button>
                </div>
            </div>
            </div>


            
        </div>
    );
};

export default Banner;