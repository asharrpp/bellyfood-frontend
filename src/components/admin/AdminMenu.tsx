import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPage } from "../../store/userReducer";

function AdminMenu() {
  const page = useAppSelector((state) => state.users.page);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white mx-2 sticky top-20 z-40 shadow shadow-gray-500 flex overflow-x-scroll scrollbar-hide">
      {/* sticky top-[80px] */}
      {/* sticky top-[96px] */}
      {/* sticky top-[112px] */}
      <button
        className={`sticky ${
          page === "DASHBOARD" && "shadow-md text-white bg-green-400"
        } px-6 py-2 hover:bg-green-400 hover:text-white transform ease-in duration-300`}
        onClick={() => dispatch(setPage("DASHBOARD"))}
        // style={{ top: "5rem" }}
      >
        Dashboard
      </button>
      <button
        className={`sticky ${
          page === "CREATE_CUSTOMER" && "shadow-md text-white bg-green-400"
        } px-6 py-2 hover:bg-green-400 hover:text-white transform ease-in duration-300`}
        onClick={() => dispatch(setPage("CREATE_CUSTOMER"))}
        // style={{ top: "6rem" }}
      >
        Create Customer
      </button>
      <button
        className={`sticky ${
          page === "PENDING_PAYMENTS" && "shadow-md text-white bg-green-400"
        } px-6 py-2 hover:bg-green-400 hover:text-white transform ease-in duration-300`}
        onClick={() => dispatch(setPage("PENDING_PAYMENTS"))}
        // style={{ top: "6rem" }}
      >
        Pending Payments
      </button>
      {/* //COMPLETED_DELIVERIES */}
      <button
        className={`sticky ${
          page === "COMPLETED_DELIVERIES" && "shadow-md text-white bg-green-400"
        } px-6 py-2 hover:bg-green-400 hover:text-white transform ease-in duration-300`}
        onClick={() => dispatch(setPage("COMPLETED_DELIVERIES"))}
        // style={{ top: "7rem" }}
      >
        Completed Deliveries
      </button>
      <button
        className={`sticky ${
          page === "PENDING_APPROVAL" && "shadow-md text-white bg-green-400"
        } px-6 py-2 hover:bg-green-400 hover:text-white transform ease-in duration-300`}
        onClick={() => dispatch(setPage("PENDING_APPROVAL"))}
        // style={{ top: "7rem" }}
      >
        Pending Approval
      </button>
    </div>
  );
}

export default AdminMenu;
