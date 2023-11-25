import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu, loading] = useMenu()
    if (loading) {
        return (
          <>
            <h1>Loading.....</h1>
          </>
        );
      }
    const filterDesertData = menu.filter(item => item.category === "dessert")
    const filterSoupData = menu.filter(item => item.category === "soup")
    const filterSaladData = menu.filter(item => item.category === "salad")
    const filterPizzaData = menu.filter(item => item.category === "pizza")
    const filterOfferedData = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle
            heading="Don't Miss"
            subHeading="Today's Offer"
            ></SectionTitle>
            <MenuCategory items={filterOfferedData}></MenuCategory>
            <MenuCategory items={filterDesertData} title="Dessert" coverImg={desertImg}></MenuCategory>
            <MenuCategory items={filterSoupData} title="Soup" coverImg={soupImg}></MenuCategory>
            <MenuCategory items={filterSaladData} title="Salad" coverImg={saladImg}></MenuCategory>
            <MenuCategory items={filterPizzaData} title="Pizza" coverImg={pizzaImg}></MenuCategory>

        </div>
    );
};

export default Menu;