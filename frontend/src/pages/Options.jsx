import React from "react";
import BungalovImg from "../assets/images/gorsel-1.jpg";
import KaravanImg from "../assets/images/gorsel-19.jpeg";
import CadirImg from "../assets/images/gorsel-21.jpg";

const Options = () => {
  return (
    <div className="flex flex-col pt-[10%] px-[20%] gap-10">
      <h1 className="font-bold text-5xl text-center">Seçeneklerimiz</h1>
      <div className="flex justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">Bungalov</h3>
          <p className="text-gray-500 leading-8">
            İçinde tuvaleti, duşu ve kliması bulunan bungalovlarımızda biri
            ikili diğeri tekli olmak üzere iki adet yatak bulunmaktadır. Gecelik
            fiyat: 2500 TL'dir. Bungalovlarda kalan misafirlerimize ek olarak
            sabah serpme kahvaltı hizmeti de sunulmaktadır. Kahvaltılı fiyat:
            Gecelik 3000 TL'dir. İşletmemizde akşam yemeği için yiyecek
            bulunmakla beraber ortak mutfak ve yanmış şekilde gelen mangal
            hizmetimizde bulunmaktadır.
          </p>
          <a
            href="/"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={BungalovImg} alt="bungalovlar" className="w-[500px]"/>
      </div>
      <div className="flex justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">Çadır</h3>
          <p className="text-gray-500 leading-8">
            Çadır alanlarımızda duş, tuvalet, mutfak, internet ve otopark
            hizmetleri tesisimiz tarafından karşılanmaktadır. 0-6 yaş arası
            misafirlerimiz ücretsiz. 6-12 yaş arası misafirlerimiz için gecelik
            ücret kişi başı: 150₺ Diğer misafirlerimiz için gecelik ücret kişi
            başı: 300₺{" "}
          </p>
          <a
            href="/"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={CadirImg} alt="cadir" className="w-[500px]" />
      </div>
      <div className="flex justify-between mt-[5%] gap-8 border border-secondary rounded-xl p-5 options-card-shadow">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">Karavan Kamp</h3>
          <p className="text-gray-500 leading-8">
            Çadır alanlarımızda duş, tuvalet, mutfak, internet ve otopark
            hizmetleri tesisimiz tarafından karşılanmaktadır. 0-6 yaş arası
            misafirlerimiz ücretsiz. 6-12 yaş arası misafirlerimiz için gecelik
            ücret kişi başı: 150₺ Diğer misafirlerimiz için gecelik ücret kişi
            başı: 300₺{" "}
          </p>
          <a
            href="/"
            className="mt-auto w-fit text-white px-6 py-4 rounded-3xl rez-btn"
          >
            Rezervasyon
          </a>
        </div>
        <img src={KaravanImg} alt="karavan" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Options;
