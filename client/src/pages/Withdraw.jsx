// src/pages/Withdraw.jsx
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const transactions = [
  { 
    id: 1,
    name: 'Santosh Nomula',
    email: 'santosh@gmail.com',
    upi: '8465923893@upi',
    amount: '₹5,000'
  },
  { 
    id: 2,
    name: 'Karthik Vemula',
    email: 'Karthik@gmail.com',
    upi: '9635284177@upi',
    amount: '₹3,200'
  }
];

const Withdraw = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 md:mb-8">
          Withdraw Requests
        </h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-4 py-3 text-left text-purple-700">Sr.No</th>
                <th className="px-4 py-3 text-left text-purple-700">Name</th>
                <th className="px-4 py-3 text-left text-purple-700">Contact</th>
                <th className="px-4 py-3 text-left text-purple-700">UPI ID</th>
                <th className="px-4 py-3 text-left text-purple-700">Amount</th>
                <th className="px-4 py-3 text-left text-purple-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.id} className="border-t border-purple-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{transaction.name}</td>
                  <td className="px-4 py-3">{transaction.email}</td>
                  <td className="px-4 py-3">{transaction.upi}</td>
                  <td className="px-4 py-3">{transaction.amount}</td>
                  <td className="px-4 py-3">
                    <button className="text-green-600 hover:text-green-800">
                      <CheckCircleIcon className="h-6 w-6" />
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

export default Withdraw;