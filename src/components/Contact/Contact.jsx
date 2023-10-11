import React from "react";
import { AiFillMail } from "react-icons/ai";

import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <div className="contact_container flex items-center justify-center pt-[10rem] flex-wrap space-x-[45rem]">
        <div className="left
         ">
          <div>
            <div className="px-11 w-fit">
              <h1 className="text-[#ec3737] tracking-wide contact_heading text-[10rem] text-left  font-[900] flex flex-col ">
                <span>Be among the first</span>
                <span>to experience</span>
                <span>the future.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="right">
          <form
            action=""
            id="contact-form"
            className="flex items-center justify-center flex-col gap-11  border-[#ec3737] w-fit py-11  bg-[#1d1d1d79] rounded-3xl "
          >
            <input
              placeholder="Name"
              type="text"
              required="true"
              name=""
              className=" a w-[40rem] bg-black border-2 border-[#ec3737] rounded-3xl text-4xl text-[#fff] px-11 py-8"
            />

            <input
              placeholder="Email"
              type="email"
              required="true"
              name=""
              className=" a w-[40rem] bg-black border-2 border-[#ec3737] rounded-3xl text-4xl text-[#fff] px-11 py-8"
            />

            <textarea
              placeholder="Type your message here"
              required="true"
              name=""
              className=" a w-[40rem] h-[20vh] bg-black border-2 border-[#ec3737] rounded-3xl text-4xl text-[#fff] px-11 py-8"
            ></textarea>

            <input
              type="submit"
              value="Send"
              name=""
              className=" a w-[40rem] border-2 border-[#ec3737] bg-[#ec3737] rounded-3xl text-4xl text-[#fff] px-11 py-8"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

{
  /* <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form> */
}
