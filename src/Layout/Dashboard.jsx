import React from "react";
import { FaBook, FaCalendarAlt, FaCommentDollar, FaHome, FaLayerGroup, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()
    // TODO :  loading data server to have dyanmic based on data
     const isAdmin = true;
    // const [isAdmin] = useAdmin();
    // console.log(isAdmin)
   

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
       <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  bg-orange-400 ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">

          {
            isAdmin ? <>
             <li>
          <NavLink to='/dashboard/payment'><FaWallet></FaWallet> Admin Home</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add Items</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/manageItems'><FaHome></FaHome>Manage items</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/home'><FaBook></FaBook>Manage Bookings</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All users</NavLink>
          </li>
          
            </> :

            <>
              <li>
          <NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment Histroy</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> reservation</NavLink>
          </li>
        <li>
          <NavLink to='/dashboard/home'><FaHome></FaHome>userHome</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> Mycart
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
            
          </li>
            
            </>
          }


       
          <div className="divider"></div>
        
        <li>
          <NavLink to='/' ><FaHome></FaHome>Home</NavLink>
          </li>
          <li >
            <NavLink to='/menu'><FaLayerGroup></FaLayerGroup> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'><FaCommentDollar></FaCommentDollar> Order Food</NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
