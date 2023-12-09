export type ContentModeProps = {
  value: string;
};

export type ContentNavigatorProps = number | {value: number};
export type ContentTitleNavigatorProps = string | {value: string};
export type ContentShowHideNavigatorProps = boolean | {value: boolean};
export type ContentNumber = number;
export type ContentString = string;
export type ContentBoolean = boolean;

export type ToVoid = () => void;

export type FunctionBranchToVoid = {
  closing: ToVoid;
  name: ContentString;
  suite: ContentNumber;
  room: ContentNumber;
  address: ContentString;
};

export type FunctionToVoid = {
  closing: ToVoid;
};

export type FunctionToData = {
  contentReturnData: (code: ContentString, val: ContentBoolean) => void;
};
