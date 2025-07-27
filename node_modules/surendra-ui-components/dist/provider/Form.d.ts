import React from 'react';
import { FormProps as AntdFormProps } from 'antd/lib/form';
interface FormContextType {
    formErrors: Record<string, string>;
    touchedFields: Record<string, boolean>;
    handleBlur: (name: string) => void;
}
interface FormProps extends AntdFormProps {
    children: React.ReactNode;
    formErrors: Record<string, string>;
    touchedFields: Record<string, boolean>;
    handleBlur: (name: string) => void;
}
export declare const Form: ({ formErrors, touchedFields, handleBlur, children, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export declare const useFormContext: () => FormContextType;
export {};
