"use client";
import Breadcrumb from "@/components/BreadCrumb";
import Image from "next/image";
import React from "react";
import { blogData } from "@/utils/Mocks/Data";
import BlogCard from "../_components/BlogCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Article = () => {
  const { locale } = useParams();
  const t = useTranslations();
  return (
    <div className="w-[90%] mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="inset-0 flex flex-col justify-center gap-2 w-[80%] my-6">
          <h1 className="font-bold text-black">Article Lorem Ipsum</h1>
          <Image
            src="/underline.png"
            alt="Underline"
            width={250}
            height={50}
            className="w-3/4 max-w-[250px]"
          />
        </div>
        <Breadcrumb
          items={[
            { id: 1, label: "Home", href: "/" },
            { id: 2, label: "Nuestro Blog", href: `${locale}/blog` },
            { id: 3, label: "Noticias", href: `${locale}/blog/news` },
            { id: 4, label: "Lorem Ipsum", href: `${locale}/blog/news/lorem` },
          ]}
        />
        <Image
          src="/hero-image.jpg"
          width={1000}
          height={300}
          alt="Blog Image"
          className="object-cover w-full my-4 rounded-xl h-72"
        />

        <div className="relative -z-10">
          <div className="absolute -bottom-24 right-0 w-56">
            <Image
              src="/watermarks/watermark-3.png"
              className="w-full h-auto"
              width={200}
              height={200}
              alt="Watermark 3"
            />
          </div>
          <div className="relative py-8 max-w-5xl mx-auto">
            <h2 className="mt-4 uppercase">Lorem ipsum</h2>
            <p className="mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consequuntur nostrum suscipit cum ipsa saepe adipisci consequatur
              impedit, sapiente debitis porro voluptatum non iure veniam
              inventore. A laborum explicabo ipsum, eos magni molestias
              asperiores nostrum doloremque cupiditate, nemo voluptatum officiis
              incidunt natus sunt amet error, suscipit non. Voluptatum beatae
              architecto, repudiandae vel a voluptas nostrum optio similique
              incidunt enim temporibus consectetur necessitatibus ad, quae
              molestiae aperiam, quasi exercitationem. Recusandae unde animi a
              earum sunt delectus, repellendus quis amet dignissimos itaque
              sapiente ullam sed maxime nisi exercitationem error aliquid.
            </p>
            <h2 className="mt-4 uppercase">Article Lorem ipsum</h2>
            <p className="mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consequuntur nostrum suscipit cum ipsa saepe adipisci consequatur
              impedit, sapiente debitis porro voluptatum non iure veniam
              inventore. A laborum explicabo ipsum, eos magni molestias
              asperiores nostrum doloremque cupiditate, nemo voluptatum officiis
              incidunt natus sunt amet error, suscipit non. Voluptatum beatae
              architecto, repudiandae vel a voluptas nostrum optio similique
              incidunt enim temporibus consectetur necessitatibus ad, quae
              molestiae aperiam, quasi exercitationem. Recusandae unde animi a
              earum sunt delectus, repellendus quis amet dignissimos itaque
              sapiente ullam sed maxime nisi exercitationem error aliquid.
            </p>
          </div>
        </div>
        <section className="flex flex-col items-center justify-center my-4">
          <h1 className="text-center uppercase my-2">{t("moreArticles")}</h1>
          <div className="grid w-full grid-cols-1 gap-6 p-4 md:p-6 md:grid-cols-3">
            {blogData.slice(0, 3).map((blog, index) => (
              <div key={index} className="h-full">
                {/* Add h-full to the wrapper div */}
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
          <Link href={`/${locale}/blog`} className="uppercase custom-btn">
            {t("moreArticles")}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Article;
