
import React, { useEffect, useState } from 'react'

const About = () => {
    let localEmail = localStorage.getItem("email");

  const [name, setName] = useState("");
  const [email, setEmail] = useState(localEmail || "");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = [
    {
      state: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Name...",
      type: "text"
    },
    {
      state: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "Email...",
      type: "email"
    },
    {
      state: subject,
      onChange: (e) => setSubject(e.target.value),
      placeholder: "Subject...",
      type: "text"
    }
  ];
  const sendReview = () => {
    console.log("Action: Send Review");
  };

  return (
    <>
      <main
        className={`px-2 py-4 flex h-full sofia flex-col gap-8 bg-gray-200 text-gray-900 dark:text-gray-100 sofia sm:py-16 dark:bg-[#12181B] page`}
      >
        <div className="flex flex-col items-start justify-between w-full gap-4 lg:flex-row md:gap-8">
          <div className="flex flex-col w-full gap-2 xl:gap-4">
            <p className="w-full text-xl first-letter:text-6xl first-letter:text-[#ED2F34] md:text-2xl xl:text-3xl">
              Every business has an origin story worth telling, and usually, one
              that justifies why you even do business and have clients. Some
              centennial enterprises have pages of content that can fit in this
              section, while startups can tell the story of how the company was
              born, its challenges, and its vision for the future.
            </p>
            <p className="w-full text-xl md:text-2xl xl:text-3xl">
              Every business has an origin story worth telling, and usually, one
              that justifies why you even do business and have clients. Some
              centennial enterprises have pages of content that can fit in this
              section, while startups can tell the story of how the company was
              born, its challenges, and its vision for the future.
            </p>
            <p className="w-full text-xl md:text-2xl xl:text-3xl">
              Every business has an origin story worth telling, and usually, one
              that justifies why you even do business and have clients. Some
              centennial enterprises have pages of content that can fit in this
              section, while startups can tell the story of how the company was
              born, its challenges, and its vision for the future.
            </p>
            <p className="w-full text-xl md:text-2xl xl:text-3xl">
              Every business has an origin story worth telling, and usually, one
              that justifies why you even do business and have clients. Some
              centennial enterprises have pages of content that can fit in this
              section, while startups can tell the story of how the company was
              born, its challenges, and its vision for the future.
            </p>
          </div>
          <div className="flex items-start w-full gap-2 lg:flex-col lg:w-6/12 xl:gap-4">
            {/*
               <img className="hidden w-full lg:block " src={about} alt="" />
*/}
            <div className="flex flex-col w-full gap-4 mx-auto sm:w-8/12 lg:w-full sofia">
              <h2 className="text-lg text-center md:text-4xl">Review Us</h2>
              <div className="flex flex-col gap-2">
                {form.map((obj, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <input
                      value={obj.state}
                      onChange={obj.onChange}
                      className="p-2 text-lg rounded-md outline-blue-400 dark:bg-[#454E56] "
                      placeholder={obj.placeholder}
                      type={obj.type}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 text-lg rounded-md outline-blue-400 dark:bg-[#454E56]"
                    placeholder="Message..."
                    type="text"
                  />
                </div>
                <button
                  onClick={sendReview}
                  className="w-full p-2 mx-auto text-2xl text-white bg-blue-400 rounded-md shadow-md md:hover:scale-105 hover:bg-blue-500 hover:shadow-lg sm:active:scale-95 active:shadow-sm"
                >
                  Send Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default About;