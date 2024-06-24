import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


const resources = {
  en: {
    translation: {
      "booking": "Make Your Reservation",
      "homepage": "Home Page",
      "about-us": "About Us",
      "options": "Options",
      "events": "Events",
      "gallery": "Gallery",
      "contact": "Contact",
      "banner-title1-1": "Listen to",
      "banner-title1-2": "the Sound of Nature",
      "banner-title2-1": "Peace by",
      "banner-title2-2": "the Stream",
      "reservation": "Reservation",
      "fullName": "Name Surname",
      "email": "E-Mail",
      "phone": "Phone",
      "reservationType": "Reservation Type",
      "in-out-time": "In-Out Time",
      "numberOfAdults": "Number of Adults",
      "numberOfChildren": "Number of Children",
      "send": "Send",
      "bungalow": "Bungalow",
      "tent": "Tent",
      "caravan": "Caravan",
      "main-title1": "Our Peaceful Camp at the Foothills of Kazdağları",
      "main-title2": "A paradise by the stream at the foot of the Kazdağları, a storehouse of oxygen, intertwined with nature",
      "main-sentence1": "A camping experience at the foot of the Kazdağları, in touch with nature.",
      "main-sentence2": "Peaceful accommodation by the creek with caravan, bungalow and tent options.",
      "main-sentence3": "All your needs such as electricity, water and breakfast service are covered.",
      "discoverMore": "Discover More",
      "card-sentence1": "In our bungalows with toilet, shower and air conditioning, there are two beds, one double and one single.",
      "card-sentence2": "In our tent areas, you can camp peacefully by the stream with your own tent or with the tents we provide.",
      "card-sentence3": "We offer electricity, water, toilet and internet services for our guests who want to come with their caravans.",
      "readMore": "Read More",
      "ourEvents": "Our Events",
      "ourEvents-sentence": "As Değirmen Camping, we organize events such as Off Road, Canoeing, Yoga and live music. Please follow our <1>Instagram</1> page for event details and dates.",
      "info": "Info",
      "discover": "Discover",
      "directions": "Directions",
      "comments": "Comments",
      "bookNow": "Book Now",
      "faq": "FAQ",
      "guestComments": "Comments From Our Guests",
      "about-sentence": "We established our camp, which takes its name from the 100-year-old stone mill, as a family business 20 years ago in Zeytinli Village, which is a natural wonder. In our area where the stream raxes with plane trees, where there are peacocks famous for the beauty of their feathers, we diversified our services over time and 3 years ago we offered 6 bungalow houses to our guests. Since we believe that vacation is not something that is done only in summer, 2 years ago we started to organize events at regular intervals regardless of summer and winter. We continue to review and improve our service standards to ensure that our guests who come happily leave happily.",
      "options-sentence1": "In our bungalows with toilet, shower and air conditioning, there are two beds, one double and one single. Price per night: 2500 TL. In addition to our guests staying in bungalows, a mixed breakfast service is also offered in the morning. Price with breakfast:  3000 TL per night. Although there is food for dinner in our business, we have a common kitchen and a barbecue service that comes in burnt form.",
      "options-sentence2": "In our tent areas, shower, toilet, kitchen, internet and parking services are provided by our facility. Our guests between 0-6 years old are free of charge. For our guests between 6-12 years old, the nightly fee is per person: 150₺ Per person per night for other guests: 300₺",
      "options-sentence3": "We offer electricity, water, toilet and internet services for our guests who want to come with their caravans. Caravan price for two people: 650 TL. Price for three people or more: 750 TL. Discounts will be applied for stays of three days or more.",
      "contactUs": "Contact us",
      "getInTouch": "Get in touch",
      "message": "Message",
      "here": "here",
      "question1": "What are the nightly accommodation prices?",
      "question2": "Can you tell us about the facility?",
      "question3": "How can we reach them?",
      "answer1": "Nightly prices of the bungalows are 2500TL and 3000TL including breakfast. (Except holidays) Click <1>here</1> for detailed information.",
      "answer2": "Our facility has 6 bungalows, restaurant, parking area and camping area. Click <1>here</1> for detailed information.",
      "answer3": "You can get directions to our facility by clicking the <1>'Directions'</1> button on our page or by clicking on the map in the 'contact' section.",
      "checkIn": "Check-In Date",
      "checkOut": "Check-Out Date",
      "haveTent": "I have tent",
      "notHaveTent": "I don't have tent"
    }
  },
  tr: {
    translation: {
      "booking": "Rezervasyonunuzu Yapın",
      "homepage": "Ana Sayfa",
      "about-us": "Hakkımızda",
      "options": "Seçeneklerimiz",
      "events": "Etkinliklerimiz",
      "gallery": "Galeri",
      "contact": "İletişim",
      "banner-title1-1": "Doğanın",
      "banner-title1-2": "Sesini Dinle",
      "banner-title2-1": "Dere Kenarında",
      "banner-title2-2": "Huzur",
      "reservation": "Rezervasyon",
      "fullName": "Ad Soyad",
      "email": "E-Posta",
      "phone": "Telefon",
      "reservationType": "Rezervasyon Tipi",
      "in-out-time": "Giriş-Çıkış Zamanı",
      "numberOfAdults": "Yetişkin Sayısı",
      "numberOfChildren": "Çocuk Sayısı",
      "send": "Gönder",
      "bungalow": "Bungalov",
      "tent": "Çadır",
      "caravan": "Karavan",
      "main-title1": "Kazdağları'nın Eteklerindeki Huzur Dolu Kampımız",
      "main-title2": "Doğa ile iç içe, oksijen deposu Kazdalar'nın eteklerinde dere kenarında bir cennet",
      "main-sentence1": "Kaz Dağları'nın eteklerinde, doğayla iç içe bir kamp deneyimi.",
      "main-sentence2": "Dere kenarında karavan, bungalov ve çadır seçenekleriyle huzurlu bir konaklama.",
      "main-sentence3": "Elektrik, su ve kahvaltı servisi gibi tüm ihtiyaçlarınız karşılanır.",
      "discoverMore": "Daha Fazlasını Keşfet",
      "card-sentence1": "İçinde tuvaleti, duşu ve kliması bulunan bungalovlarımızda biri ikili diğeri tekli olmak üzere iki adet yatak bulunmaktadır.",
      "card-sentence2": "Çadır alanlarımızda kendi çadırınızla veya bizim sağladığımız çadırlarla birlikte dere kenarında huzurla kamp yapabilirsiniz.",
      "card-sentence3": "Karavanlarıyla gelmek isteyen misafirlerimiz için elektrik, su, tuvalet ve internet hizmetleri sunmaktayız.",
      "readMore": "Daha Fazlası",
      "ourEvents-sentence": "Değirmen Camping olarak tesisimizde Off Road, Kano, Yoga ve canlı müzik gibi etkinlikler düzenliyoruz. Etkinlik detaylarına ve tarihlerine ulaşmak için <1>Instagram</1> sayfamızı takip ediniz.",
      "info": "Bilgi",
      "discover": "Keşfet",
      "directions": "Yol Tarifi",
      "comments": "Yorumlar",
      "bookNow": "Hemen Rezervasyon",
      "faq": "Sıkça Sorulan Sorular",
      "guestComments": "Misafirlerimizin Yorumları",
      "about-sentence": "Adını içindeki 100 yıllık taş değirmenden alan kampımızı aile işletmesi olarak bir tabiat harikası olan Zeytinli Köy'ünde 20 sene önce kurduk. Derenin çınar ağaçlarıyla raks ettiği, içinde tüylerinin güzelliği ile ün yapmış tavus kuşlarının olduğu alanımızda zamanla hizmetlerimizi çeşitlendirdik ve 3 sene kadar önce 6 adet bungalov evi misafirlerimizin hizmetine sunduk. Tatilin sadece yazın yapılan bir şey olmadığına inandığımız için 2 sene önce yaz kış farketmeksizin düzenli aralıklarla etkinlikler düzenlemeye başladık. Mutlu gelen misafirlerimizin mutlu ayrılmasını sağlamak için hizmet standartlarımızı gözden geçirmeye ve geliştirmeye devam ediyoruz.",
      "options-sentence1": "İçinde tuvaleti, duşu ve kliması bulunan bungalovlarımızda biri ikili diğeri tekli olmak üzere iki adet yatak bulunmaktadır. Gecelik fiyat: 2500 TL'dir. Bungalovlarda kalan misafirlerimize ek olarak sabah serpme kahvaltı hizmeti de sunulmaktadır. Kahvaltılı fiyat:  Gecelik 3000 TL'dir. İşletmemizde akşam yemeği için yiyecek bulunmakla beraber ortak mutfak ve yanmış şekilde gelen mangal hizmetimizde bulunmaktadır.",
      "options-sentence2": "Çadır alanlarımızda duş, tuvalet, mutfak, internet ve otopark hizmetleri tesisimiz tarafından karşılanmaktadır. 0-6 yaş arası misafirlerimiz ücretsiz. 6-12 yaş arası misafirlerimiz için gecelik ücret kişi başı: 150₺ Diğer misafirlerimiz için gecelik ücret kişi başı: 300₺",
      "options-sentence3": "Karavanlarıyla gelmek isteyen misafirlerimiz için elektrik, su, tuvalet ve internet hizmetleri sunmaktayız. Karavan iki kişi için fiyat : 650 TL. Üç kişi ve üzeri için fiyat : 750 TL. Üç gün ve üzeri kalımlarda indirim uygulanacaktır.",
      "contactUs": "İletişime geçin",
      "getInTouch": "Bize ulaşın",
      "message": "Mesaj",
      "here": "buraya",
      "question1": "Gecelik konaklama fiyatları nedir?",
      "question2": "Bize tesis hakkında bilgi verebilir misiniz?",
      "question3": "Nasıl Ulaşabiliriz?",
      "answer1": "Bungalovların gecelik fiyatları kahvaltı dahil 2500TL ve 3000TL'dir. (Tatil günleri hariç) Detaylı bilgi için <1>buraya</1> tıklayınız.",
      "answer2": "Tesisimizde 6 adet bungalov, restoran, otopark alanı ve kamp alanı bulunmaktadır. Detaylı bilgi için <1>buraya</1> tıklayınız.",
      "answer3": "Sayfamızda yer alan <1>'Yol Tarifi'</1> butonu tıklayarak ya da 'iletişim' bölümünde yer alan haritaya tıklayarak tesisimiz için yol tarifi alabilirsiniz.",
      "checkIn": "Giriş Tarihi",
      "checkOut": "Çıkış Tarihi",
      "haveTent": "Çadırım var.",
      "notHaveTent": "Çadırım yok."
    }
  }
};

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next) 
.init({
  resources,
  fallbackLng: "tr",
  detection: {
    order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie']
  },
  interpolation: {
    escapeValue: false 
  }
  });

  export default i18n;