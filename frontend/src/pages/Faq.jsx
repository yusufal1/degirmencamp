import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Trans, useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div className="px-[20%] py-[10%]">
      <h3 className="text-center font-bold md:text-4xl text-2xl mb-8">
        {t("faq")}
      </h3>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{t("question1")}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <Trans
                i18nKey="answer1"
                components={{
                  1: (
                    <a
                      href="https://www.instagram.com/degirmen_camp/"
                      target="blank"
                      className="text-secondary sm:text-base text-xs"
                    >
                      {t("here")}
                    </a>
                  ),
                }}
              />
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{t("question2")}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            <Trans
                i18nKey="answer2"
                components={{
                  1: (
                    <a
                      href="/seceneklerimiz"
                      target="blank"
                      className="text-secondary sm:text-base text-xs"
                    >
                      {t("here")}
                    </a>
                  ),
                }}
              />
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{t("question3")}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            <Trans
                i18nKey="answer3"
                components={{
                  1: (
                    <a
                      href="https://www.google.com/maps/dir//Zeytinli,+Değirmen+Camping,+72.+Sk.+No:1,+10300+Edremit%2FBalıkesir/@39.6166619,26.9534734,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14b0c7ad7a5570eb:0x4424817a18225443!2m2!1d26.9538132!2d39.6172539!3e0?entry=ttu"
                      target="blank"
                      className="text-secondary sm:text-base text-xs"
                    >
                      {t("directions")}
                    </a>
                  ),
                }}
              />             
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
