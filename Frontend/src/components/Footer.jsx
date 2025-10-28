import React from "react";
import Logo from '/Logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="bg-gray-800  text-white text-center text-[12px] font-sans">
       <div className="grid grid-cols-3 gap-10 p-4">
         <div>
        <div className="flex gap-2">
           {/* <img src={Logo} className="w-12 h-12 rounded-full"></img> */}
           <h2 className="mt-3  font-mono">CHITOHELP</h2>
        </div>
          <p className="text-left">
           ChitoHelp – An AI-powered customer support chatbot with automated ticketing, providing fast, reliable 24/7 assistance and streamlining support workflows.
          </p>
        </div>
        <div className="text-center">
          <h2 className="underline">Quick Links</h2>
          <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          </ol>
        </div>
        <div>
          <h2 className="underline">
            CONTACT US
          </h2>
          <ol>
            <li>Contact:+1401-99004</li>
          <li>email:chitohelp7@gmail.com</li>
          </ol>

        </div>
       </div>
        <div>
          <p className="p-2">
            &copy; {year} <strong>SajiloDesk (सजिलोDesk)</strong>. All rights
            reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
