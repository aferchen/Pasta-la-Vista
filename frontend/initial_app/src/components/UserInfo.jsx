import React from "react";

const UserInfo = ({ user, setStep, setUser }) => {
  const dateObj = new Date(user.birthday);
  const day = dateObj.getDate();
  const monthNumber = dateObj.getMonth();

  let monthName = "";

  switch (monthNumber) {
    case 0: monthName = "Jan"; break;
    case 1: monthName = "Feb"; break;
    case 2: monthName = "Mar"; break;
    case 3: monthName = "Apr"; break;
    case 4: monthName = "May"; break;
    case 5: monthName = "Jun"; break;
    case 6: monthName = "Jul"; break;
    case 7: monthName = "Aug"; break;
    case 8: monthName = "Sep"; break;
    case 9: monthName = "Oct"; break;
    case 10: monthName = "Nov"; break;
    case 11: monthName = "Dec"; break;
    default: monthName = ""; break;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone number:</strong> {user.phone}
        </p>
        <p>
          <strong>Birthday:</strong> {monthName} {day}
        </p>
        <p>
          <strong>Rewards Points:</strong> {user.points}
        </p>


        <div className="flex flex-col">
        <button //logout and go back to main view
          onClick={() => {
            setUser(null);
            setStep("browse");
          }}
          className="mt-4 bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-full"
        >
          Logout
        </button>

        <button
          onClick={async () => {
            const confirmDelete = window.confirm("Confirm Delete?");
            if (!confirmDelete) return;

            try {
              const res = await fetch(
                `http://localhost:8080/users/${user.id}`,
                {
                  method: "DELETE",
                }
              );

              if (res.ok) {
                alert("User deleted successfully");
                setUser(null);
                setStep("browse");
              } else {
                alert("Failed to delete user");
              }
            } catch (err) {
              console.error("Delete error:", err);
              alert("An error deleting the user");
            }
          }}
          className="mt-4 bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-full"
        >
          Delete User
        </button>
        <button
          onClick={() => { setStep("PutUserInfo"); }}
          className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-full"
        >
          Update Info
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
