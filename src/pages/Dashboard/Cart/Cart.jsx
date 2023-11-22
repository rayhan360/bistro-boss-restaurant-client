import { BsFillTrash3Fill } from "react-icons/bs";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart, isLoading] = useCart();
  console.log(cart);
  if (isLoading) {
    return (
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, items) => total + items.price, 0);
  return (
    <div>
      <SectionTitle
        heading="My Cart"
        subHeading="WANNA ADD MORE"
      ></SectionTitle>
      <div className="bg-[#fff] p-4">
        <div className="flex justify-evenly">
          <h2 className="text-2xl">Total Order: {cart.length}</h2>
          <h2 className="text-2xl">Total Price: ${totalPrice.toFixed(1)}</h2>
          <button className="p-2 rounded-md bg-[#D1A054B2] text-white cursor-pointer">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mt-2" style={{borderRadius: "15px 15px 0px 0px"}}>
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054B2] text-white">
              <tr>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{item.name}</h1>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <div className="">
                      <button className="btn-xs rounded-sm text-base bg-red-600 text-white">
                        <BsFillTrash3Fill />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
