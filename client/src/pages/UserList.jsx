import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const initialUsers = [
  {
    id: 1,
    name: 'Santosh Nomula',
    email: 'santosh@gmail.com',
    bankName: 'State Bank of India',
    accountNumber: 'XXXXXXX789',
    ifsc: 'SBIN0001234',
    address: 'Andra Pradesh, India',
    dob: '1990-01-01',
    password: 'hashed_password_123'
  },
  {
    id: 2,
    name: 'Karthik Vemula',
    email: 'karthik@gmail.com',
    bankName: 'HDFC Bank',
    accountNumber: 'XXXXXXX456',
    ifsc: 'HDFC0005678',
    address: 'Telangana, India',
    dob: '1985-05-15',
    password: 'hashed_password_456'
  }
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const hashPassword = () => '*'.repeat(8);

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedData(user);
  };

  const handleDelete = (userId) => {
    setConfirmDeleteId(userId);
  };

  const confirmDelete = () => {
    setUsers(users.filter(user => user.id !== confirmDeleteId));
    setConfirmDeleteId(null);
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const handleSave = () => {
    setUsers(users.map(user => user.id === editedData.id ? editedData : user));
    setEditingUser(null);
    setEditedData({});
  };

  const handleCancel = () => {
    setEditingUser(null);
    setEditedData({});
  };

  const handleChange = (e, field) => {
    setEditedData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-3xl font-bold text-purple-700 mb-8">
          User List
        </h1>

        {editingUser && (
          <div className="bg-purple-50 p-6 rounded-xl shadow mb-8">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Edit User Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['name', 'email', 'bankName', 'accountNumber', 'ifsc', 'address', 'dob'].map((field) => (
                <div key={field}>
                  <label className="block font-medium text-gray-700 capitalize">{field}</label>
                  <input
                    type={field === 'dob' ? 'date' : 'text'}
                    value={editedData[field] || ''}
                    onChange={(e) => handleChange(e, field)}
                    className="mt-1 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-3 text-left">Sr.No</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Bank</th>
                <th className="px-4 py-3 text-left">Account No.</th>
                <th className="px-4 py-3 text-left">IFSC</th>
                <th className="px-4 py-3 text-left">Address</th>
                <th className="px-4 py-3 text-left">DOB</th>
                <th className="px-4 py-3 text-left">Password</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.bankName}</td>
                  <td className="px-4 py-2">{user.accountNumber}</td>
                  <td className="px-4 py-2">{user.ifsc}</td>
                  <td className="px-4 py-2">{user.address}</td>
                  <td className="px-4 py-2">{user.dob}</td>
                  <td className="px-4 py-2">{hashPassword(user.password)}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {confirmDeleteId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
              <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this user?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
