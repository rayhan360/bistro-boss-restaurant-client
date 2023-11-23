import {
  BsBook,
  BsBookmarkStarFill,
  BsCalendar2CheckFill,
  BsCartCheckFill,
  BsDashCircleDotted,
  BsFillCartPlusFill,
  BsHouseExclamationFill,
  BsListCheck,
  BsMailbox,
  BsPersonAdd,
  BsShop,
} from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // TODO: get isAdmin value in the database
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <BsHouseExclamationFill></BsHouseExclamationFill> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <BsFillCartPlusFill /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <BsListCheck /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  {" "}
                  <BsBook></BsBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  {" "}
                  <BsPersonAdd></BsPersonAdd> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <BsHouseExclamationFill></BsHouseExclamationFill> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <BsCalendar2CheckFill></BsCalendar2CheckFill> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <BsCartCheckFill /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  {" "}
                  <BsBookmarkStarFill /> My Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <BsListCheck /> My Bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <BsHouseExclamationFill></BsHouseExclamationFill>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad">
              <BsDashCircleDotted></BsDashCircleDotted> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <BsShop></BsShop> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <BsMailbox></BsMailbox> contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
