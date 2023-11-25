import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <SectionTitle
        heading="At a Glance!"
        subHeading="PAYMENT HISTORY"
      ></SectionTitle>

      <div className="bg-[#fff] p-4">
        <div className="flex justify-evenly">
          <h2 className="text-2xl">Total Order: {payments.length}</h2>
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
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <h1>{item.email}</h1>
                    </div>
                  </td>
                  <td>
                    <h1>{item.transactionId}</h1>
                  </td>
                  <td>${item.price}</td>
                  <td>{item.date.slice(0,10)}</td>
                  <td><button className="btn btn-sm bg-[#D1A054B2] text-white normal-case">{item.status}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
