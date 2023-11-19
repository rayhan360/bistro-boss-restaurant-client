import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-items bg-fixed text-white my-20">
      <div className="bg-black bg-opacity-60 pt-2">
        <SectionTitle
          subHeading="Featured Menu"
          heading="check it out"
        ></SectionTitle>

        <div className="md:flex justify-center text-white items-center pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get Some?</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem explicabo distinctio est nulla temporibus voluptatum
              sunt at ipsum cum, accusamus ad ut libero quo impedit minus natus
              animi mollitia magni nam nihil aut labore. Molestias fugit
              corrupti maxime libero, ad, est id saepe ratione facilis ipsam
              reprehenderit quos quam doloribus.
            </p>
            <button className="btn btn-outline border-0 border-b-2 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
