/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
    const {name, price, recipe, image} = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-5 top-5 px-2 py-1 rounded-md bg-slate-900 text-white">{price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-2 border-orange-700 bg-slate-100 text-orange-700 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
