import { Card as AntCard} from "antd";
import { CardProps } from "antd/es/card";

export const Card = ({children, ...props }: CardProps) => {
    return <AntCard {...props}>{children}</AntCard>;
};
