export type AftercareButtonType = {
  name: string;
  className?: string;
  icon?: React.ReactNode;
  clickFunction?: (val: boolean) => void;
};
