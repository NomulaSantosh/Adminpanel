import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const Password = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setPasswordError('New passwords do not match');
      return;
    }
    if (passwords.new.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    setPasswordError('');
    alert('Password updated successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white mt-12 md:mt-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-6 sm:mb-8">
            Change Password
          </h1>

          <form onSubmit={handlePasswordSubmit} className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4">
            {passwordError && (
              <div className="text-red-600 text-sm mb-2">{passwordError}</div>
            )}
            
            {['current', 'new', 'confirm'].map((type) => (
              <div key={type}>
                <label className="block text-purple-700 mb-2 text-sm sm:text-base">
                  {type.charAt(0).toUpperCase() + type.slice(1)} Password
                </label>
                <input
                  type="password"
                  name={type}
                  value={passwords[type]}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition text-sm sm:text-base font-semibold"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;