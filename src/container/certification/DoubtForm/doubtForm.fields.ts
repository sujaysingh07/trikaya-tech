// doubtForm.fields.ts

import { FormField } from "@/src/components/DynamicForm/form.types";
import { DoubtFormValues } from "./doubtForm.validation";

export const doubtFormFields: FormField<DoubtFormValues>[] = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
  },
  {
    name: "phone",
    placeholder: "Phone Number",
    type: "tel",
  },
  {
    name: "experience",
    label: "Experience",
    type: "radio",
    options: [
      { label: "Working Professional - Technical roles", value: "tech" },
      {
        label: "Working Professional - Non-technical roles",
        value: "non-tech",
      },
      { label: "College Student - Final year", value: "final-year" },
      { label: "College Student - 1st to pre-final year", value: "pre-final" },
      { label: "Others", value: "others" },
    ],
  },
];
