import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

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

  const hashPassword = (pass) => '*'.repeat(8);

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedData(user);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSave = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, ...editedData } : user));
    setEditingUser(null);
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
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 md:mb-8">
          User List
        </h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-4 py-3 text-left text-purple-700">Sr.No</th>
                <th className="px-4 py-3 text-left text-purple-700">Name</th>
                <th className="px-4 py-3 text-left text-purple-700">Contact</th>
                <th className="px-4 py-3 text-left text-purple-700">Bank Name</th>
                <th className="px-4 py-3 text-left text-purple-700">Account Number</th>
                <th className="px-4 py-3 text-left text-purple-700">IFSC Code</th>
                <th className="px-4 py-3 text-left text-purple-700">Address</th>
                <th className="px-4 py-3 text-left text-purple-700">Date of Birth</th>
                <th className="px-4 py-3 text-left text-purple-700">Password</th>
                <th className="px-4 py-3 text-left text-purple-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-t border-purple-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  
                  {/* Editable Fields */}
                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.name || ''}
                        onChange={(e) => handleChange(e, 'name')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.name}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.email || ''}
                        onChange={(e) => handleChange(e, 'email')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.email}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.bankName || ''}
                        onChange={(e) => handleChange(e, 'bankName')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.bankName}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.accountNumber || ''}
                        onChange={(e) => handleChange(e, 'accountNumber')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.accountNumber}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.ifsc || ''}
                        onChange={(e) => handleChange(e, 'ifsc')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.ifsc}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        value={editedData.address || ''}
                        onChange={(e) => handleChange(e, 'address')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.address}
                  </td>

                  <td className="px-4 py-3">
                    {editingUser === user.id ? (
                      <input
                        type="date"
                        value={editedData.dob || ''}
                        onChange={(e) => handleChange(e, 'dob')}
                        className="w-full px-2 py-1 border rounded"
                      />
                    ) : user.dob}
                  </td>

                  <td className="px-4 py-3">{hashPassword(user.password)}</td>

                  <td className="px-4 py-3 flex gap-2">
                    {editingUser === user.id ? (
                      <>
                        <button
                          onClick={() => handleSave(user.id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <CheckIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-800"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;