"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

const RegistrationForm = () => {
  const t = useTranslations("registrationForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(t("submit") + " ✅");
  };

  return (
    <section className="p-8 mx-auto bg-white max-w-7xl">
      <h1 className="mb-6 text-center">{t("title")}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 font-roboto"
      >
        <fieldset className="pt-4">
          <legend className="text-xl font-semibold">
            <h3 className="font-notoSans">{t("practitionerDetails")}</h3>
          </legend>
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="block font-medium">{t("fullName")}:</label>
                <input
                  {...register("practicanteNombre", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">{t("age")}:</label>
                <input
                  type="number"
                  {...register("practicanteEdad", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">{t("class")}:</label>
                <select
                  {...register("claseInscripcion")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                >
                  <option value="">{t("select")}</option>
                  <option value="principiantes">{t("beginner")}</option>
                  <option value="intermedios">{t("intermediate")}</option>
                  <option value="avanzados">{t("advanced")}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium">
                {t("medicalCondition")}:
              </label>
              <textarea
                {...register("practicanteCondicion")}
                className="w-full h-[85%] p-3 bg-[#F3EFEF] border rounded-md"
              />
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Guardian Details */}
          <fieldset className="w-full space-y-4 md:w-1/2">
            <legend className="text-xl font-semibold">
              <h3>{t("guardianDetails")}</h3>
              <span className="text-[16px] text-black">
                {t("guardianNote")}
              </span>
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium">{t("fullName")}:</label>
                <input
                  {...register("tutorNombre")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">{t("email")}:</label>
                <input
                  type="email"
                  {...register("tutorEmail")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">{t("phone")}:</label>
                <input
                  type="tel"
                  {...register("tutorTelefono")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Details */}
          <fieldset className="w-full space-y-4 md:w-1/2">
            <legend className="text-xl font-semibold">
              <h3>{t("contactDetails")}</h3>
              <br className="hidden md:block" />
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium">{t("email")}:</label>
                <input
                  type="email"
                  {...register("contactoEmail", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">{t("phone")}:</label>
                <input
                  type="tel"
                  {...register("contactoTelefono", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">
                  {t("practicedBefore")}:
                </label>
                <input
                  {...register("practicaKarate")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <button type="submit" className="block mx-auto custom-btn">
          {t("submit")}
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
