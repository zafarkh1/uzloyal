import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Consultation = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    describtion: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    const { fullname, phonenumber, email, describtion } = formData;

    // Validate inputs
    if (!fullname || !phonenumber || !email || !describtion) { // Fixed syntax error here
      alert(t('Iltimos, barcha maydonlarni to\'ldiring.'));
      return;
    }

    setLoading(true);

    const Bot_Token = '5810941788:AAG4BVSolz6g2-CaXDKvtnvHEyBUohp196g';
    const chat_id = -1001821411125;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const messageContent = `Fullname: ${fullname}\nPhoneNumber: ${phonenumber}\nEmail: ${email}\nDescription: ${describtion}`;

    try {
      await axios.post(url, {
        chat_id,
        text: messageContent,
      });
      alert(t('Sizning xabaringiz muvaffaqiyatli yuborildi!'));
      setFormData({ fullname: '', phonenumber: '', email: '', describtion: '' });
    } catch (err) {
      alert(t('Xatolik yuz berdi!'));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-12"> {/* Increased padding */}
      <div className="wpo-contact-section-wrapper flex flex-wrap justify-center">
        <div className="w-full lg:w-3/5 xl:w-2/5 mb-10"> {/* Increased width */}
          <div className="contact-info-wrap bg-gray-800 text-white p-8 rounded-lg shadow-lg"> {/* Increased padding */}
            <div className="contact-info-title mb-6">
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="mt-2">You can find more information with these contact details.</p>
            </div>
            <div className="contact-info-item flex items-start mb-6"> {/* Increased margin */}
              <div className="contact-info-icon mr-4">
                <i className="fi flaticon-001-house text-3xl"></i> {/* Increased icon size */}
              </div>
              <div className="contact-info-text">
                <h4 className="text-lg font-semibold">Office Address</h4>
                <p>7th Street, Zanjirbogʻ neighborhood, Yakkasaroy district, Tashkent city.</p>
              </div>
            </div>
            <div className="contact-info-item flex items-start mb-6">
              <div className="contact-info-icon mr-4">
                <i className="fi flaticon-002-open text-3xl"></i> {/* Increased icon size */}
              </div>
              <div className="contact-info-text">
                <h4 className="text-lg font-semibold">Email</h4>
                <p>
                  <a href="mailto:loyalxat@gmail.com" className="text-white">
                    loyalxat@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item flex items-start mb-6">
              <div className="contact-info-icon mr-4">
                <i className="fi flaticon-003-headphone text-3xl"></i>
              </div>
              <div className="contact-info-text">
                <h4 className="text-lg font-semibold">Phone number</h4>
                <p>
                  <a href="tel:+998901319544" className="text-white">
                    +998901319544
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item flex items-start">
              <div className="contact-info-icon mr-4">
                <i className="fi flaticon-004-clock text-3xl"></i>
              </div>
              <div className="contact-info-text">
                <h4 className="text-lg font-semibold">Office Hours</h4>
                <p>Mon-Fri from 09:00 to 18:00 Tashkent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/5 mb-10"> {/* Increased width */}
          <div className="wpo-contact-form-area bg-[#ad9071] p-8 rounded-lg shadow-lg"> {/* Increased padding */}
            <div className="form-title mb-6">
              <span className="text-white font-medium">Contact Us</span>
              <h3 className="text-2xl font-semibold mt-2">Consultation</h3>
            </div>
            <form className="space-y-6" onSubmit={sendMessage}> {/* Added onSubmit */}
              <div className="form-field">
                <input
                  type="text"
                  name="fullname"
                  className="form-control w-full p-4 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                  value={formData.fullname}
                  onChange={handleChange} // Added onChange handler
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  className="form-control w-full p-4 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange} // Added onChange handler
                />
              </div>
              <div className="form-field">
                <input
                  type="tel" // Changed to 'tel' for phone input
                  name="phonenumber"
                  className="form-control w-full p-4 border border-gray-300 rounded-md"
                  placeholder="Your Phone Number"
                  value={formData.phonenumber}
                  onChange={handleChange} // Added onChange handler
                />
              </div>
              <div className="form-field">
                <textarea
                  name="describtion"
                  className="form-control w-full p-4 border border-gray-300 rounded-md"
                  placeholder="Describe Your Case in Detail"
                  value={formData.describtion}
                  onChange={handleChange} // Added onChange handler
                ></textarea>
              </div>
              <div className="submit-area">
                <button
                  type="submit"
                  className="theme-btn w-full border border-white text-white py-4 rounded-md hover:bg-white hover:text-[#ad9071] transition duration-300"
                >
                  {loading ? 'Submitting...' : 'Submit Now'} {/* Changed button text during loading */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
