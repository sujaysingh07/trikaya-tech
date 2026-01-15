
'use client'
import { GenericForm } from "@/src/components/DynamicForm/Form";
import { doubtFormFields } from "./doubtForm.fields";

import {
    doubtFormValidationSchema,
    DoubtFormValues,
} from "./doubtForm.validation";
import { doubtFormInitialValues } from "./doubtForm.initial";

export default function DoubtFormSection() {
    const handleSubmit = (values: DoubtFormValues) => {
        console.log(values);
    };

    return (
        <GenericForm<DoubtFormValues>
            initialValues={doubtFormInitialValues}
            validationSchema={doubtFormValidationSchema}
            fields={doubtFormFields}
            onSubmit={handleSubmit}
        />
    );
}
