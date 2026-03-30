import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        
        {/* Header Section - Matched to your Hero text style */}
        <div className="max-w-3xl mb-16 pl-0 md:pl-20">
          <div className="inline-block bg-[#cebdb5]/60 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-6 border border-[#cebdb5]">
            <div className="flex items-center gap-x-2 text-[#583101]">
              <MessageCircle size={18} fill="#cebdb5" />
              <span className="font-semibold uppercase tracking-wider">Get in touch</span>
            </div>
          </div>
          
          <h1 className="md:text-5xl text-3xl font-medium xl:leading-tight leading-normal mb-6">
            Questions? <br />
            <span className="italic">We'd love to hear from you.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-normal leading-normal text-black/60">
            Whether you're curious about features, a free trial, or even <br className="hidden md:block" /> 
            press—we're ready to answer any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information - Earthy Accents */}
          <div className="lg:col-span-5 space-y-10 md:pl-20">
            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Email Us", detail: "hello@yourstyle.com", sub: "Online support 24/7" },
                { icon: <MapPin />, title: "Visit Us", detail: "123 Fashion Blvd", sub: "New York, NY 10012" },
                { icon: <Phone />, title: "Call Us", detail: "+1 (555) 000-1234", sub: "Mon-Fri, 9am-6pm" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-[#cebdb5] text-[#583101] rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-1">{item.title}</h3>
                    <p className="text-lg font-medium text-gray-900">{item.detail}</p>
                    <p className="text-sm text-black/50">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Card - Matched to Hero Color Block */}
            <div className="p-8 bg-[#cebdb5] rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3 text-[#583101]">
                  <Globe className="w-5 h-5" />
                  <span className="font-bold">Global Shipping</span>
                </div>
                <p className="text-sm text-[#583101]/80 leading-relaxed">
                  We ship to over 50 countries. Check our logistics page for delivery times in your region.
                </p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Form Column - Styled to match Hero's Sharp Design */}
          <div className="lg:col-span-7 px-2">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 bg-[#cebdb5]/10 border border-[#cebdb5]/30 rounded-2xl focus:outline-none focus:border-[#583101] transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-4 bg-[#cebdb5]/10 border border-[#cebdb5]/30 rounded-2xl focus:outline-none focus:border-[#583101] transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/60 ml-1">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-5 py-4 bg-[#cebdb5]/10 border border-[#cebdb5]/30 rounded-2xl focus:outline-none focus:border-[#583101] transition-all resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              {/* Button - Exact match to Hero 'Show Now' button */}
              <button 
                type="submit"
                className="bg-[#583101] flex items-center rounded-2xl justify-center text-white px-10 py-4 gap-x-4 active:scale-95 transition-all w-full md:w-auto uppercase tracking-widest text-sm font-bold"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;