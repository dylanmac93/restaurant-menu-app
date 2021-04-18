import { IMenuItemOptionSet } from "../../app/AppTypes";

export interface IMenuSectionItemProps {
  name: string;
  description?: string | null;
  price: number;
  menuItemOptionSets?: IMenuItemOptionSet[];
  image?: string | null;
}
