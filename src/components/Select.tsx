import {
  Select as MUISelect,
  MenuItem as MUIMenuItem,
  SelectProps,
  MenuItemProps,
} from '@mui/material';

export const Select = (props: SelectProps) => <MUISelect {...props} />;
export const MenuItem = (props: MenuItemProps) => <MUIMenuItem {...props} />;
