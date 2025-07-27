export declare const useFormHandler: <T extends Record<string, any>>(initialState: T, validationSchema?: Record<string, [(value: any, formData?: T) => boolean, string][]>) => {
    formData: T;
    errors: Record<keyof T, string>;
    touched: Record<keyof T, boolean>;
    handleChange: (name: keyof T, value: any) => void;
    handleBlur: (name: keyof T) => void;
    validateField: (name: keyof T, validators: [(value: any, formData?: T) => boolean, string][]) => boolean;
    validateForm: () => boolean;
    resetForm: () => void;
    setFormData: import("react").Dispatch<import("react").SetStateAction<T>>;
};
