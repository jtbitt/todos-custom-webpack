import { Button as MUIButton, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => (
  <MUIButton variant="contained" fullWidth {...props} />
);
