import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, deleteUser } from "../api/mockApi";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", status: "Active" });

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddUser = () => {
    addUser({ id: Date.now(), ...form }).then((newUser) => {
      setUsers([...users, newUser]);
      setForm({ name: "", role: "", status: "Active" });
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((u) => u.id !== id)));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          className="border px-2 py-1 mr-2"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border px-2 py-1 mr-2"
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <select
          className="border px-2 py-1 mr-2"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add User
        </button>
      </div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
