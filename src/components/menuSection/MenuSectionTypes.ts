import { IMenuItem, IMenuItemOptionSet } from "../../app/AppTypes";

export interface IMenuSectionProps {
  menuSectionItems?: IMenuItem[];
  image?: string | null;
  name: string;
}
