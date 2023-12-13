import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyAddedFood = () => {

    const {user} = useContext(AuthContext)
    

    const [myadditems, setMyadditems] = useState([])


    const url = `http://localhost:5000/addfood?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyadditems(data))
    },[url])

    const addedInfos = myadditems.filter(myadditem => myadditem.useremail === user.email)



    const navigate = useNavigate()

    const handleUpdate = (id) =>{

        navigate(`/update/${id}`)
    }



    return (
        <div className="px-4 lg:px-12 lg:py-10 min-h-screen mx-auto">
            {
                addedInfos.map((addedinfo) =><div key={addedinfo._id} className="w-1/2 ml-80 pb-6 ">
                <article
                className="flex justify-between items-center gap-4 rounded-lg border border-gray-100 bg-[#faf9f5]  p-6"
                >
                    <div className="flex items-center gap-4 ">
                    <span className="rounded-full ">
                    <img className="w-20 h-20 rounded-md" src={addedinfo.image} alt="" />

                    </span>
                    <div>
                        <p className="text-2xl font-medium text-gray-900">{addedinfo.foodname}</p>
        
                        <p className="text-sm text-red-400">${addedinfo.price}</p>
                    </div>

                    </div>
               
    
              
                <button className="btn bg-[#ec7625] rounded-3xl px-5 text-white hover:text-[#ec7625]  " 
                onClick={()=> handleUpdate(addedinfo._id)}
                >update</button>
                </article>

               
    
                </div>)
            }

            
            
            
        </div>
    );
};

export default MyAddedFood;