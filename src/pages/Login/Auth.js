import React, { useState } from "react";
import "./App.css";

export default function Auth() {
  const [authMode, setAuthMode] = useState("signin"); 
  const [role, setRole] = useState("user");
  const [userID, setUserID] = useState(""); 
  const [password, setPassword] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "admin") {
      if (userID && password) {
        window.location.href = "/admin-home"; 
      } else {
        alert("Please enter both User ID and Password.");
      }
    } else {
      if (userID && password) {
        window.location.href = "/user-home"; 
      } else {
        alert("Please enter both User ID and Password.");
      }
    }
  };

  const handleCancel = () => {
    setUserID("");
    setPassword("");
    setRole("user"); 
    window.location.href = "/";
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{authMode === "signin" ? "Sign In" : "Sign Up"}</h3>

          <div className="form-group mt-3">
            <label>Role</label>
            <select className="form-control mt-1" onChange={handleRoleChange} value={role}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {role === "user" && (
            <>
              <div className="form-group mt-3">
                <label>User ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter User ID"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          )}

          {role === "admin" && (
            <>
              <div className="form-group mt-3">
                <label>User ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter User ID"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {authMode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          <div className="text-center mt-2">
            <span onClick={changeAuthMode}>
              {authMode === "signin" ? "Need an account? Sign Up" : "Already have an account? Sign In"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
