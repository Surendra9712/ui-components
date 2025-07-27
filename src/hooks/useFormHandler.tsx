import { useState } from 'react';

export const useFormHandler = <T extends Record<string, any>>(
    initialState: T,
    validationSchema?: Record<string, [(value: any, formData?: T) => boolean, string][]>
) => {
    const [formData, setFormData] = useState<T>(initialState);
    const [errors, setErrors] = useState<Record<keyof T, string>>({} as any);
    const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as any);

    const handleChange = (name: keyof T, value: any) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when field changes
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (name: keyof T) => {
        setTouched(prev => ({ ...prev, [name]: true }));

        // Validate field on blur if schema exists
        if (validationSchema && validationSchema[name as string]) {
            const fieldValidators = validationSchema[name as string];
            validateField(name, fieldValidators);
        }
    };

    const validateField = (
        name: keyof T,
        validators: [(value: any, formData?: T) => boolean, string][]
    ) => {
        const value = formData[name];
        let error = '';

        for (const [validator, message] of validators) {
            if (!validator(value, formData)) {
                error = message;
                break;
            }
        }

        setErrors(prev => ({ ...prev, [name]: error }));
        return !error;
    };

    const validateForm = () => {
        if (!validationSchema) return true;

        let isValid = true;
        const newErrors: Record<string, string> = {};

        Object.entries(validationSchema).forEach(([field, validators]) => {
            const value = formData[field as keyof T];
            let fieldError = '';

            for (const [validator, message] of validators) {
                if (!validator(value, formData)) {
                    fieldError = message;
                    break;
                }
            }

            if (fieldError) {
                isValid = false;
                newErrors[field] = fieldError;
            }
        });

        setErrors(newErrors as any);
        return isValid;
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({} as any);
        setTouched({} as any);
    };

    return {
        formData,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateField,
        validateForm,
        resetForm,
        setFormData
    };
};