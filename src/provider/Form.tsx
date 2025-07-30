"use client"
import React, {createContext, useContext} from 'react';
import {Form as AntdForm} from 'antd';
import {FormProps as AntdFormProps} from 'antd/lib/form';

interface FormContextType {
    formErrors?: Record<string, string>;
}

const FormContext = createContext<FormContextType | null>(null);

interface FormProps extends AntdFormProps {
    children: React.ReactNode;
    formErrors?: Record<string, string>;
}

export const Form = ({
                         formErrors,
                         children,
                         ...props
                     }: FormProps) => {
    return (
        <FormContext.Provider value={{formErrors}}>
            <AntdForm layout="vertical"
                      {...props}>
                {children}
            </AntdForm>
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a Form component');
    }
    return context;
};