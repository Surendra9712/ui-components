import React from 'react';
import {Form} from 'antd';
import {useFormContext} from '../provider/Form';
import FormItem from "antd/es/form/FormItem";

interface FormItemProps extends React.ComponentProps<typeof FormItem> {
    name: string;
    showError?: boolean;
}

export const MyFormItem = ({
                               name,
                               showError = true,
                               ...props
                           }: FormItemProps) => {
    const {formErrors, touchedFields} = useFormContext();
    const error = touchedFields[name] ? formErrors[name] : '';

    return (
        <Form.Item
            name={name}
            validateStatus={error ? 'error' : ''}
            help={showError && error ? error : ''}
            {...props}
        >
        </Form.Item>
    );
};