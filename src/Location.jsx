import React from "react";
import "./styles.css";

export default function Location() {
  return (
    <div className="flex justify-center p-4 pt-25">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.3459402724034!2d-117.9912881591254!3d33.75172537338286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27ecad59c4dd%3A0x82c3d6af7710b698!2sThien%20Quang%20Tu!5e0!3m2!1sen!2sus!4v1757640914881!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Top View"
      ></iframe>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1757641348614!6m8!1m7!1sHbJv6mELQWuoXSz1nAV9Vg!2m2!1d33.75201171921682!2d-117.9886314485955!3f180.52248110270202!4f1.4381394467266801!5f0.8097510254235594" 
        width="600" 
        height="450" 
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps Street View"
      ></iframe>
    </div>
  );
}
