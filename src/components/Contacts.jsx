"use client";

import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contacts() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r3xj29g",      // ✅ SERVICE ID
        "template_xplji47",     // ✅ TEMPLATE ID
        e.target,
        "xgklZO0gdbCaQFJy"      // ✅ PUBLIC KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again.");
      });
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Contact Me
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate?  
          Feel free to reach out.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>giridevansh484@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span>+91 8765632396</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-600 text-xl" />
              <span>Lucknow , Uttar pradesh, India</span>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={sendEmail}
            className="bg-gray-50 p-8 rounded-2xl space-y-5"
          >
            <input
              type="text"
              name="name"                 // ⚠️ MUST MATCH TEMPLATE
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"               // ⚠️ MUST MATCH TEMPLATE
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="message"             // ⚠️ MUST MATCH TEMPLATE
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
