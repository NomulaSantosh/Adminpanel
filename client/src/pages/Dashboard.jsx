import Sidebar from '../components/Sidebar';
import { UserGroupIcon, CurrencyRupeeIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  // Example data
  const stats = [
    { 
      title: 'Total Users',
      value: '2,500',
      icon: <UserGroupIcon className="h-12 w-12 text-blue-600" />,
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'Total Money Added',
      value: '₹12,00,000',
      icon: <CurrencyRupeeIcon className="h-12 w-12 text-green-600" />,
      bgColor: 'bg-green-50'
    },
    { 
      title: 'Total Withdrawal Money',
      value: '₹3,00,000',
      icon: <BanknotesIcon className="h-12 w-12 text-red-600" />,
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 md:mb-8 text-center md:text-left">
          Welcome to Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} p-6 rounded-xl shadow-md flex flex-col items-center justify-center`}>
              <div className="flex flex-col items-center space-y-4">
                {/* Icon Container */}
                <div className={`p-3 rounded-full flex items-center justify-center ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center text-center">
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;