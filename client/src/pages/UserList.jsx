// src/pages/UserList.jsx
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const users = [
  { 
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, City',
    dob: '1990-01-01',
    password: 'hashed_password_123'
  },
  { 
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: '456 Oak Ave, Town',
    dob: '1985-05-15',
    password: 'hashed_password_456'
  }
];

const UserList = () => {
  const hashPassword = (pass) => '*'.repeat(8); // Simple hash display

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
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.address}</td>
                  <td className="px-4 py-3">{user.dob}</td>
                  <td className="px-4 py-3">{hashPassword(user.password)}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button className="text-purple-600 hover:text-purple-800">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <TrashIcon className="h-5 w-5" />
                    </button>
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