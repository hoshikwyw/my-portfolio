import React, { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { BiSolidPhoneCall, BiSolidSend } from "react-icons/bi";
import pfp from "../assets/kwyw-removebg.png";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };

    try {
      await axios.post('/sendEmail', data);
      alert('Email sent successfully!');
    } catch (error) {
      alert('An error occurred while sending the email.');
    }
  };
  const handleEmailClick = () => {
    const recipientEmail = "khaingwutyiwin1712@gmail.com";
    const subject = "Your subject here";
    const body = "Your message here";

    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeLink);
  };
  const handle2EmailClick = () => {
    const recipientEmail = "orocupid1712@gmail.com";
    s;
    const subject = "Your subject here";
    const body = "Your message here";

    const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeLink);
  };
  const handlePhoneClick = () => {
    const phoneNumber = "+959795847089";
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_self");
  };
  const handle2PhoneClick = () => {
    const phoneNumber = "+959971030915";
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_self");
  };
  return (
    <div className=" text-white w-[90%] gap-[10%] mx-auto mt-4  mb-14">
      {/* <h2 className=" ps-10 mb-8 uppercase font-bold font-serif tracking-wider text-xl">
        Get In Touch
      </h2> */}
      {/* intro  */}
      <div className=" flex items-end gap-20 mb-10 cursor-pointer ps-10">
        <img
          src={pfp}
          className=" w-20 h-20 rounded-full bg-white bg-opacity-20 shadow-md hover:scale-105"
          alt=""
        />
        {/* phone  */}
        <div className=" w-fit">
          <h2 className=" flex items-center gap-4 text-lg font-bold justify-center hover:text-orange-600">
            <span>
              <BiSolidPhoneCall className=" text-2xl" />
            </span>
            Call Me
          </h2>
          <div className=" mt-2 text-sm text-[#ffffffcc] flex flex-col gap-2">
            <a
              href="#"
              onClick={handlePhoneClick}
              className=" hover:text-orange-600">
              +959-795-847-089
            </a>
            <a
              href="#"
              onClick={handle2PhoneClick}
              className=" hover:text-orange-600">
              +959-971-030-915
            </a>
          </div>
        </div>
        {/* email  */}
        <div className=" w-fit">
          <h2 className=" flex items-center gap-4 text-lg font-bold justify-center hover:text-orange-600">
            <span>
              <AiFillMail className=" text-2xl" />
            </span>
            Send Mail
          </h2>
          <div className=" mt-2 text-sm text-[#ffffffcc] flex flex-col gap-2">
            <a
              href="#"
              target="_blank"
              onClick={handleEmailClick}
              className=" hover:text-orange-600">
              khaingwutyiwin1712@gmail.com
            </a>
            <a
              href="#"
              target="_blank"
              onClick={handle2EmailClick}
              className=" hover:text-orange-600">
              orocupid1712@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* map and form  */}
      <div className=" flex gap-16 items-end justify-center  ">
        {/* map  */}
        <div className=" w-[50%] h-full border rounded shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4918.399061164307!2d96.17010600259482!3d16.840821788052406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1690380489170!5m2!1sen!2smm"
            width="100%"
            height="230"
            allowfullscreen=""
            loading="lazy"
            className=" opacity-80"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* form  */}
        <div className=" w-[50%] h-full">
          <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" text-white w-full rounded outline-none py-1 ps-5 bg-transparent border border-white"
            />
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-white w-full rounded outline-none py-1 ps-5 bg-transparent border border-white"
            />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className=" resize-none text-white rounded outline-none py-1 ps-5 h-28 bg-transparent border border-white"></textarea>
            <button  type="submit" className=" flex items-center gap-3 bg-slate-500 w-fit px-5 py-1 rounded font-semibold hover:bg-orange-700 ">
              Send
              <span className="">
                <BiSolidSend />
              </span>
            </button>
          </form>
        </div>
      </div>
      <Link to={"/projects"}>
        <btn className=" group fixed left-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-lg font-bold group-hover:text-orange-500">
            <HiArrowCircleLeft />
          </h2>
        </btn>
      </Link>
    </div>
  );
};

export default Contact;
