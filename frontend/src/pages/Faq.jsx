import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
  return (
    <div className='px-[20%] py-[10%]'>
        <h3 className='text-center font-bold text-4xl mb-8'>Sıkça Sorulan Sorular</h3>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Gecelik konaklama fiyatları nedir?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Bungalovların gecelik fiyatları 2500TL kahvaltı dahil  3000TL'dir. (Bayram günleri hariç)
                    Detaylı bilgi için <a href="/seceneklerimiz" className='text-primary'>buraya</a> tıklayınız.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Tesis hakkında bilgi verir misiniz?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Tesisimizde 6 adet bungalov, restoran, otopark alanı ve kamp alanı bulunmaktadır.
                    Detaylı bilgi için <a href="/seceneklerimiz" className='text-primary'>buraya</a> tıklayınız.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Nasıl ulaşabiliriz?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Sayfamızda yer alan <a href="https://www.google.com/maps/dir//Zeytinli,+Değirmen+Camping,+72.+Sk.+No:1,+10300+Edremit%2FBalıkesir/@39.6166619,26.9534734,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14b0c7ad7a5570eb:0x4424817a18225443!2m2!1d26.9538132!2d39.6172539!3e0?entry=ttu" target='blank' className='text-primary'>'Yol Tarifi'</a> butonu tıklayarak ya da 'iletişim' bölümünde yer alan haritaya tıklayarak tesisimiz için yol tarifi alabilirsiniz.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Faq