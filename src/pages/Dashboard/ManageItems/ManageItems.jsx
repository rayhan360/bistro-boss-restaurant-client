import { BsBoxArrowInDownLeft, BsFillTrash3Fill } from "react-icons/bs";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  if (loading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="---Hurry Up!---"
        subHeading="MANAGE ALL ITEMS"
      ></SectionTitle>

      <div className="bg-[#fff] p-4">
        <div className="">
          <h2 className="text-2xl">Total items: {menu.length}</h2>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="btn-sm rounded-sm text-base bg-[#D1A054] text-white">
                          <BsBoxArrowInDownLeft />
                        </button>
                      </Link>
                    </div>
                  </th>
                  <th>
                    <div className="">
                      <button
                        onClick={() => handleDeleteItem(item)}
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

export default ManageItems;
