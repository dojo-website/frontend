"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { createParticipant } from "@/services/inscrebete";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Image from "next/image";
import Loader from "@/components/Loader";

const RegistrationForm = ({ data }) => {
  const t = useTranslations("registrationForm");

  // Available class levels
  const classLevels = ["Beginner", "Intermediate", "Advanced"];
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [confirmationModal, setConfirmationModal] = useState({
    open: false,
    message: "",
  });
  const [flashMessage, setFlashMessage] = useState({
    open: false,
    message: "",
    type: "",
  }); // 'type' can be 'success' or 'error'

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const fullName = watch("full_name");
  const age = watch("age");
  const classLevel = watch("class_level");
  const email = watch("email");
  const phoneNumber = watch("phone_number");

  useEffect(() => {
    if (flashMessage.open) {
      const timer = setTimeout(() => {
        setFlashMessage({ open: false, message: "", type: "" });
      }, 4000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [flashMessage.open]);

  const onSubmit = async (formData) => {
    try {
      // Construct payload with formatted values
      const payload = {
        ...formData,
        age: parseInt(formData.age, 10), // Convert age to integer
        class_level: formData.class_level.toLowerCase(), // Convert class level to lowercase
        phone_number: formData.phone_number || null,
        karate_history: formData.karate_history || null,
        medical_condition: formData.medical_condition || null,
        guardian_full_name: formData.guardian_full_name || null,
        guardian_phone_number: formData.guardian_phone_number || null,
        guardian_email: formData.guardian_email || null,
      };

      await createParticipant(payload);
      setFlashMessage({ open: true, message: t("submit"), type: "success" });
      reset();
    } catch (error) {
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );
      setFlashMessage({
        open: true,
        message: error.response?.data
          ? JSON.stringify(error.response.data)
          : t("error"),
        type: "error",
      });
    }
  };

  const handleFormSubmit = (formData) => {
    setConfirmationModal({
      open: true,
      message: "Â¿Quieres enviar este formulario?",
      formData,
    });
  };

const handleConfirmation = async (confirmed) => {
  if (confirmed) {
    setIsLoading(true); // Start loading
    try {
      await onSubmit(confirmationModal.formData);
    } finally {
      setIsLoading(false); // Stop loading
      setConfirmationModal({ open: false, message: "" }); // Close modal
    }
  } else {
    setConfirmationModal({ open: false, message: "" }); // Close modal if not confirmed
  }
};

  return (
    <div className="relative bg-white">
      {/* WaterMark */}
      <div className="absolute top-0 left-0 m-4 select-none md:hidden">
        <Image
          src="/watermarks/watermark-1.png"
          className="absolute w-32 h-auto"
          width={200}
          height={200}
          alt="Watermark 1"
        />
      </div>
      {/* Page Content */}
      <section className="relative p-8 mx-auto max-w-7xl">
        <h1 className="my-6 text-center uppercase">{data?.registration_title}</h1>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-12 font-roboto"
        >
          <div className="my-4">
            <fieldset className="pt-4">
              <legend className="text-xl font-semibold">
                <h3 className="font-bold line-clamp-1 font-roboto">
                  {data?.practitioner_title}
                </h3>
              </legend>
              <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold">
                      {data?.name_title}
                    </label>
                    <input
                      {...register("full_name", {
                        required: "Full name is required",
                      })}
                      className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                    />
                    {errors.full_name && (
                      <span className="text-primary">
                        {errors.full_name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block font-semibold">
                      {data?.age_title}
                    </label>
                    <input
                      type="number"
                      {...register("age", {
                        required: true,
                        min: { value: 1 },
                        max: { value: 120, message: "Maximum age is 120" },
                      })}
                      className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                    />
                    {errors.age && (
                      <span className="text-primary">{errors.age.message}</span>
                    )}
                  </div>
                  <div className="relative w-full">
                    <label className="block font-semibold">
                      {data?.class_title}
                    </label>
                    <div className="relative w-full">
                      <select
                        {...register("class_level", {
                          required: "Class level is required",
                        })}
                        defaultValue=""
                        className="w-full p-3 bg-[#F3EFEF] border rounded-md appearance-none pr-10 focus:outline-none truncate"
                        onClick={() => setIsOpen((prev) => !prev)}
                        onBlur={() => setIsOpen(false)}
                      >
                        <option value="" disabled></option>
                        {classLevels.map((level) => (
                          <option key={level} value={level} className="">
                            {t(level)}
                          </option>
                        ))}
                      </select>
                      <div
                        className={`absolute inset-y-0 flex items-center pointer-events-none right-3 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <img src="/arrow-dropdown.svg" alt="Dropdown arrow" />
                      </div>
                    </div>
                    {errors.class_level && (
                      <span className="text-primary">
                        {errors.class_level.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="block font-semibold">
                    {data?.medical_condition_title}
                  </label>
                  <textarea
                    {...register("medical_condition")}
                    className="w-full min-h-44 flex-1 text-sm leading-relaxed p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col gap-8 my-4 md:flex-row">
            {/* Guardian Details */}
            <fieldset className="w-full space-y-4 md:w-1/2">
              <legend className="text-xl font-semibold max-h-16">
                <h3 className="font-bold font-roboto line-clamp-1">
                  {data?.guardian_details_heading}
                </h3>
                <span className="text-[16px] text-black">
                  {data?.guardian_details_subheading}
                </span>
              </legend>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-semibold">
                    {data?.guardian_name_title}
                  </label>
                  <input
                    {...register("guardian_full_name")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold">
                    {data?.guardian_email_title}
                  </label>
                  <input
                    type="email"
                    {...register("guardian_email")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold">
                    {data?.guardian_phone_title}
                  </label>
                  <input
                    type="tel"
                    {...register("guardian_phone_number")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
              </div>
            </fieldset>

            {/* Contact Details */}
            <fieldset className="w-full space-y-4 md:w-1/2">
              <legend className="text-xl font-semibold max-h-16">
                <h3 className="font-bold font-roboto">
                  {data?.contact_details_heading}
                </h3>
                <br className="hidden md:block" />
              </legend>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-extrabold">
                    {data?.contact_email_title}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold">
                    {data?.contact_phone_title}
                  </label>
                  <input
                    type="tel"
                    {...register("phone_number")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold">
                    {data?.contact_history_title}
                  </label>
                  <input
                    {...register("karate_history")}
                    className="w-full p-3 bg-[#F3EFEF] focus:bg-white border rounded-md"
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            disabled={
              !fullName || !age || !classLevel || !email || !phoneNumber
            }
            className="block mx-auto custom-btn disabled:opacity-50"
          >
            {data?.signup_button_title}
          </button>
        </form>
        {/* Confirmation Modal */}
        {confirmationModal.open && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[90%] max-w-lg h-64 flex flex-col justify-evenly p-8 transition-transform duration-300 transform scale-95 bg-white rounded-lg shadow-lg hover:scale-100">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader /> {/* Replace with your Loader component */}
                </div>
              ) : (
                <>
                  <h4 className="mb-6 text-xl font-bold text-center">
                    {confirmationModal.message}
                  </h4>
                  <div className="flex justify-center gap-6 md:justify-end">
                    <button
                      onClick={() => handleConfirmation(true)}
                      className="w-24 px-6 py-3 text-white transition-all duration-200 bg-green-500 rounded-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Sí
                    </button>
                    <button
                      onClick={() => handleConfirmation(false)}
                      className="w-24 px-6 py-3 text-white transition-all duration-200 bg-red-600 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {flashMessage.open && (
          <div className="fixed right-0 flex items-center justify-center p-4 top-24">
            <AnimatedSection direction="top">
              <div
                className={`p-4 px-8 rounded-md ${
                  flashMessage.type === "success"
                    ? "bg-green-500"
                    : "bg-primary"
                } text-white`}
              >
                <h4>{flashMessage.message}</h4>
              </div>
            </AnimatedSection>
          </div>
        )}
      </section>
    </div>
  );
};

export default RegistrationForm;
