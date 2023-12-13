import PropTypes from 'prop-types';


const TopFoods = ({topfoods}) => {
  
    const {   foodname, category, quantity, image, price } = topfoods ||{ }
    return (
        <div>
            <div className=' flex w-72 lg:w-96 '>
            <a href="#" className="group relative block overflow-hidden">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>
            <div className='relative'>
            <img
                src={image}
                alt=""
                className="h-64 w-72 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
              <span
                className="whitespace-nowrap bg-red-400 px-4 py-2 
                rounded-full z-10
                 text-[16px] text-white font-medium absolute -bottom-5 right-24"
                >
                ${ price}
                </span>
                
            </div>
        

            <div className="relative border border-gray-100 bg-white p-6 z-0">
              

                <h3 className="mt-4 text-lg font-medium text-gray-900">{foodname}</h3>
                <div className='flex justify-between'>
                <p className="mt-1.5 text-sm text-gray-700">{category}</p>
                <p className="mt-1.5 text-sm text-gray-700"> quantity:{quantity}</p>
                </div>
             

            </div>
            </a>

            
        </div>
            
        </div>
    );
};

TopFoods.propTypes ={
    topfoods:PropTypes.object
}

export default TopFoods;