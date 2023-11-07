import offer1 from '../../assets/offer 1.png'
import offer2 from '../../assets/offer 2.png'

const Offer = () => {
    return (
        <div>
            <h4 className=' text-center py-3 text-xl text-red-500'>Best Offer</h4>
            <h1 className='font-bold text-3xl text-center '>Choose Your Best Offer</h1>
        <div className="px-4 lg:px-12 py-6 md:py-10 md:flex justify-center items-center md:gap-10 lg:gap-16">
            
            <div className="border p-6 lg:p-10 md:w-1/2 flex md:flex-col-reverse lg:flex  lg:flex-row  rounded-md mb-6  md:mb-0">

                
                <div className="w-1/4/4">
                    <h1 className=" text-[14px] md:text-2xl font-semibold  md:pt-5 lg:pt-0 ">Buy One Get One Free</h1>
                    <p className="py-6">If you are going to use a passage of Lorem Ipsum need.</p>
                    <button className="btn bg-[#ec7625]  rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl px-8 text-white hover:text-[#ec7625]  "
                >Check Menu</button>
                <ol className='py-4 space-y-2'  >
                    <li className='font-semibold'>Prawn with Noodls.</li>
                    <li className='font-semibold'>Special Drinks.</li>
                </ol>
                </div>
                <div className="w-3/4 relative">
                    <img src={offer1} alt="" />
                    <h1 className='font-bold bg-[#f5f3f3] hidden md:hidden
                     p-5 lg:inline-block text-red-500 rounded-full border-dotted border-2
                     absolute bottom-24 right-52
                     border-red-500 text-xl'>$55</h1>
                </div>
            </div>
            {/* right side */}
            <div className="border p-6 lg:p-10 md:w-1/2  rounded-md flex md:flex-col-reverse lg:flex-row lg:flex">

                
                <div className="w-1/4/4">
                    <h1 className="text-[14px] md:text-2xl font-semibold md:pt-5 lg:pt-0 ">Buy One Get One Free</h1>
                    <p className="py-6">If you are going to use a passage of Lorem Ipsum need.</p>
                    <button className="btn bg-[#ec7625]  rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl px-8 text-white hover:text-[#ec7625]  "
                >Check Menu</button>
                <ol className='py-4 space-y-2'  >
                    <li className='font-semibold'>Fried Chicken.</li>
                    <li className='font-semibold'>Watermelon Juice.</li>
                </ol>
                </div>
                <div className="w-3/4 relative">
                    <img src={offer2} alt="" />
                    <h1 className='font-bold bg-[#f5f3f3] hidden md:hidden
                     p-5 lg:inline-block text-red-500 rounded-full border-dotted border-2
                     absolute bottom-24 right-52
                     border-red-500 text-xl'>$55</h1>
                </div>
            </div>
            


            
        </div>
        </div>
    );
};

export default Offer;