import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email.trim() === 'admin123@gmail.com' && password.trim() === 'admin123') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-5 sm:p-6 md:p-7 rounded-xl shadow-lg w-full max-w-[340px] sm:max-w-[380px]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-purple-700">
          Admin Login
        </h2>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-purple-600 mb-2 text-sm">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400 text-sm"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-purple-600 mb-2 text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-400 text-sm pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              style={{ top: '35px' }}
            >
              {showPassword ? (
                <FiEyeOff className="h-5 w-5 text-purple-400" />
              ) : (
                <FiEye className="h-5 w-5 text-purple-400" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;