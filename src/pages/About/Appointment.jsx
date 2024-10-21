
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const SendMessages = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    describtion: '',
    subject: '', // Added subject to form data state
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

    const { fullname, phonenumber, email, describtion, subject } = formData;

    // Validate inputs
    if (!fullname || !phonenumber || !email || !describtion || !subject) {
      alert(t('Iltimos, barcha maydonlarni to\'ldiring.'));
      return;
    }

    setLoading(true);

    const Bot_Token = '5810941788:AAG4BVSolz6g2-CaXDKvtnvHEyBUohp196g';
    const chat_id = -1001821411125;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const messageContent = `Fullname: ${fullname}\nPhoneNumber: ${phonenumber}\nEmail: ${email}\nDescription: ${describtion}\nSubject: ${subject}`;

    try {
      await axios.post(url, {
        chat_id,
        text: messageContent,
      });
      alert(t('Sizning xabaringiz muvaffaqiyatli yuborildi!'));
      setFormData({ fullname: '', phonenumber: '', email: '', describtion: '', subject: '' });
    } catch (err) {
      alert(t('Xatolik yuz berdi!'));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wpo-contact-area ex-widget mb-10 section-padding">
      <div className="container">
        <div className="wpo-contact-title mb-6">
          <h2 className="text-2xl font-bold">{t('Make an Appointment')}</h2>
          <p className="mt-2">
            {t('Do not put off until tomorrow the problems that need to be solved today, especially if it concerns your life!')}
          </p>
        </div>
        <div className="quote-form">
          <form id="myForm" onSubmit={sendMessage}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Fullname Input */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  placeholder={t('Fullname')}
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  placeholder={t('Email')}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  placeholder={t('PhoneNumber')}
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject Select */}
              <div className="form-group">
                <select
                  name="subject"
                  className="form-control w-full p-3 border border-[#d48938] rounded text-[#cdb091]"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    {t('Select Subject')}
                  </option>
                  <option value="Family Law">{t('Family Law')}</option>
                  <option value="Personal Injury">{t('Personal Injury')}</option>
                  <option value="Criminal Law">{t('Criminal Law')}</option>
                  <option value="Education Law">{t('Education Law')}</option>
                  <option value="Business Law">{t('Business Law')}</option>
                </select>
              </div>

              {/* Case Description Textarea */}
              <div className="form-group col-span-full">
                <textarea
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  name="describtion"
                  placeholder={t('Description')}
                  value={formData.describtion}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-group col-span-full text-center">
                <button
                  className="btn theme-btn bg-[#cdb091] text-white p-3 rounded hover:bg-[#d48938] transition"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? t('Yuborilmoqda...') : t('Appointment')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessages;
