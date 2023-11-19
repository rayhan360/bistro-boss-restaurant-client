import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import OrderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import {useParams} from "react-router-dom"

const Order = () => {
  const categories = ["Salad", "Pizza", "Soup", "Desert", "Drinks"]
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);
  const filterDesertData = menu.filter((item) => item.category === "dessert");
  const filterSoupData = menu.filter((item) => item.category === "soup");
  const filterSaladData = menu.filter((item) => item.category === "salad");
  const filterPizzaData = menu.filter((item) => item.category === "pizza");
  const filterDrinksData = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={OrderImg} title="Our Order Food"></Cover>

      {/* tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTabs items={filterSaladData}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={filterPizzaData}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={filterSoupData}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={filterDesertData}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={filterDrinksData}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
