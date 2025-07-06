import React, { useState } from "react";

const PutUserInfo = ({ user, setUser, setStep }) => {
  const [formData, setFormData] = useState({
    email: user.email || "",
    phone: user.phone || "",
    birthday: user.birthday || "",
    pass: "",
  });

  const handleChange = (field) => async () => {
    try {
      const res = await fetch(`http://localhost:8080/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: formData[field] }),
      });

      if (res.ok) {
        const updatedUser = { ...user, [field]: formData[field] };
        setUser(updatedUser);
        alert(`${field} updated successfully.`);
      } else {
        alert("Update failed.");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-left">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Update Your Info
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="mb-1 text-sm text-gray-600">
            Current Email: {user.email || "Not set"}
          </p>
          <input
            type="email"
            placeholder="New email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleChange("email")}
            className="mt-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
          >
            Change Email
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="mb-1 text-sm text-gray-600">
            Current Phone: {user.phone || "Not set"}
          </p>
          <input
            type="text"
            placeholder="New phone number"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleChange("phone")}
            className="mt-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
          >
            Change Phone
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Birthday</h2>
          <input
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, birthday: e.target.value })
            }
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleChange("birthday")}
            className="mt-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
          >
            Change Birthday
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Password</h2>
          <input
            type="password"
            placeholder="New password"
            value={formData.pass}
            onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <button
            onClick={handleChange("pass")}
            className="mt-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded"
          >
            Change Password
          </button>
        </div>
        <button
          onClick={() => {
            setStep("user");
          }}
          className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-full w-full"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PutUserInfo;
