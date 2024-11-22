// Mock database
let users = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "User", status: "Inactive" },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ];
  
  // User-related functions
  export const fetchUsers = () => Promise.resolve(users);
  export const addUser = (user) => {
    users.push(user);
    return Promise.resolve(user);
  };
  export const deleteUser = (id) => {
    users = users.filter((u) => u.id !== id);
    return Promise.resolve(true);
  };
  
  // Role-related functions
  export const fetchRoles = () => Promise.resolve(roles);
  export const addRole = (role) => {
    roles.push(role);
    return Promise.resolve(role);
  };
  export const editRole = (id, updatedRole) => {
    roles = roles.map((r) => (r.id === id ? { ...r, ...updatedRole } : r));
    return Promise.resolve(updatedRole);
  };
  