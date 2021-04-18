import { IMenuItemOptionSetItem } from "../../app/AppTypes";

export interface IMenuItemOptionSetProps {
  isMasterOptionSet: boolean;
  name?: string | null;
  price: number;
  menuItemOptionSetItems?: IMenuItemOptionSetItem[];
}
