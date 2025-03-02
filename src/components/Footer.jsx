"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getContacts from "@/services/contactUs";
import Loader from "./Loader";

const Footer = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const contact = await getContacts();
        if (contact) {
          setContact(contact);
        } else {
          console.warn("Contact data is empty!");
        }
      } catch (error) {
        console.error("Error loading contact data:", error);
      } finally {
      }
    };
    fetchContactData();
  }, []);

  return (
    <footer className="w-full pt-6 text-white bg-black">
      <section className="flex flex-col items-center justify-between gap-3 px-6 mx-auto text-center max-w-7xl md:items-start md:text-left md:flex-row">
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <Image
            className="w-full h-auto p-2 bg-white"
            src="/KIMElogo.png"
            width={250}
            height={250}
            alt="Head Logo"
            priority
          />
          <h5 className="font-semibold text-white">
            {contact?.company_slogan || "Your Trusted Karate Dojo"}
          </h5>
        </div>

        <div className="flex flex-col items-start gap-4 mt-6 md:mt-0">
          <h3 className="text-white uppercase text-start">
            {contact?.title || "Contact Information"}
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
                href={`https://www.google.com/maps/search/`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:underline"
              >
                {contact?.location || "abc"}
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
                href="tel:+56999999999"
                className="no-underline md:text-base hover:underline"
                itemProp="telephone"
              >
                {contact?.whatsapp_contact || "123"}
              </a>
              <a
                href={`https://wa.me/${contact?.whatsapp_contact.replace(
                  /\D/g,
                  ""
                )}`}
                className="hidden underline md:block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write to us on WhatsApp
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
                {contact?.email || "abc@example.com"}
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href={contact?.facebook_link}
            target="_blank"
            rel="noopener noreferrer"
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
        {contact?.copyright_description || "abc"}
      </p>
    </footer>
  );
};

export default Footer;
