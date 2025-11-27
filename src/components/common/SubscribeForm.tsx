"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface SubscribeFormProps {
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("📩 Subscribed Email:", values.email);
      if (onSubmit) onSubmit(values.email);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
    >
      <div className="flex flex-col w-full max-w-[493px]">
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          autoComplete="off"
          className={`bg-[#F5F5F5] rounded-md px-4 py-3 h-full text-sm text-gray-700 focus:outline-none border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : formik.touched.email && !formik.errors.email
              ? "border-green-500"
              : "border-transparent"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="px-6 py-3 bg-black text-white rounded-md text-lg font-bold hover:bg-gray-800 transition disabled:opacity-60"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default SubscribeForm;
