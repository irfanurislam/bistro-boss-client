
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopulerMenu = () => {

     const [menu] = useMenu()
     const populer= menu.filter(item => item.category === 'popular')




    // custom hook theke call korlam
   
    console.log(menu)
    return (
        <section className='mb-12'>
            <SectionTitle
            subHeading={'Populer Menu'}
            heading={'From our menu'}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                  
                  populer.map(item => <MenuItem
                  key={item._id}
                  item = {item}
                  >
                  
                  
                  </MenuItem>)

                }
            </div>
          <div className='flex justify-center mt-10'>
          <button className='text-center btn btn-outline border-0 border-b-4'>view full menu</button>
          </div>
            
        </section>
    );
};

export default PopulerMenu;