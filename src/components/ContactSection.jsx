import React from "react";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzRhD1hCyyCc5CoY_PVuRpOdfcaQ0amIh1FAUpzMiGMmYc3c5WPxCpw2PjpCpoMMt2y/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

    } catch (err) {
      console.error(err);
    }
    // e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="contact-section relative min-h-[85vh] flex items-center py-20 lg:py-32 px-[5%] overflow-hidden bg-black"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url("/contactFromimg.jpg")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:to-black/10" />

      <div className="container relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          {/* Left Side: Info */}
          <div className="lg:w-1/2 text-white flex flex-col justify-between py-2">
            <div>
              <h2 className="text-[40px] font-normal font-outfit mb-8 leading-[28px] tracking-tight">
                Build a Farm with Us
              </h2>
              <p className="text-[16px] text-white mt-16 mb-12 leading-[32px] font-inter">
                We work closely with landowners and investors to build
                sustainable <br /> hydroponic farms. From planning to
                operations, our team supports you <br /> at every stage.
              </p>
            </div>

            {/* Location & Contact Info: Aligned to Bottom of Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              <div className="info-group">
                <span className="block text-[24px] font-medium mb-8">
                  Location
                </span>
                <p className="text-[16px] leading-[28px] opacity-100 max-w-[80%]">
                  Farmcult Agritech Pvt Ltd <br /> Plot no 181, 32 Industrial
                  Area Phase 1 Chandigarh,(160002)
                </p>
              </div>
              <div className="info-group">
                <span className="block text-[24px] font-medium mb-8">
                  Contact
                </span>
                <p className="text-[16px] leading-[28px] opacity-100">
                  farmcult.company@gmail.com
                  <br />
                  +91 9041104230
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:w-[45%] w-full h-full">
            <div className="bg-white rounded-[12px] p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#1A1A1A] mb-10">
                Send us a message
              </h3>

              <form
                className="flex flex-col gap-8"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                    />
                  </div>
                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black placeholder:text-[#1A1A1A]/30"
                    />
                  </div>

                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder=" "
                      className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black"
                    />
                  </div>
                  <div className="form-group flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="bg-transparent border-b border-[#1A1A1A]/60 py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-bold font-inter text-[#1A1A1A]/60 focus:text-black"
                    />
                  </div>
                </div>

                <div className="form-group flex flex-col gap-2 group">
                  <label className="text-sm font-semibold text-[#1A1A1A]/60 font-inter transition-colors group-focus-within:text-black">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message.."
                    className="bg-transparent border-b border-[#DEDEDE] py-2 focus:outline-none focus:border-black transition-colors text-[1.1rem] font-inter text-[#1A1A1A]/60 focus:text-black resize-none min-h-[50px] placeholder:text-[#1A1A1A]/50"
                    rows={1}
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
