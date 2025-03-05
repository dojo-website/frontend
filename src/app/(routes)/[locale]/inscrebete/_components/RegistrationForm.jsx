"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { createParticipant } from "@/services/inscrebete";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/animations/AnimatedSection";

const RegistrationForm = ({ data }) => {
  const t = useTranslations("registrationForm");

  // Available class levels
  const classLevels = ["Beginner", "Intermediate", "Advanced"];
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
      message: "Do you want to submit this form?",
      formData,
    });
  };

  const handleConfirmation = (confirmed) => {
    setConfirmationModal({ open: false, message: "" });
    if (confirmed) {
      onSubmit(confirmationModal.formData);
    }
  };

  return (
    <section className="p-8 mx-auto bg-white max-w-7xl">
      <h1 className="mb-6 text-center">{data?.title}</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-12 font-roboto"
      >
        <fieldset className="pt-4">
          <legend className="text-xl font-semibold">
            <h3 className="font-notoSans">{data?.practitioner_title}</h3>
          </legend>

          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="block font-medium">{data?.name_title}</label>
                <input
                  {...register("full_name", {
                    required: "Full name is required",
                  })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
                {errors.full_name && (
                  <span className="text-red-500">
                    {errors.full_name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block font-medium">{data?.age_title}</label>
                <input
                  type="number"
                  {...register("age", {
                    required: true,
                    min: { value: 1, message: "Minimum age is 1" },
                    max: { value: 120, message: "Maximum age is 120" },
                  })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
                {errors.age && (
                  <span className="text-red-500">{errors.age.message}</span>
                )}
              </div>

              <div className="relative">
                <label className="block font-medium">{data?.class_title}</label>
                <div className="relative">
                  <select
                    {...register("class_level", {
                      required: "Class level is required",
                    })}
                    defaultValue=""
                    className="w-full p-3 bg-[#F3EFEF] border rounded-md appearance-none pr-10"
                  >
                    <option value="" disabled></option>
                    {classLevels.map((level) => (
                      <option key={level} value={level}>
                        {t(level)}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src="/arrow-dropdown.svg" />
                  </div>
                  {errors.class_level && (
                    <span className="text-red-500">
                      {errors.class_level.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block font-medium">
                {data?.medical_condition_title}
              </label>
              <textarea
                {...register("medical_condition")}
                className="w-full min-h-44 flex-1 text-sm leading-relaxed p-3 bg-[#F3EFEF] border rounded-md"
              />
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-8 md:flex-row">
          <fieldset className="w-full space-y-4 md:w-1/2">
            <legend className="text-xl font-semibold">
              <h3>{data?.guardian_details_heading}</h3>
              <span className="text-[16px] text-black">
                {data?.guardian_details_subheading}
              </span>
            </legend>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium">
                  {data?.guardian_name_title}
                </label>
                <input
                  {...register("guardian_full_name")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">
                  {data?.guardian_email_title}
                </label>
                <input
                  type="email"
                  {...register("guardian_email")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">
                  {data?.guardian_phone_title}
                </label>
                <input
                  type="tel"
                  {...register("guardian_phone_number")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="w-full space-y-4 md:w-1/2">
            <legend className="text-xl font-semibold">
              <h3>{data?.contact_details_heading}</h3>
            </legend>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium">
                  {data?.contact_email_title}
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">
                  {data?.contact_phone_title}
                </label>
                <input
                  type="tel"
                  {...register("phone_number")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">
                  {data?.contact_history_title}
                </label>
                <input
                  {...register("karate_history")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          disabled={!fullName || !age || !classLevel || !email || !phoneNumber}
          className="block mx-auto custom-btn disabled:opacity-50"
        >
          {data?.signup_button_title}
        </button>
      </form>

      {/* Confirmation Modal */}
      {confirmationModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-md">
            <p>{confirmationModal.message}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleConfirmation(true)}
                className="px-4 py-2 text-white rounded-md custom-btn"
              >
                Yes
              </button>
              <button
                onClick={() => handleConfirmation(false)}
                className="px-4 py-2 text-white bg-gray-500 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {flashMessage.open && (
        <div className="fixed right-0 flex items-center justify-center p-4 top-24">
          <AnimatedSection direction="top">
            <div
              className={`p-4 px-8 rounded-md ${
                flashMessage.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              <h4>{flashMessage.message}</h4>
            </div>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
};

export default RegistrationForm;
