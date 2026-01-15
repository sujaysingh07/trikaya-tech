"use client";

import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FormikValues,
    FormikHelpers,
} from "formik";
import { ObjectSchema } from "yup";

type GenericFormProps<T extends FormikValues> = {
    initialValues: T;
    validationSchema: ObjectSchema<T>;
    fields: {
        name: keyof T;
        label?: string;
        placeholder?: string;
        type: "text" | "email" | "tel" | "radio";
        options?: { label: string; value: string }[];
    }[];
    onSubmit: (values: T) => void;
};

export function GenericForm<T extends FormikValues>({
    initialValues,
    validationSchema,
    fields,
    onSubmit,
}: GenericFormProps<T>) {
    return (
        <Formik<T>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: T, _helpers: FormikHelpers<T>) => {
                onSubmit(values);
            }}
        >
            {() => (
                <Form className="space-y-3">
                    {fields.map((field) => (
                        <div key={String(field.name)}>
                            {field.label && (
                                <p className="mb-1 text-sm font-semibold">{field.label}</p>
                            )}

                            {/* INPUT */}
                            {field.type !== "radio" && (
                                <Field
                                    name={String(field.name)}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-lg border-2 border-[#CCCCCC] px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            )}

                            {/* RADIO */}
                            {field.type === "radio" && (
                                <div className="space-y-2">
                                    {field.options?.map((opt) => (
                                        <label
                                            key={opt.value}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <Field
                                                type="radio"
                                                name={String(field.name)}
                                                value={opt.value}
                                            />
                                            {opt.label}
                                        </label>
                                    ))}
                                </div>
                            )}
                            <div className="min-h-4">
                                <ErrorMessage
                                    name={String(field.name)}
                                    component="p"
                                    className="text-xs font-semibold text-red-500 "
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}
