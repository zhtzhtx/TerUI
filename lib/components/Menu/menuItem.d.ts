import React, { ReactNode } from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
