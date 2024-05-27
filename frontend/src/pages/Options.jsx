import React from "react";
import BungalovImg from "../assets/images/gorsel-1.jpg";
import KaravanImg from "../assets/images/gorsel-19.jpeg";
import CadirImg from "../assets/images/gorsel-21.jpg";

const Options = () => {
  return (
    <div className="flex flex-col pt-[10%] px-[10%] gap-10">
      <h1 className="font-bold md:text-4xl text-2xl text-center">Seçeneklerimiz</h1>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">Bungalov</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
            İçinde tuvaleti, duşu ve kliması bulunan bungalovlarımızda biri
            ikili diğeri tekli olmak üzere iki adet yatak bulunmaktadır. Gecelik
            fiyat: 2500 TL'dir. Bungalovlarda kalan misafirlerimize ek olarak
            sabah serpme kahvaltı hizmeti de sunulmaktadır. Kahvaltılı fiyat:
            Gecelik 3000 TL'dir. İşletmemizde akşam yemeği için yiyecek
            bulunmakla beraber ortak mutfak ve yanmış şekilde gelen mangal
            hizmetimizde bulunmaktadır.
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={BungalovImg} alt="bungalovlar" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">Çadır</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
            Çadır alanlarımızda duş, tuvalet, mutfak, internet ve otopark
            hizmetleri tesisimiz tarafından karşılanmaktadır. 0-6 yaş arası
            misafirlerimiz ücretsiz. 6-12 yaş arası misafirlerimiz için gecelik
            ücret kişi başı: 150₺ Diğer misafirlerimiz için gecelik ücret kişi
            başı: 300₺
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={CadirImg} alt="cadir" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4 lg:basis-1/2">
          <h3 className="sm:text-3xl text-xl">Karavan Kamp</h3>
          <p className="text-gray-500 sm:leading-8 leading-5 sm:text-base text-xs">
            Çadır alanlarımızda duş, tuvalet, mutfak, internet ve otopark
            hizmetleri tesisimiz tarafından karşılanmaktadır. 0-6 yaş arası
            misafirlerimiz ücretsiz. 6-12 yaş arası misafirlerimiz için gecelik
            ücret kişi başı: 150₺ Diğer misafirlerimiz için gecelik ücret kişi
            başı: 300₺
          </p>
          <a
            href="/rezervasyon"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={KaravanImg} alt="karavan" className="w-full lg:w-[500px] h-auto object-cover rounded-lg"/>
      </div>
    </div>
  );
};

export default Options;
