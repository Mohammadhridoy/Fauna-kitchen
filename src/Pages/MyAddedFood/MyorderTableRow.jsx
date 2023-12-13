import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyorderTableRow = ({myOrder}) => {
  const {loading} = useContext(AuthContext)

    const { _id, foodname, price, userNeedquantity, image,  date } = myOrder || { }

    const handleDelete = (id) =>{


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              fetch( `http://localhost:5000/purchase/${id}`,{
                method:"DELETE",
                
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                 
                  Swal.fire(
                    'Deleted!',
                    'Food Item has been deleted.',
                    'success'
                  )
                  loading

                }
              })
                
         
            }
          })

    }

    return (
      <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
                {
                    image?<img src={image} alt="Avatar Tailwind CSS Component" /> :<img src='https://i.ibb.co/HKm0Cqj/option.jpg' alt="Avatar Tailwind CSS Component" />
                }
            </div>
          </div>
          <div>
            <div className="font-bold">{foodname}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
      quantity:{userNeedquantity} 
        <br/>
        <span className="badge badge-ghost badge-sm ">{date}</span>
      </td>
      <td>${price}</td>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
    );
};

MyorderTableRow.propTypes ={
    myOrder:PropTypes.object
}

export default MyorderTableRow;