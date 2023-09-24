import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart,refetch] = useCart();
   
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);


  const handleDelete = item =>{
    // console.log(item)
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
          fetch(`http://localhost:5000/carts/${item._id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    `${item.name} been deleted.`,
                    'success'
                  )
            }
          })
        }
      })
  }





  return (
    <div className="w-full">
      <Helmet>
        <title>bistro boss | MyCart</title>
      </Helmet>
      <div className="uppercase font-bold flex justify-evenly h-20 items-center">
        <h3 className="text-2xl"> Total Items: {cart.length}</h3>
        <h3 className="text-2xl"> Total Items: $ {total}</h3>
        <div>
         <Link className="" to='/dashboard/payment'>
         <button className="btn btn-warning btn-sm">Pay</button>
         </Link>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Food</th>
              <th>Item Name</th>
              <th>price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            cart.map((row,index) => <>
             <tr key={row._id}>
              <td>
               {index + 1}
              </td>
              <td>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={row.image}
                        alt="Food Image"
                      />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
              {row.name}
                
              </td>
              <td className="text-end">${row.price}</td>
              <td>
                <button onClick={() => handleDelete(row)} className="btn btn-ghost text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr>
           
            </> )
           }
           
          
          </tbody>
       
          
        </table>
      </div>
    </div>
  );
};

export default MyCart;
