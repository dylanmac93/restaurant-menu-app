export interface IMenu {
  MenuId: number;
  MenuVersionNumber: number;
  VersionGuid?: string;
  MenuSections?: IMenuSection[];
  MenuSectionBehaviour?: number;
  DisplaySectionLinks?: boolean;
  ConcessionStores?: any[];
}

export interface IMenuSection {
  MenuSectionId: number;
  Name: string;
  Description?: string | null;
  DisplayOrder: number;
  MenuItems?: IMenuItem[];
  PublicId: string;
  IsDeleted: boolean;
  IsAvailable: boolean;
  IsHiddenFromUsers: boolean;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MenuSectionAvailability: IMenuSectionAvailability;
  ConcessionStoreId?: null;
  MenuSectionMetadata?: any[];
}

export interface IMenuItem {
  MenuItemId: number;
  Name: string;
  Description?: string | null;
  SpicinessRating?: number | null;
  Price: number;
  DisplayOrder: number;
  IsDeleted: boolean;
  Alcohol: boolean;
  Tags?: any[];
  PublicId: string;
  IsAvailable: boolean;
  MenuItemOptionSets?: IMenuItemOptionSet[];
  TaxRate?: null;
  TaxRateId?: number | null;
  TaxValue: number;
  MenuSectionId: number;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  ActualPrice: number;
  DisableVouchers: boolean;
  ExcludeFromVoucherDiscounting: boolean;
  DailySpecialHours?: any[];
  PriceCanIncrease: boolean;
  MenuItemMetadata?: any[];
}

export interface IMenuItemOptionSet {
  Name?: string | null;
  MenuItemOptionSetId: number;
  IsMasterOptionSet: boolean;
  DisplayOrder: number;
  MinSelectCount: number;
  MaxSelectCount: number;
  IsDeleted: boolean;
  PublicId: string;
  MenuItemOptionSetItems?: IMenuItemOptionSetItem[];
  ImageName?: null;
  ImageUrl?: null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MinPrice: number;
  MenuItemId: number;
  MenuItemOptionSetMetadata?: any[];
}

export interface IMenuItemOptionSetItem {
  MenuItemOptionSetItemId: number;
  Name: string;
  Price: number;
  TaxRateId?: null;
  TaxRate?: null;
  TaxValue: number;
  IsAvailable: boolean;
  DisplayOrder: number;
  IsDeleted: boolean;
  Tags?: any[];
  NextMenuItemOptionSetId?: number | null;
  PublicId: string;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  OptionSetItemMetadata?: any[];
}

export interface IMenuSectionAvailability {
  AvailableTimes?: IAvailableTime[] | null;
  MenuSectionId: number;
  AvailabilityMode: number;
}

export interface IAvailableTime {
  BusinessHoursPeriodId: number;
  DayOfWeek: number;
  StartTime: string;
  Period: string;
  StartTimeEarly: string;
  PeriodEarly: string;
}
