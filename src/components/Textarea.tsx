import React from 'react';
import {Input} from "antd";
import {TextAreaProps} from "antd/es/input";
const {TextArea} = Input;

export const Textarea = ({...props}: TextAreaProps) => {
    return (
        <TextArea
            {...props}
        />
    );
};