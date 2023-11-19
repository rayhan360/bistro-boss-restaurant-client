
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu] = useMenu()
  const filterPopularData = menu.filter(item => item.category === "popular")

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data.filter((item) => item.category === "popular"));
  //       console.log(data.filter((item) => item.category === "popular"));
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menus"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {filterPopularData.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button className="btn btn-outline border-0 border-b-2 shadow-lg">
          view full
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
