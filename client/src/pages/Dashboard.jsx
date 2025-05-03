import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 md:mb-8">
          Welcome to Dashboard
        </h1>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
          <p className="text-purple-600">Your dashboard content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;