import Image from "next/image";

const Footer = () => {
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
          />
          <h5 className="font-semibold text-white">
            KIME: El enfoque que define el Karate
          </h5>
        </div>

        <div className="flex flex-col items-start gap-4 mt-6 md:mt-0">
          <h3 className="text-white uppercase text-start">
            Contact Information
          </h3>

          <div className="flex items-center gap-3">
            <Image
              src="/icon-location.png"
              width={20}
              height={20}
              alt="Location"
              className="object-contain size-8"
            />
            <p className="underline md:text-base">
              Estadio Las Condes, Santiago, Chile
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
            <p className="md:text-base">+56 9 9999 9999</p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icon-mail.png"
              width={20}
              height={20}
              alt="Email"
              className="object-contain size-8"
            />
            <p className="md:text-base">info@kime.cl</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <Image
            src="/icon-facebook.png"
            width={35}
            height={35}
            alt="Facebook"
            className="object-contain size-10"
          />
          <Image
            src="/icon-instagram.png"
            width={35}
            height={35}
            alt="Instagram"
            className="object-contain size-10"
          />
        </div>
      </section>

      <hr className="w-[90%] mx-auto border-gray-600 my-4" />

      <p className="flex justify-center pb-4 w-[60%] mx-auto text-center text-sm text-gray-300 md:text-base">
        © 2024 KIME Karate Dojo. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
