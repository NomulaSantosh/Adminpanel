import { useState } from 'react'; 
import Sidebar from '../components/Sidebar';

const Socialmedia = () => { 
  const [socialLinks, setSocialLinks] = useState({
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: ''
  });

  const handleSocialChange = (platform, value) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white mt-12 md:mt-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-6 sm:mb-8">
            Social Media Links
          </h1>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4">
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
        </div>
      </div>
    </div>
  );
};

export default Socialmedia; 