import React from 'react';
import FormItem from "antd/es/form/FormItem";
interface FormItemProps extends React.ComponentProps<typeof FormItem> {
    name: string;
    showError?: boolean;
}
export declare const MyFormItem: ({ name, showError, ...props }: FormItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
