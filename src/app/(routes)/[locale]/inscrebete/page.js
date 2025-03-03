"use client";

import React, { useEffect, useState } from "react";
import RegistrationForm from "./_components/RegistrationForm";
import RegistrationFAQ from "./_components/RegistrationFAQs";
import TitleSection from "@/components/TitleSection";
import Loader from "@/components/Loader";
import { getSignupData } from "@/services/inscrebete";

const Inscrebete = () => {
  const [signupData, setSignupData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSignupData();
        if (response) {
          setSignupData(response);
        } else {
          console.warn("Page data is empty!");
        }
      } catch (error) {
        console.error("Error loading page data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[80vh]">
          <Loader />
        </div>
      ) : signupData ? (
        <>
          <TitleSection
            title={signupData?.title}
            image={signupData?.signup_image}
          />
          <RegistrationForm data={signupData} />
          <RegistrationFAQ
            title={signupData?.faqs_heading}
            faqs={signupData?.signup_faqs}
          />
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[80vh]">
          <h5 className="font-bold text-center text-primary">
            No se encontró ningún registro.
          </h5>
        </div>
      )}
    </div>
  );
};

export default Inscrebete;
