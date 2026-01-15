// doubtForm.validation.ts
import * as Yup from "yup";

export const doubtFormValidationSchema = Yup.object({
  name: Yup.string().min(2, "Name is required").required(),
  email: Yup.string().email("Invalid email").required(),
  phone: Yup.string().min(10, "Invalid phone number").required(),
  experience: Yup.string().required("Select experience"),
});

export type DoubtFormValues = {
  name: string;
  email: string;
  phone: string;
  experience: string;
};
