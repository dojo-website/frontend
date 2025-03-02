"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { createParticipant } from "@/services/inscrebete";

const RegistrationForm = ({ data }) => {
  const t = useTranslations("registrationForm");
  const classLevels = ["Beginner", "Intermediate", "Advanced"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {

      // Format the payload
      const payload = {
        ...formData,
        age: parseInt(formData.age, 10), // Convert age to a number
        class_level: formData.class_level.toLowerCase(), // Convert class_level to lowercase
        phone_number: formData.phone_number || null, // Handle optional fields
        karate_history: formData.karate_history || null,
        medical_condition: formData.medical_condition || null,
        guardian_full_name: formData.guardian_full_name || null,
        guardian_phone_number: formData.guardian_phone_number || null,
        guardian_email: formData.guardian_email || null,
      };

      const response = await createParticipant(payload);
      alert(t("submit") + " ✅");
    } catch (error) {
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );

      if (error.response?.data) {
        // Display specific error messages from the API
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        alert(t("error") + " ❌");
      }
    } finally {
      reset();
    }
  };
  return (
    <section className="p-8 mx-auto bg-white max-w-7xl">
      <h1 className="mb-6 text-center">{data?.title}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 font-roboto"
      >
        <fieldset className="pt-4">
          <legend className="text-xl font-semibold">
            <h3 className="font-notoSans">{data?.practitioner_title}</h3>
          </legend>
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="block font-medium">{data?.name_title}:</label>
                <input
                  {...register("full_name", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">{data?.age_title}:</label>
                <input
                  type="number"
                  {...register("age", {
                    required: true,
                    min: { value: 1, message: "Minimum age is 1" },
                    max: { value: 120, message: "Maximum age is 120" },
                  })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>

              <div className="relative">
                <label className="block font-medium">
                  {data?.class_title}:
                </label>
                <div className="relative">
                  <select
                    {...register("class_level")}
                    defaultValue=""
                    className="w-full p-3 bg-[#F3EFEF] border rounded-md appearance-none pr-10"
                  >
                    <option value="" disabled></option>
                    <option value="Beginner">{classLevels[0]}</option>
                    <option value="Intermediate">{classLevels[1]}</option>
                    <option value="Advanced">{classLevels[2]}</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src="/arrow-dropdown.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block font-medium">
                {data?.medical_condition_title}:
              </label>
              <textarea
                {...register("medical_condition")}
                className="w-full min-h-44 flex-1 text-sm leading-relaxed p-3 bg-[#F3EFEF] border rounded-md"
              />
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Guardian Details */}
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
                  {data?.guardian_name_title}:
                </label>
                <input
                  {...register("guardian_full_name")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">
                  {data?.guardian_email_title}:
                </label>
                <input
                  type="email"
                  {...register("guardian_email")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">
                  {data?.guardian_phone_title}:
                </label>
                <input
                  type="tel"
                  {...register("guardian_phone_number")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Details */}
          <fieldset className="w-full space-y-4 md:w-1/2">
            <legend className="text-xl font-semibold">
              <h3>{data?.contact_details_heading}</h3>
              <br className="hidden md:block" />
            </legend>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium">
                  {data?.contact_email_title}:
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">
                  {data?.contact_phone_title}:
                </label>
                <input
                  type="tel"
                  {...register("phone_number", { required: true })}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium">
                  {data?.contact_history_title}:
                </label>
                <input
                  {...register("karate_history")}
                  className="w-full p-3 bg-[#F3EFEF] border rounded-md"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <button type="submit" className="block mx-auto custom-btn">
          {data?.signup_button_title}
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
