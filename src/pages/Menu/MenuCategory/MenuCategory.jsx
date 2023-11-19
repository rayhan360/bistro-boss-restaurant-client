/* eslint-disable react/prop-types */

import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import {Link} from "react-router-dom"

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-2 text-black">
            Order Your Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
