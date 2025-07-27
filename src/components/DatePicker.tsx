import React from 'react';
import {DatePicker as AntdDatePicker, DatePickerProps} from 'antd';

export const DatePicker = ({...props}: DatePickerProps) => {
    return (
        <AntdDatePicker
            format="YYYY-MM-DD"
            {...props}
        />
    );
};