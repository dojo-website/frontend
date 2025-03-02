"use client";

import React, { useEffect, useState } from "react";
import RegistrationForm from "./_components/RegistrationForm";
import RegistrationFAQ from "./_components/RegistrationFAQs";
import TitleSection from "@/components/TitleSection";
import Loader from "@/components/Loader";
import { getSignupData } from "@/services/inscrebete";

const Inscrebete = () => {
  const [signupData, setSignupData] = useState(null);
  const [loading, setLoading] = useState(false);
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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className=" flex justify-center items-center min-h-[80vh]">
        <Loader />
      </div>
    );

  return (
    <div>
      <TitleSection
        title={signupData?.title}
        image={signupData?.signup_image}
      />
      <RegistrationForm data={signupData} />
      <RegistrationFAQ
        title={signupData?.faqs_heading}
        faqs={signupData?.signup_faqs}
      />
    </div>
  );
};

export default Inscrebete;
