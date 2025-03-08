"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getContacts from "@/services/contactUs";
import { useTranslations } from "next-intl";

const Footer = () => {
  const [contact, setContact] = useState(null);
  const t = useTranslations("footer");

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const contactData = await getContacts();

        if (contactData) {
          setContact(contactData);
        } else {
          console.warn("Contact data is empty!");
        }
      } catch (error) {
        console.error("Error loading contact data:", error);
      }
    };
    fetchContactData();
  }, []);

  // Check if the company logo is valid (non-empty string)
  const isValidLogo =
    contact?.company_logo &&
    typeof contact?.company_logo === "string" &&
    contact?.company_logo.trim() !== "";

  return (
    <footer className="flex-shrink-0 w-full pt-6 text-white bg-black">
      {/* Condition 1: Display a message if no contact data is found */}
      {!contact ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-center">{t("noContactFound")}</p>
        </div>
      ) : (
        <>
          <section className="flex flex-col items-center justify-between gap-3 px-6 mx-auto text-center max-w-7xl md:items-start md:text-left md:flex-row">
            {/* Company logo and slogan section */}
            <div className="flex flex-col items-center flex-1 w-full space-y-3 md:items-start">
              {/* Condition 2: Display the logo if valid, otherwise show a fallback message */}
              {isValidLogo ? (
                <Image
                  src={contact?.company_logo}
                  alt={
                    contact?.company_slogan
                      ? `${contact?.company_slogan} Image`
                      : "Logo Image"
                  }
                  width={300}
                  height={250}
                  className="object-cover h-auto p-2 bg-white max-md:w-full"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-auto">
                  <p className="text-white">{t("noImageFound")}</p>
                </div>
              )}
              <h5 className="text-base leading-tight text-white font-notoSans">
                {contact?.company_title + ": " + contact?.company_slogan}
              </h5>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-start flex-1 w-full gap-4 mt-6 md:mt-0">
              <h3 className="font-bold text-white uppercase text-start">
                {contact?.title}
              </h3>

              <div
                className="flex items-center gap-3"
                itemScope
                itemType="https://schema.org/Place"
              >
                <Image
                  src="/icon-location.png"
                  width={20}
                  height={20}
                  alt="Location"
                  className="object-contain size-8"
                />
                <p itemProp="address" className="md:text-base">
                  <a
                    href={contact?.location_value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:underline"
                  >
                    {contact?.location_text}
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icon-whatsapp.png"
                  width={20}
                  height={20}
                  alt="WhatsApp"
                  className="object-contain size-8"
                />
                <div className="flex flex-col">
                  <a
                    href={`https://wa.me/${contact?.whatsapp_contact.replace(
                      /\D/g,
                      ""
                    )}`} // Clean WhatsApp number for URL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="no-underline hover:underline">
                      {contact?.whatsapp_contact}
                    </p>
                    <p className="hidden underline md:block">
                      {contact?.whatsapp_text}
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icon-mail.png"
                  width={20}
                  height={20}
                  alt="Email"
                  className="object-contain size-8"
                />
                <p className="md:text-base">
                  <a
                    href={`mailto:${contact?.whatsapp_contact}`}
                    className="hover:underline"
                  >
                    {contact?.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 my-2 lg:flex-1 md:mt-0">
              <a
                href={contact?.facebook_link}
                target="_blank"
                rel="noopener noreferrer" // Ensures security and performance for external links
                aria-label="Visit our Facebook page"
              >
                <Image
                  src="/icon-facebook.png"
                  width={35}
                  height={35}
                  alt="Facebook"
                  className="object-contain transition-opacity duration-200 size-10 hover:opacity-80"
                />
              </a>
              <a
                href={contact?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Image
                  src="/icon-instagram.png"
                  width={35}
                  height={35}
                  alt="Instagram"
                  className="object-contain transition-opacity duration-200 size-10 hover:opacity-80"
                />
              </a>
            </div>
          </section>

          <hr className="w-[90%] mx-auto border-primary my-4" />

          <p className="flex justify-center pb-4 w-[60%] mx-auto text-center text-sm text-white md:text-base">
            {contact?.copyright_description}
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
