import {Button as AntdButton, ButtonProps} from 'antd';
import React from "react";

export const Button = ({...props }: ButtonProps) => {
    return (
        <AntdButton
            {...props}
        />
    );
};