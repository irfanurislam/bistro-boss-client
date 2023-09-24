import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu "></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"dont Miss"}
        heading={"Today Offers"}
      ></SectionTitle>
      {/* offeres */}
      <MenuCategory items={offered}></MenuCategory>

      {/* desserts */}

      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>

      {/* pizzas */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* saladas */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
