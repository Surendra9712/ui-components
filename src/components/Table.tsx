import React from 'react';
import { Table as AntdTable} from 'antd';
import type { TableProps } from 'antd';

export type AppTableProps<T> = TableProps<T>;

export const Table = <T extends object>({ ...props }: AppTableProps<T>) => {
    return <AntdTable<T> {...props} />;
};