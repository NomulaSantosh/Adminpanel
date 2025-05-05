import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { QrCodeIcon } from '@heroicons/react/24/outline';

const AddMoney = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolder: '',
    upiId: '',
    qrCode: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, qrCode: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 md:mb-8">
          Add Money
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bank Details Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-purple-600 mb-6">Bank Details</h2>
            <div className="space-y-4">
              {['bankName', 'accountNumber', 'ifscCode', 'accountHolder', 'upiId'].map((field) => (
                <div key={field}>
                  <label className="block text-purple-700 mb-2 capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* QR & UPI Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-purple-600 mb-4">QR Code</h2>
                <label className="block w-full aspect-square border-2 border-dashed border-purple-200 rounded-xl flex items-center justify-center cursor-pointer hover:border-purple-300">
                  <input
                    type="file"
                    onChange={handleQrUpload}
                    className="hidden"
                    accept="image/*"
                  />
                  {formData.qrCode ? (
                    <img src={formData.qrCode} alt="QR Code" className="w-full h-full object-contain rounded-xl" />
                  ) : (
                    <div className="text-center">
                      <QrCodeIcon className="h-16 w-16 text-purple-300 mx-auto mb-2" />
                      <p className="text-purple-500">Click to upload QR Code</p>
                    </div>
                  )}
                </label>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-purple-600 mb-4">UPI ID</h2>
                <input
                  type="text"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="yourname@upi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;