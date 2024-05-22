import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladaImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectonTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      ></Cover>

      {/* main covrd */}

      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>

      {/* offerd menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* desert menu items */}
      <MenuCategory
      items={desserts}
      title="dessert"
      subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      img={desertImg}
      ></MenuCategory>

      {/* pizzas menu items */}
      <MenuCategory
      items={pizza}
      title="pizza"
      subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      img={pizzaImg}
      ></MenuCategory>


      {/* salads menu items */}
      <MenuCategory
      items={salad}
      title="salad"
      subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      img={saladaImg}
      ></MenuCategory>


      {/* SOUPS menu items */}
      <MenuCategory
      items={soup}
      title="soup"
      subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      img={soupImg}
      ></MenuCategory>


    </div>
  );
};

export default Menu;
