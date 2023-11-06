

const Reserve = () => {
    return (
        <div className="px-4 lg:px-12 py-7 md:py-12 ">
            <div className="bg-[url('https://i.ibb.co/4MMnjZC/reservation-1.png')] bg-no-repeat w-full bg-cover rounded-lg  py-6 lg:p-14 ">
                <div>
                    <h4 className="text-white text-center" >Online Reserve</h4>
                    <h1 className="text-white text-center text-3xl font-bold pb-5 pt-3">For Online Reservation</h1>
                </div>
                <div className="flex gap-10 md:gap-20 py-6 px-6 justify-center items-center ">
                         <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                            placeholder="Name.." required name="name"
                        />
                         <input
                            type="tel"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                            placeholder="Phone.." required name="name"
                        />

                </div>
                {/* second section */}
                <div className="flex gap-10 md:gap-20 px-6 justify-center items-center">
                         <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                            placeholder="People.." required name="name"
                        />
                         <input
                            type="date"
                            className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                            placeholder="Check In.." required name="name"
                        />

                </div>
                {/* third section */}
                <div className="flex gap-10 md:gap-20 py-6 px-6 justify-center items-center ">
                         <select
                                name="time"
                                id="time"
                                className=" md:mt-1.5 w-full rounded-lg  text-gray-700 sm:text-sm p-4  border border-[#46D993] shadow-md"
                             >
                                <option value="">Please select time</option>
                                <option value="8:00 am">8:00 am</option>
                                <option value="9:00 am">9:00am</option>
                                <option value="10:00 am">10:00am</option>
                                <option value="11:00 am">11:00am</option>
                                <option value="12:00 am">12:00am</option>
                                <option value="1:00 pm">1:00 pm</option>
                                <option value="2:00 pm">2:00 pm</option>
                                <option value="8:00 pm">8:00 pm</option>
                                <option value="9:00pm">9:00pm</option>
                            </select>
                         <input
                            type="email "
                            className="w-full rounded-lg border-gray-200 p-4 mb-4  text-sm shadow-sm hover:shadow-md "
                            placeholder="Email.." required name="email"
                        />

                </div>

                <button
                        className="inline-block   shrink-0 rounded-md lg:w-1/3 ml-28 md:ml-[270px]   lg:ml-96 bg-red-400 px-12 py-3 
                        text-sm font-medium text-white transition hover:bg-transparent
                         hover:text-red-500 hover:border-none hover:bg-white hover:shadow-lg 
                         focus:outline-none focus:ring active:text-blue-500"
                        >
                        Reserve Now
                        </button>

                

            </div>
            
        </div>
    );
};

export default Reserve;