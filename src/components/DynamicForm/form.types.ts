// form.types.ts
export type FieldType = "text" | "email" | "tel" | "radio";

export type FormField<T> = {
  name: keyof T;
  label?: string;
  placeholder?: string;
  type: FieldType;
  options?: { label: string; value: string }[];
};
