import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const transactions = [
  { 
    id: 1,
    name: 'Santosh Nomula',
    email: 'santosh@gmail.com',
    bankName: 'State Bank of India',
    accountNumber: 'XXXXXXX789',
    ifscCode: 'SBIN0001234',
    upi: '8465923893@upi',
    amount: '₹5,000'
  },
  { 
    id: 2,
    name: 'Karthik Vemula',
    email: 'Karthik@gmail.com',
    bankName: 'HDFC Bank',
    accountNumber: 'XXXXXXX456',
    ifscCode: 'HDFC0005678',
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
                <th className="px-4 py-3 text-left text-purple-700">Bank Name</th>
                <th className="px-4 py-3 text-left text-purple-700">Account Number</th>
                <th className="px-4 py-3 text-left text-purple-700">IFSC Code</th>
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
                  <td className="px-4 py-3">{transaction.bankName}</td>
                  <td className="px-4 py-3">{transaction.accountNumber}</td>
                  <td className="px-4 py-3">{transaction.ifscCode}</td>
                  <td className="px-4 py-3">{transaction.upi}</td>
                  <td className="px-4 py-3">{transaction.amount}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 text-sm">
                        Confirm
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 text-sm">
                        Cancel
                      </button>
                    </div>
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