import React, { useState } from "react";

const User = ({ user, setUser }) => {

    const [isSigningUp, setIsSigningUp] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    
            {isSigningUp ? (
              // SIGN UP FORM
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const pass = e.target.pass.value;
                    const birthday = e.target.birthday.value;
                    const phone = e.target.phone.value;
                  
                    const newUser = {
                      name,
                      email,
                      password: pass,
                      birthday,
                      points: 0,
                      phone,
                    };
                  
                    try {
                      const res = await fetch("http://localhost:8080/users", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newUser),
                      });
                  
                      if (!res.ok) {
                        const error = await res.json();
                        alert("Error creating account: " + error.error);
                        return;
                      }
                  
                      setUser(newUser);
                      setIsSigningUp(false);
                    } catch (err) {
                      console.error("Signup error:", err);
                      alert("Signup failed. Is the server running?");
                    }
                  }}
                  className="space-y-4"
                >
                  <input name="name" placeholder="Name" className="p-2 border rounded w-full" required />
                  <input name="email" placeholder="Email" className="p-2 border rounded w-full" required />
                  <input name="pass" placeholder="Password" className="p-2 border rounded w-full" required />
                  <input name="phone" placeholder="Phone number" className="p-2 border rounded w-full" required />
                  <input name="birthday" type="date" className="p-2 border rounded w-full" required />
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
                    Create Account
                  </button>
                </form>
                <button onClick={() => setIsSigningUp(false)} className="text-blue-500 mt-4 underline">
                  Sign in
                </button>
              </div>
            ) : (
              // SIGN IN FORM
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const username = e.target.username.value;
                    const pass = e.target.pass.value;
                  
                    try {
                      const res = await fetch("http://localhost:8080/users");
                      const users = await res.json();
                  
                      const foundUser = users.find(
                        (u) => u.name === username && u.password === pass
                      );
                  
                      if (foundUser) {
                        setUser(foundUser);
                      } else {
                        alert("Invalid credentials");
                      }
                    } catch (err) {
                      console.error("Login error:", err);
                      alert("Login failed.");
                    }
                  }}
                  className="space-y-4"
                >
                  <input name="username" placeholder="Username" className="p-2 border rounded w-full" required />
                  <input name="pass" placeholder="Password" className="p-2 border rounded w-full" required />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Sign In
                  </button>
                </form>
                <button onClick={() => setIsSigningUp(true)} className="text-blue-500 mt-4 underline">
                  Sign up
                </button>
              </div>
            )}
    
          </div>
        </div>
      );
    };
    
    export default User;