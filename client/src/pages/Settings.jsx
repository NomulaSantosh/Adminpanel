import Sidebar from '../components/Sidebar';

const Settings = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white mt-12 md:mt-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-6 sm:mb-8">
            Account Settings
          </h1>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">
              Profile Picture
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-500 text-xl sm:text-2xl">👤</span>
              </div>
              <div className="w-full">
                <input
                  type="file"
                  className="block w-full text-sm text-purple-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:bg-purple-50 file:text-purple-700
                    hover:file:bg-purple-100"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">
              Social Media Links
            </h2>
            <div className="space-y-4">
              {['X (Twitter)', 'Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                <div key={platform}>
                  <label className="block text-purple-700 mb-2 text-sm sm:text-base">{platform}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder={`https://${platform.toLowerCase()}.com/username`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">
              Change Password
            </h2>
            <div className="space-y-4">
              {['Current Password', 'New Password', 'Confirm New Password'].map((label) => (
                <div key={label}>
                  <label className="block text-purple-700 mb-2 text-sm sm:text-base">{label}</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  />
                </div>
              ))}
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition text-sm sm:text-base font-semibold">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;