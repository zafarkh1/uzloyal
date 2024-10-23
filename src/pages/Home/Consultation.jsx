import React, { useState } from "react";
import { GiHouse } from "react-icons/gi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { TfiHeadphoneAlt, TfiAlarmClock } from "react-icons/tfi";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";

const Consultation = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("consultation.name_required");
    if (!formData.email) newErrors.email = t("consultation.email_required");
    if (!formData.phone) newErrors.phone = t("consultation.phone_required");
    if (!formData.description)
      newErrors.description = t("consultation.description_required");
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendConsultation = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const sendtoken = "7047437133:AAF1g7efX79bh4TSYtBwN1TEQRL6GtjFczo";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${sendtoken}/sendMessage`;

    const messageContent = `Your name: ${formData.name} \nYour email: ${formData.email} \nYour phone: ${formData.phone} \nYour description: ${formData.description}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: messageContent,
        }),
      });

      if (response.ok) {
        alert(t("consultation.success"));
        setFormData({ name: "", email: "", phone: "", description: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert(t("consultation.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 justify-between lg:mt-20 my-10 w-full">
      {/* Contact Information Section */}
      <div className="bg-[#1e2e3e] lg:px-10 px-5 lg:py-12 py-6 text-white">
        <h2 className="mb-5 heading2 py-3 border-b-[2px] border-[#ad9071]">
          {t("consultation.contactinfo")}
        </h2>
        <p className="text mb-[38px]">{t("consultation.more_info_contact")}</p>

        <div className="flex items-center gap-5 mb-[45px]">
          <GiHouse className="text-[60px]" />
          <div>
            <p className="heading5 lg:mb-4 mb-1">
              {t("consultation.office_address")}
            </p>
            <p className="text">{t("consultation.address")}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-[45px]">
          <LiaEnvelopeOpenTextSolid className="text-[60px]" />
          <div>
            <p className="heading5 lg:mb-4 mb-1">{t("consultation.email")}</p>
            <a href="mailto:loyalxat@gmail.com" className="text">
              loyalxat@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-[45px]">
          <TfiHeadphoneAlt className="text-[60px]" />
          <div>
            <p className="heading5 lg:mb-4 mb-1">
              {t("consultation.phone_number")}
            </p>
            <a href="tel:+998901319544" className="text">
              +998901319544
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-[45px]">
          <TfiAlarmClock className="text-[60px]" />
          <div>
            <p className="heading5 lg:mb-4 mb-1">
              {t("consultation.office_hours")}
            </p>
            <p className="text">{t("consultation.office_hours_schedule")}</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#ad9071] lg:px-10 px-5 lg:py-12 py-6 text-white">
        <p className="text mt-3 text-center">{t("consultation.contact_us")}</p>
        <h2 className="heading3 mb-5 text-center border-b-[2px] border-[#ad9071]">
          {t("consultation.consultation")}
        </h2>
        <form
          onSubmit={sendConsultation}
          className="grid grid-cols-1 lg:gap-3 gap-2"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder={t("consultation.your_name")}
            className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
          />
          {errors.name && <span className="text-red-600">{errors.name}</span>}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder={t("consultation.your_email")}
            className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
          />
          {errors.email && <span className="text-red-600">{errors.email}</span>}

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder={t("consultation.your_phone")}
            className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
          />
          {errors.phone && <span className="text-red-600">{errors.phone}</span>}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder={t("consultation.describe_case")}
            rows={7}
            className="w-full resize-none px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
          ></textarea>
          {errors.description && (
            <span className="text-red-600">{errors.description}</span>
          )}

          <div className="inline mx-auto">
            <Button color={true} disabled={loading}>
              {loading ? t("consultation.sending") : t("consultation.submit")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
