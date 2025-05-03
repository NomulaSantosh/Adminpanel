// Settings.jsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profileImage, setProfileImage] = useState(null);
  const [socialLinks, setSocialLinks] = useState({
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: ''
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialChange = (platform, value) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

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
    // Add your password update logic here
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
            Account Settings
          </h1>

          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-md mb-6 sm:mb-8">
            <button
              onClick={() => setActiveSection(activeSection === 'profile' ? null : 'profile')}
              className="w-full p-4 sm:p-6 flex justify-between items-center"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-purple-600">
                Profile Settings
              </h2>
              {activeSection === 'profile' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {activeSection === 'profile' && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple-100 overflow-hidden">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <span className="w-full h-full flex items-center justify-center text-purple-500 text-2xl">
                        👤
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-purple-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:bg-purple-50 file:text-purple-700
                        hover:file:bg-purple-100"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Media Section */}
          <div className="bg-white rounded-xl shadow-md mb-6 sm:mb-8">
            <button
              onClick={() => setActiveSection(activeSection === 'social' ? null : 'social')}
              className="w-full p-4 sm:p-6 flex justify-between items-center"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-purple-600">
                Social Media Links
              </h2>
              {activeSection === 'social' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {activeSection === 'social' && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                {Object.entries(socialLinks).map(([platform, value]) => (
                  <div key={platform}>
                    <label className="block text-purple-700 mb-2 text-sm sm:text-base">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </label>
                    <input
                      type="url"
                      value={value}
                      onChange={(e) => handleSocialChange(platform, e.target.value)}
                      className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                      placeholder={`https://${platform}.com/username`}
                    />
                  </div>
                ))}
                <button
                  onClick={() => alert('Social links updated!')}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition text-sm sm:text-base font-semibold"
                >
                  Save Social Links
                </button>
              </div>
            )}
          </div>

          {/* Password Section */}
          <div className="bg-white rounded-xl shadow-md">
            <button
              onClick={() => setActiveSection(activeSection === 'password' ? null : 'password')}
              className="w-full p-4 sm:p-6 flex justify-between items-center"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-purple-600">
                Change Password
              </h2>
              {activeSection === 'password' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {activeSection === 'password' && (
              <form onSubmit={handlePasswordSubmit} className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;