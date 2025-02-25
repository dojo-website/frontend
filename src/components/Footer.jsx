import Image from "next/image";
import { headLogo } from "../../public";

const Footer = () => {
  return (
    <footer className="w-full pt-6 text-white bg-black">
      <section className="flex flex-col md:flex-row justify-evenly">
        <div className="h-auto">
          <Image
            className="w-full p-4 bg-white"
            src={headLogo}
            width={100}
            height={100}
            alt="Head Logo"
          />
          <p className="my-3 font-semibold text-white ">
            KIME: El enfoque que define el Karate
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h3 className="text-white uppercase">Contact Information</h3>
          <div>Estadio Las Condes, Santiago, Chile</div>
          <p className="text-white">
            +56 9 9999 9999
            <br />
            <span className="underline">Escríbenos por WhatsApp</span>
          </p>
          <p className="text-white">info@kime.cl</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white rounded-full size-10"></div>
          <div className="bg-white rounded-full size-10"></div>
        </div>
      </section>
      <hr className="w-[90%] mx-auto border-primary my-3" />

      <p className="flex justify-center pb-4 text-white">
        © 2024 KIME Karate Dojo. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
