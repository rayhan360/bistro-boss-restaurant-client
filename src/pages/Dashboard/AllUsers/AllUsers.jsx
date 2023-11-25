import { BsFillPeopleFill, BsFillTrash3Fill } from "react-icons/bs";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data?.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const hanldeDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="How Many??"
        subHeading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="bg-[#fff] p-4">
        <div className="">
          <h2 className="text-2xl">Total Users: {users.length}</h2>
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
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <h1>{user.name}</h1>
                  </td>
                  <td>
                    <h1>{user.email}</h1>
                  </td>
                  <td>
                    {
                        user.role === "admin" ? "Admin" : <div>
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn-xs rounded-sm text-base bg-[#D1A054] text-white"
                        >
                          <BsFillPeopleFill />
                        </button>
                      </div>
                    }
                  </td>
                  <th>
                    <div className="">
                      <button
                        onClick={() => hanldeDeleteUser(user)}
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

export default AllUsers;
