"use client"
import React, {ReactNode} from 'react';
import {useFormContext} from '../provider/Form';

interface FormItemProps {
    children: ReactNode,
    name?: string,
    label?: string,
}

export const FormItem = ({
                             name,
                             label,
                             children,
                         }: FormItemProps) => {
    const {formErrors} = useFormContext();
    const error = (formErrors && name) ? formErrors[name] : '';
    return (
        <div className={`ui-form-item ${error ? "error" : ""}`}>
            {label && <label>{label}</label>}
            {children}
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};