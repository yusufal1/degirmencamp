import React from "react";
import BungalovImg from "../assets/images/gorsel-1.jpg";
import KaravanImg from "../assets/images/gorsel-19.jpeg";
import CadirImg from "../assets/images/gorsel-21.jpg";
import { useTranslation } from "react-i18next";

const Options = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col pt-[10%] sm:px-[10%] px-4 gap-10">
      <h1 className="font-bold md:text-4xl text-2xl text-center">{t('options')}</h1>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">{t('bungalow')}</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
            {t('options-sentence1')}
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
           {t('reservation')}
          </a>
        </div>
        <img src={BungalovImg} alt="bungalovlar" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">{t('tent')}</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
          {t('options-sentence2')}
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            {t('reservation')}
          </a>
        </div>
        <img src={CadirImg} alt="cadir" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">{t('caravan')}</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
          {t('options-sentence3')}
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            {t('reservation')}
          </a>
        </div>
        <img src={KaravanImg} alt="karavan" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
    </div>
  );
};

export default Options;
