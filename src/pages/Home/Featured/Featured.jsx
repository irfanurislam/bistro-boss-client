import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='check it Out'
            heading='featured Items'
            >
           
            </SectionTitle>

          <div className='bg-slate-900 bg-opacity-60 md:flex pb-20 pt-12 px-36 justify-center items-center'>
          <div>
                <img src={featureImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>August 20 2029</p>
                <p className='uppercase'> where can i get now</p>
                <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod modi harum eligendi aut vitae numquam iusto minus nihil, provident officiis hic nobis id dolorem, aperiam itaque nemo. Repellat, minima repellendus.</p>
                <button className='btn btn-outline border-0 border-b-4 text-white'>order Now</button>
            </div>
          </div>
        </div>
    );
};

export default Featured;