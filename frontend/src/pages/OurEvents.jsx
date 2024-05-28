import React from "react";
import Events from "../components/Events";
import { Trans, useTranslation } from "react-i18next";

const OurEvents = () => {
  useTranslation();

  return (
    <div className="px-[10%]">
      <Events />
      <p className='text-center sm:text-base text-xs'>
        <Trans
          i18nKey="ourEvents-sentence"
          components={{ 
            1: <a href="https://www.instagram.com/degirmen_camp/" target="blank" className="text-secondary sm:text-base text-xs">Instagram</a>
          }}
        />
      </p>
    </div>
  );
};

export default OurEvents;
