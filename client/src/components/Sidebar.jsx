import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-3 right-3 z-50 p-2 bg-purple-600 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 w-64 bg-purple-200 min-h-screen p-4 rounded-tr-3xl rounded-br-3xl shadow-lg flex flex-col transition-transform duration-300 z-40`}>
        
        <div className="mb-4">  
          <Link to="/dashboard">
            <button className="w-full px-3 py-2.5 bg-purple-300 rounded-lg text-purple-800 text-sm font-semibold hover:bg-purple-400 transition">
              Dashboard
            </button>
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <Link to="#" className="hover:scale-105 transition-transform">
            <button className="w-full px-3 py-2.5 bg-white rounded-lg text-purple-800 text-sm font-semibold hover:bg-purple-300 text-left">
              🧑‍💼 User List
            </button>
          </Link>

          <Link to="#" className="hover:scale-105 transition-transform">
            <button className="w-full px-3 py-2.5 bg-white rounded-lg text-purple-800 text-sm font-semibold hover:bg-purple-300 text-left">
              💸 Withdraw
            </button>
          </Link>

          <Link to="#" className="hover:scale-105 transition-transform">
            <button className="w-full px-3 py-2.5 bg-white rounded-lg text-purple-800 text-sm font-semibold hover:bg-purple-300 text-left">
              ➕ Add Money
            </button>
          </Link>

          <Link to="/settings" className="hover:scale-105 transition-transform">
            <button className="w-full px-3 py-2.5 bg-white rounded-lg text-purple-800 text-sm font-semibold hover:bg-purple-300 text-left">
              ⚙️ Settings
            </button>
          </Link>
        </div>

        {/* Logout Button */}
        <div className="mt-auto pt-3">
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2.5 bg-red-100 rounded-lg text-red-700 text-sm font-semibold hover:bg-red-200 text-left"
          >
            🚪 Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;