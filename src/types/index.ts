import { ColorId, SearchOrderBy } from "unsplash-js";

export type Option = {
  name: string;
  value: SearchOrderBy;
};

export type ColorOption = {
  name: string;
  value: ColorId;
}

export type DropdownOption = {
  name: string;
  value: string;
};

export type Params = {
  query: string,
  page: number,
  orderBy: SearchOrderBy,
  color?: ColorId
}