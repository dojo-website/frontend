import { useTranslations } from "next-intl";
import Image from "next/image";

const pillars = [
  {
    title: "Filosofía Marcial",
    image: "/pillar 1.png",
    description:
      "En Kime Dojo, el karate trasciende la actividad física: es un verdadero camino de vida. Nuestro enfoque se basa en el budo, la filosofía marcial que fomenta el respeto, la autodisciplina y valores esenciales como la humildad y la perseverancia. Además, promovemos un crecimiento integral, fortaleciendo cuerpo, mente y espíritu para prepararte a enfrentar los desafíos de la vida con equilibrio, confianza y determinación.",
  },
  {
    title: "Técnica Precisa",
    image: "/pillar 2.png",
    description:
      "Nos especializamos en perfeccionar cada aspecto del Karate Tradicional Shotokan. Desde los fundamentos básicos (kihon) hasta la ejecución de katas avanzados, cada movimiento es una oportunidad para refinar tu precisión, potencia y fluidez. Nuestro enfoque técnico garantiza que no solo aprendas a ejecutar las técnicas correctamente, sino también a comprender su propósito y aplicación práctica (bunkai).",
  },
  {
    title: "Defensa Personal",
    image: "/pillar 3.png",
    description:
      "El karate tradicional es una herramienta poderosa para la defensa personal. Te enseñamos a manejar situaciones reales con técnicas rápidas, efectivas y bajo control total. Más allá de la fuerza física, fomentamos un enfoque mental que prioriza evitar conflictos y resolver situaciones con seguridad y confianza, fortaleciendo tanto tu cuerpo como tu mente.",
  },
  {
    title: "Eficiencia Física",
    image: "/pillar 4.png",
    description:
      "Integramos principios modernos de biomecánica para que cada técnica sea eficiente y efectiva. Aprenderás cómo el cuerpo genera fuerza y cómo optimizar postura, equilibrio y movimiento. Este enfoque no solo maximiza tu potencia y previene lesiones, sino que lleva tu entrenamiento a un nivel más consciente, profundo y estratégico.",
  },
];

const PillarsSection = () => {
  const t = useTranslations("home");

  return (
    <section className="w-full px-4 py-12 bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto my-4">
        <h1 className="mb-6 text-white uppercase"> {t("pillarOfKime")} </h1>
        <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-6 text-center bg-white rounded-lg shadow-lg"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={100}
                height={100}
                className="w-auto mb-4 h-36"
              />
              <h3 className="uppercase ont-bold ">{pillar.title}</h3>
              <hr className="w-full my-2 border-primary" />
              <p className="font-medium text-justify text-black">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-10 custom-btn">{t("signUpNow")}</button>
      </div>
    </section>
  );
};

export default PillarsSection;
