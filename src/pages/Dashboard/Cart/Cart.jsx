import { BsFillTrash3Fill } from "react-icons/bs";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, isLoading, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };
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
        <div
          className="overflow-x-auto mt-2"
          style={{ borderRadius: "15px 15px 0px 0px" }}
        >
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054B2] text-white">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
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
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn-xs rounded-sm text-base bg-red-600 text-white"
                      >
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
