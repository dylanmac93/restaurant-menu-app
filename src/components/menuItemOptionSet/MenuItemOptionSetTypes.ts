import { IMenuItemOptionSetItem } from "../../app/AppTypes";

export interface IMenuItemOptionSetProps {
  isMasterOptionSet: boolean;
  price: number;
  menuItemOptionSetItems?: IMenuItemOptionSetItem[];
}
