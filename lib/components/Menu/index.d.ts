import { FC } from 'react';
import { MenuProps } from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { MenuItemProps } from './menuItem';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export { MenuItem, SubMenu };
export default TransMenu;
