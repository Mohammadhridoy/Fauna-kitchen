import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyorderTableRow from "./MyorderTableRow";


const MyOrder = () => {
    const [myOrders, setMyOrders] = useState()

    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/purchases?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[url])
    

    return (
        <div className="px-4 lg:px-12 min-h-screen">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Date</th>
        <th>price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            myOrders?.map(myOrder => <MyorderTableRow key={myOrder._id} myOrder={myOrder}></MyorderTableRow>)
        }
     
    
    
      
    </tbody>
 
    
  </table>
</div>
            
        </div>
    );
};

export default MyOrder;