import { Header, Footer } from "@/components";
import React, { useState } from "react";
import Head from "next/head";

export default function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Contact Us - Get in Touch with Our Team at Hyandyman</title>
        <meta name="description" content="Need assistance or have inquiries? Contact our dedicated team at Hyandyman. We are here to help and provide you with the information you need. Reach out to us through phone or email to get prompt and reliable support. We look forward to hearing from you and addressing any concerns or questions you may have."/>
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="Container space-y-20">
          <Header />
        </div>
        <div className="bg-mainBackground pt-20 h-screen flex justify-center items-center">
          <div className="Container pt-10 ">
            <div className="bg-white w-full lg:w-1/2 mx-auto py-7 rounded-md ">
              <div className="mx-10">
                <section>
                  <h2 className="font-bold mb-1">Contact Information</h2>
                  <div className="ml-2">
                    <p>Phone: <span className="text-gray-600">+49 123 456789</span></p>
                    <p>Email: <span className="text-gray-600">info@handymanportal.com</span></p>
                  </div>
                </section>
                <h1 className="text-3xl font-bold my-3">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-gray-700  font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="name"
                      className="w-full px-3 py-3 border border-gray-600 rounded outline-none"
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-gray-700  font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-3 border border-gray-600 rounded outline-none"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="block text-gray-700  font-bold mb-2"
                    >
                      Message:
                    </label>
                    <textarea
                      className="border border-black outline-none rounded-md p-1"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      cols={60}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange hover:text-black text-white font-bold py-2.5 px-4 rounded-full focus:outline-none mt-6"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
}
