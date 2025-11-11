import React, { useState, useEffect } from "react";
import ServicesCard from "./ServicesCard";
import en from "../assets/en.json";
import mh from "../assets/mh.json";
import kn from "../assets/kn.json";
import kr from "../assets/kr.json";

const translations = { en, mh, kn, kr };

const Services = () => {
  const [lang, setLang] = useState("kn"); // default language
  const [content, setContent] = useState(translations[lang]);

  useEffect(() => {
    setContent(translations[lang]);
  }, [lang]);

  return (
    <div className="bg-gradient-to-tr from-[#FFF8E7] via-[#FFFFFF] to-[#FFF8E7] sm:p-20 p-10">      

      {/* Section Header */}
      <div className="text-center flex flex-col">
        <h1 className="font-bold sm:text-[48px] text-[24px] mx-auto font-poppins sm:max-w-full max-w-[80%]">
          {content.services_head.map((title)=>(
            title.heading
          ))}
        </h1>
        <p className="text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]">
          {content.services_head.map((content)=>(
            content.paragraph
          ))}
        </p>
      </div>
 
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {content.services.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
