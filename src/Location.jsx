import React from "react";
import Footer from "./Footer";
import "./styles.css";

export default function Location() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-[15vh] sm:pt-[8.333vh]">
      <div className="flex flex-1 flex-col justify-center px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Địa Điểm
          </h1>
          <p className="mt-3 text-gray-600 leading-relaxed">
            8042 Hazard Ave <br />
            Midway City, CA 92655 <br />
            <span className="italic text-sm">
              (10:00am – 1:00pm vào ngày Chủ Nhật)
            </span>
          </p>
        </div>

        {/* Maps */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center pb-6 sm:pb-0">
          {/* Top View */}
          <div className="w-full sm:max-w-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.3459402724034!2d-117.9912881591254!3d33.75172537338286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27ecad59c4dd%3A0x82c3d6af7710b698!2sThien%20Quang%20Tu!5e0!3m2!1sen!2sus!4v1757640914881!5m2!1sen!2sus"
              className="w-full h-72 sm:h-96 rounded-xl border-4 border-[#7589a2] shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Top View"
            />
          </div>

          {/* Street View */}
          <div className="w-full sm:max-w-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757641348614!6m8!1m7!1sHbJv6mELQWuoXSz1nAV9Vg!2m2!1d33.75201171921682!2d-117.9886314485955!3f180.52248110270202!4f1.4381394467266801!5f0.8097510254235594"
              className="w-full h-72 sm:h-96 rounded-xl border-4 border-[#7589a2] shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Street View"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
