import Lottie from "react-lottie-player";
import contactInfo from "./assets/contact.json";
import { Mail, Phone } from "lucide-react";

export default function Contact() {

  const contactDetails = [
    {
      email: 'umasambath1998@gmail.com',
      phone: '+61435222429'

    },
  ];
  return (

    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden"
        style={{ backgroundImage: "url('/backgroundImage.jpg')" }}
      >
        <div className="container mx-auto px-6">
          <div
            className="flex items-center justify-center space-x-4 p-8"
            data-aos="fade-up"
          >
            <h2 className="text-center font-bold text-5xl p-8 text-white-800 dark:text-white drop-shadow-lg">
              CONTACT
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div
              className="md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-8 md:mb-0"
              data-aos="fade-right"
            >
              {contactDetails.map((con, index) => (
                <div
                  key={index}
                  className="rounded-lg transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Mail className="w-10 h-10 p-2 text-indigo-600" />
                    <p className="text-2xl font-semibold">
                      {con.email}
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Phone className="w-10 h-10 p-2 text-indigo-600" />
                    <p className="text-2xl font-semibold">
                      {con.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <Lottie
                animationData={contactInfo}
                className="w-80 h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}