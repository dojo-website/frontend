"use client";

import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ClassSchedule = ({
  schedule_title,
  schedule_description,
  schedule_days, // Days on which the classes occur
  age_group_schedules,
  course_structure_title,
  course_structure_description,
  structure_details, // Array containing course structure details
}) => {
  const t = useTranslations();

  return (
    <section className="relative flex flex-col mx-auto max-w-7xl">
      {/* Mobile Watermarks */}
      <div className="absolute w-full h-full select-none md:hidden">
        <Image
          src="/watermarks/watermark-1.png"
          className="absolute top-0 left-0 w-32 h-auto"
          width={200}
          height={200}
          alt="Watermark 1"
        />
        <Image
          src="/watermarks/watermark-2.png"
          className="absolute bottom-0 right-0 w-32 h-auto "
          width={200}
          height={200}
          alt="Watermark 2"
        />
      </div>
      {/* Tablet and Desktop Watermarks */}
      <div className="absolute bottom-0 right-0 h-auto select-none w-44 max-md:hidden">
        <Image
          src="/watermarks/watermark-1.png"
          className="h-auto w-44"
          width={200}
          height={200}
          alt="Watermark 1"
        />
        <Image
          src="/watermarks/watermark-2.png"
          className="w-40 h-auto"
          width={200}
          height={200}
          alt="Watermark 2"
        />
      </div>
      {/* Main Content */}
      <section className="relative max-w-5xl px-6 py-12 mx-auto ">
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <h1 className="mb-4 font-bold text-center">{schedule_title}</h1>
            <p className="">{schedule_description}</p>

            <div className="mt-6 rounded-lg ">
              <h6 className="mb-2 font-bold">{schedule_days}</h6>
              <ul className="mx-3 space-y-2 text-sm font-roboto">
                {age_group_schedules.map((classItem) => (
                  <li
                    key={classItem.id}
                    className="flex items-center gap-2 font-semibold text-primary"
                  >
                    <div className="rounded-full size-1.5 bg-primary" />

                    <p>
                      {classItem.time_ranges}:&nbsp;
                      <span className="font-normal text-black">
                        {classItem.age_group}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div>
            <h1 className="mb-4 font-bold text-center">
              {course_structure_title}
            </h1>
            <p className="mb-6">{course_structure_description}</p>

            <ol className="list-decimal list-inside">
              {structure_details.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 p-4 rounded-lg"
                >
                  <span className="font-semibold">{index + 1}.</span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </section>
    </section>
  );
};

export default ClassSchedule;
