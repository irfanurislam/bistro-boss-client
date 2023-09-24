import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

 const img_hosting_token= import.meta.env.VITE_Image_Upload_token
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit ,formState:{errors},reset} = useForm();
     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data =>{
     
        console.log(data)
        const formData = new FormData();
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
          method:'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
          console.log(imgResponse)
          if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name,price,category,recipe} = data;
           const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL}
            console.log(newItem)
            axiosSecure.post('/menu', newItem)
            .then(data =>{
              console.log('new menu item',data.data)
             
              if(data.data.insertedId){
                reset()
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: 'menu item added succesfuly',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })


          }
        })
    }
  console.log(errors)

   console.log(img_hosting_token)


  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="what is new"
        heading="Add A Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
          {...register("name", { required: true,maxLength: 120, })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full  my-4 ">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select defaultValue="pick by one" {...register("category", { required: true })} className="select select-bordered">
            <option disabled>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soupe</option>
            <option>Salad</option>
            <option>Drinks</option>
            <option>desi</option>
            <option>Dessert</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Type Number</span>
          </label>
          <input
          {...register("price", { required: true })}
            type="text"
            name="price"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            {...register("recipe",{required:true})}
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
           {...register("image",{required:true})}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-outline btn-sm" value="submit" type="submit"></input>
      </form>
    </div>
  );
};

export default AddItem;
