import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageCheck } from "react-icons/bi";
import Button from "../components/button/Button";
import { BackgroundofPages } from "../components/utils/backgoundOfPages";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const nameIs = document.getElementById("name");
  const emailIs = document.getElementById("email");
  const phoneIs = document.getElementById("phone");
  const descriptionIs = document.getElementById("description");

  const handleChange = (e) => {
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
    <div className="lg:mt-48 sm:mt-32 mt-24">
      <BackgroundofPages heading={"Contact Us"} text={"Contact"} />
      <div className="myContainer">
        <div className="flex justify-between my-10">
          <div className="text-center w-[30%] p-10 shadow-[0_5px_15px_0_#3e419f1a]">
            <div className="w-[85px] h-[85px] rounded-[50%] mx-auto flex items-center justify-center bg-[#f5f5f5]">
              <MdLocationOn className="w-[35px] h-[35px] text-[#525252]" />
            </div>
            <h2 className="text-[30px] my-5 font-serif">Office Address</h2>
            <p className="text-[#525252] text-[18px] leading-[29px]">
              7th Street, Zanjirbogʻ neighborhood, Yakkasaroy district, Tashkent
              city.
            </p>
          </div>

          <div className="text-center w-[30%] p-10 shadow-[0_5px_15px_0_#3e419f1a]">
            <div className="w-[85px] h-[85px] rounded-[50%] mx-auto flex items-center justify-center bg-[#f5f5f5]">
              <BiSolidMessageCheck className="w-[30px] h-[30px] text-[#525252]" />
            </div>
            <h2 className="text-[30px] my-5 font-serif">Email</h2>
            <p className="text-[#525252] text-[18px] leading-[29px]">
              loyalxat@gmail.com
            </p>
          </div>

          <div className="text-center w-[30%] p-10 shadow-[0_5px_15px_0_#3e419f1a]">
            <div className="w-[85px] h-[85px] rounded-[50%] mx-auto flex items-center justify-center bg-[#f5f5f5]">
              <FaPhoneVolume className="w-[28px] h-[28px] text-[#525252]" />
            </div>
            <h2 className="text-[30px] my-5 font-serif">Phone number</h2>
            <p className="text-[#525252] text-[18px] leading-[29px]">
              +998901319544
            </p>
          </div>
        </div>

        <div className="w-[80%] mx-auto h-[520px]">
          <h2 className="text-[30px] text-center mt-8 mb-2 font-serif">
            Have Any Question?
          </h2>

          <p className="text-[#525252] text-center mb-8 text-[18px] leading-[29px]">
            Contact us, we will help you!
          </p>

          <form
            onSubmit={handleChange}
            className="p-10 shadow-[0_5px_15px_0_#3e419f1a] bg-white relative"
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-8">
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="name"></span>
              </div>

              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Your Email"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="email"></span>
              </div>

              <div>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  placeholder="Your Phone"
                  className="w-full pl-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
                />
                <span className="text-red-700 text-[14px]" id="phone"></span>
              </div>
            </div>

            <div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="7"
                placeholder="Describe Your Case in Detail"
                className="w-full resize-none mt-8 px-5 py-2 rounded-[5px] border-[#ebebeb] border-[1px] border-solid"
              ></textarea>
              <span
                className="text-red-700 text-[14px]"
                id="description"
              ></span>
            </div>

            <Button />
          </form>
        </div>
      </div>

      <iframe
        title="das"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.513536481314!2d69.25822897587385!3d41.297690671311365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bee751faa35%3A0x5f7352be0e851c3a!2sRADIANS%20SERVICE!5e0!3m2!1sen!2s!4v1729018265254!5m2!1sen!2s"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
