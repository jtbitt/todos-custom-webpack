import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface IHeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: IHeadingProps) => (
  <Typography variant="h5" component="h1" align="center">
    {children}
  </Typography>
);
