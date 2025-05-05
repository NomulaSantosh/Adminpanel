// src/pages/UserList.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const initialUsers = [
  { 
    id: 1,
    name: 'Santosh Nomula',
    email: 'santosh@gmail.com',
    address: 'Andra Pradesh, India',
    dob: '1990-01-01',
    password: 'hashed_password_123'
  },
  { 
    id: 2,
    name: 'Karthik Vemula',
    email: 'karthik@gmail.com',
    address: 'Telangana, India',
    dob: '1985-05-15',
    password: 'hashed_password_456'
  }
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hashPassword = (pass) => '*'.repeat(8);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 md:mb-8">
          User List
        </h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full">
            {/* Table header remains same */}
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-t border-purple-100">
                  {/* Table cells remain same */}
                  <td className="px-4 py-3 flex gap-2">
                    <button 
                      onClick={() => handleEdit(user)}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h2 className="text-xl font-bold text-purple-700 mb-4">Edit User</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSave({
                  ...editingUser,
                  name: e.target.name.value,
                  email: e.target.email.value,
                  address: e.target.address.value,
                  dob: e.target.dob.value
                });
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-purple-600 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={editingUser?.name}
                      className="w-full px-4 py-2 border border-purple-300 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={editingUser?.email}
                      className="w-full px-4 py-2 border border-purple-300 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-600 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      defaultValue={editingUser?.address}
                      className="w-full px-4 py-2 border border-purple-300 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-600 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      defaultValue={editingUser?.dob}
                      className="w-full px-4 py-2 border border-purple-300 rounded-xl"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;