import React from "react";
import email from "../../assets/email.png";
import phone from "../../assets/phone-call.png";
import telegram from "../../assets/telegram.png";
import address from "../../assets/maps-and-flags.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container flex flex-col md:flex-row gap-8 justify-between py-8">
        <div className="max-w-sm">
          <h3 className="font-bold text-lg mb-2">About our company</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aperiam praesentium, provident vel expedita ut tempora atque
            necessitatibus!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-1">Contact</h3>
          <div className="flex items-center gap-2">
            <img width={24} src={email} alt="email" />
            <span className="text-sm">durozov46@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <img width={24} src={phone} alt="phone" />
            <span className="text-sm">+998 90 523 43 82</span>
          </div>
          <div className="flex items-center gap-2">
            <img width={24} src={telegram} alt="telegram" />
            <span className="text-sm">@urozov04</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-1">Address</h3>
          <div className="flex items-center gap-2">
            <img width={24} src={address} alt="address" />
            <span className="text-sm">Tashkent, Uzbekistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
