import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const AddMoney = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolder: '',
    upiId: '',
    qrCode: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
    if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required';
    if (!formData.upiId.trim()) newErrors.upiId = 'UPI ID is required';
    if (!formData.qrCode) newErrors.qrCode = 'QR code is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleQrUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, qrCode: reader.result }));
        setErrors(prev => ({ ...prev, qrCode: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Money transfer details saved successfully!\n' + 
        JSON.stringify(formData, null, 2));
      
      // Reset form
      setFormData({
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        accountHolder: '',
        upiId: '',
        qrCode: null
      });
      setErrors({});
    } catch (error) {
      alert('Error saving details: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 bg-white mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 md:mb-8">
          Add Money
        </h1>
        
        <div className="flex flex-col gap-8">
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
                      className={`w-full px-4 py-2.5 border ${
                        errors[field] ? 'border-red-500' : 'border-purple-200'
                      } rounded-xl focus:ring-2 focus:ring-purple-500`}
                    />
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* QR & UPI Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-purple-600 mb-4">QR Code</h2>
                  <label className={`block w-full aspect-square border-2 border-dashed ${
                    errors.qrCode ? 'border-red-500' : 'border-purple-200'
                  } rounded-xl flex items-center justify-center cursor-pointer hover:border-purple-300`}>
                    <input
                      type="file"
                      onChange={handleQrUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    {formData.qrCode ? (
                      <img src={formData.qrCode} alt="QR Code" className="w-full h-full object-contain rounded-xl" />
                    ) : (
                      <div className="text-center p-4">
                        <p className="text-purple-500 font-medium mb-2">Upload QR Code</p>
                        <p className="text-sm text-purple-400">Click here to select a file</p>
                      </div>
                    )}
                  </label>
                  {errors.qrCode && <p className="text-red-500 text-sm mt-2 text-center">{errors.qrCode}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center">
            <button
              onClick={handleConfirm}
              disabled={isSubmitting}
              className={`bg-purple-600 text-white px-6 py-3 rounded-xl transition-all text-sm md:text-base font-semibold w-full max-w-[400px] ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-purple-700 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Transfer Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;