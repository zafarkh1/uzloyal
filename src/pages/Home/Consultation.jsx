import React, { useState } from "react";
// react icons
import { GiHouse } from "react-icons/gi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiAlarmClock } from "react-icons/tfi";
// react icons
import Button from "../../components/button/Button";

const Consultation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const nameIs = document.getElementById("name");
  const emailIs = document.getElementById("email");
  const phoneIs = document.getElementById("phone");
  const descriptionIs = document.getElementById("description");

  const sendConsultation = (e) => {
    e.preventDefault();

    const sendtoken = "7047437133:AAF1g7efX79bh4TSYtBwN1TEQRL6GtjFczo";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${sendtoken}/sendMessage`;

    const messageContent = `Your name : ${name} \nYour email : ${email} \nYour phone : ${phone} \nYour description : ${description}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageContent,
      }),
    })
      .then((resp) => resp.json())
      .then((respons) => {
        if (name.trim() === "") {
          nameIs.innerHTML = "Ismingizni kiriting xurmat bilan admin";
        } else if (email.trim() === "") {
          emailIs.innerHTML = "Emailingizni kiriting xurmat bilan admin";
        } else if (phone.trim() === "") {
          phoneIs.innerHTML = "Phone nomeringizni kiriting xurmat bilan admin";
        } else if (description.trim() === "") {
          descriptionIs.innerHTML =
            "O'zingiz xaqingizda qisqacha ma'lumot bo'lsa xam yozing xurmat bilan admin";
        } else {
          alert("Muvafaqiyatli yuborildi!...");
          nameIs.innerHTML = "";
          emailIs.innerHTML = "";
          phoneIs.innerHTML = "";
          descriptionIs.innerHTML = "";
          setName("");
          setEmail("");
          setPhone("");
          setDescription("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Xatolik yuz berdi, qaytadan urinib ko'ring!");
      });
  };
  return (
    <div>
      <div className="grid grid-cols-2 justify-between">
        <div className="bg-[#1e2e3e] p-14 text-white">
          <h2 className="text-[40px] w-3/5 mb-5 leading-[55px] py-3 border-solid border-b-[2px] border-[#ad9071]">
            Contact Info
          </h2>

          <p className="text-[18px] leading-[28px] mb-[38px]">
            You can find more information with these contact information
          </p>

          <div className="flex items-center gap-5 mb-[45px]">
            <GiHouse className="text-[60px]" />
            <div>
              <p className="text-[22px] leading-[30px] mb-[10px]">
                Office Address
              </p>
              <p>
                7th Street, Zanjirbogʻ neighborhood, Yakkasaroy district,
                Tashkent city.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-[45px]">
            <LiaEnvelopeOpenTextSolid className="text-[60px]" />
            <div>
              <p className="text-[22px] leading-[30px] mb-[10px]">Email</p>
              <a href="mailto:loyalxat@gmail.com">loyalxat@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-[45px]">
            <TfiHeadphoneAlt className="text-[60px]" />
            <div>
              <p className="text-[22px] leading-[30px] mb-[10px]">
                Phone number
              </p>
              <a href="tel:+998901319544">+998901319544</a>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-[45px]">
            <TfiAlarmClock className="text-[60px]" />
            <div>
              <p className="text-[22px] leading-[30px] mb-[10px]">
                Office Hours
              </p>
              <p>Mon-Fri from 09:00 to 18:00 Tashkent</p>
            </div>
          </div>
        </div>

        <div className="bg-[#ad9071] p-14 text-white">
          <p className="text-[18px] leading-[28px] mt-3 text-center">
            Contact Us
          </p>

          <h2 className="text-[40px] mb-5 leading-[55px] text-center border-solid border-b-[2px] border-[#ad9071]">
            Consultation
          </h2>
          <form onSubmit={sendConsultation} className="grid grid-cols-1 gap-5">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
              className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
            />
            <span className="text-red-600" id="name"></span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Your Email"
              className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
            />
            <span className="text-red-600" id="email"></span>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              placeholder="Your Phone"
              className="px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
            />
            <span className="text-red-600" id="phone"></span>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Describe Your Case in Detail"
              rows={7}
              className="w-full resize-none px-4 py-[10px] placeholder-white outline-none border-[1px] border-white bg-transparent"
            ></textarea>
            <span className="text-red-600" id="description"></span>
            <div className="inline mx-auto">
              <Button color={true} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
